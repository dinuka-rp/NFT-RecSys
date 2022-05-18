# -*- coding: utf-8 -*-
"""# Trait Content Similarity-based NFT Recommender System.py

Original file is located at
    https://colab.research.google.com/drive/1iBz6SKCscjxowrEKL-j9teMF24Ul6x3L

https://towardsdatascience.com/how-to-build-from-scratch-a-content-based-movie-recommender-with-natural-language-processing-25ad400eb243

Check this later (not that different): https://medium.com/dataseries/recommendation-system-in-python-4d4cf6d33166 , https://gist.github.com/deansublett/06f010a886831f9dac5b1f9bce4f4229?source=post_page---------------------------
"""
"""
TODO:
have data pre-processing and loading on startup of the service, regenerate based on request from frontend
separate rarity & content into two separate services (folders here)
"""

import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer


def load_preprocess_data():
    """## Get Dataset"""
    # TODO (Extra): mongo(later, if time permites)

    assets_file_path = "../../datasets/bayc-nft-assets"
    global original_df
    original_df = pd.read_csv(assets_file_path, sep='\t')


    """## Data Cleaning"""

    for index, row in original_df.iterrows():
        original_df.at[index,'reference_id'] = row["asset_contract_address"] + "-" + str(row["nft_id"])

    global df
    df = original_df.copy(deep=True)

    df['traits_string'] = df['traits_string'].str.replace(';;',' ')

    df.set_index('reference_id', inplace = True)   # set reference_id as the index of the dataframe
    original_df.set_index('reference_id', inplace = True)   # set reference_id as the index of the dataframe

    df = df[['traits_string','total_rarity']]

    """## Modeling

    In order to detect similarities between nfts, I need to vectorize, as I mentioned above. I decided to use CountVectorizer rather than TfIdfVectorizer for one simple reason: I need a simple frequency counter for each word in my bag_of_words column. Tf-Idf tends to give less importance to the words that are more present in the entire corpus (our whole column, in this case) which is not what we want for this application, because every word is important to detect similarity! 

    *It seems like Tf-Idf would give more meaningful results* for ranking - check this later. For relevance, CountVectorizer seems to be ok.

    Once I have the matrix containing the count for each word, we can apply the cosine_similarity function
    """

    # instantiating and generating the count matrix
    count = CountVectorizer()   # used to transform a given text into a vector on the basis of the frequency (count) of each word that occurs in the entire text
    count_matrix = count.fit_transform(df['traits_string'])

    # print(count_matrix)
    count_matrix.todense()

    count_matrix.shape

    """in the count_matrix, i seems to be the NFT, j seems to be each word in the bag_of_words per NFT. the value at i, j gives the frequency of each word in the entire column of bag_of_words.

    For some reason (need to find out) this frequency is needed to calculate the cosine similarity between the content in NFTs. - *The definition of similarity between two vectors u and v is, in fact, the ratio between their dot product and the product of their magnitudes.*
    """

    # creating a Series for the reference_id so they are associated to an ordered numerical
    # list I will use later to match the indexes - easy to refer the NFT by index from the array that is created (cosine_sim)
    global indices
    indices = pd.Series(df.index)
    indices[:5]

    """Check if this concern can be addressed: Having cosine_sim in-memory can be a memory constraint for larger datasets"""

    # generating the cosine similarity matrix
    global cosine_sim
    cosine_sim = cosine_similarity(count_matrix, count_matrix)
    # cosine_sim.todense()

load_preprocess_data()

# function that takes in reference_id as input and returns the top 10 recommended nfts
def content_based_recommendations(reference_id, cosine_sim = cosine_sim):
    
    recommended_nfts = []
    cosine_sim_scores_of_recommendations = []

    # getting the index of the NFT that matches the reference_id
    idx = indices[indices == reference_id].index[0]

    # creating a Series with the similarity scores in descending order
    score_series = pd.Series(cosine_sim[idx]).sort_values(ascending = False)

    # getting the indexes of the 10 most similar nfts
    top_10_indexes = list(score_series.iloc[1:11].index)
    # getting the cosine similarities of the 10 most similar nfts
    cosine_sim_scores_of_recommendations = list(score_series.iloc[1:11])
    
    # populating the list with the reference_ids of the best 10 matching nfts
    for i in top_10_indexes:
        recommended_nfts.append(list(df.index)[i])
        
    return recommended_nfts, cosine_sim_scores_of_recommendations



def create_rec_response(recommended_nfts_arr, cosine_sim_scores_of_recommendations_arr):

  # return the original data of the nft using the original_df dataframe (convert to an array of dictionaries and return)
  results_df = original_df.loc[recommended_nfts_arr]

  # append column with cosine_sim_scores
  for index, nft in enumerate(recommended_nfts_arr):
    # print(index)
    results_df.at[nft, 'cosine_sim'] = cosine_sim_scores_of_recommendations_arr[index]
  
  results_df = results_df.astype(object).where(pd.notnull(results_df),None)
  
  return results_df.to_dict('records')


# TODO: add multi item referencing


"""## Testing

Recommendation based on content similarity of traits matches
"""

# resp = content_based_recommendations('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d-9948')
# print("content_based_recommendations", resp)



#  TODO: (Extra) have these as separate API endpoints - to get later, if required
# def get_cosine_sim(initial_reference, item_reference_id):
#     # getting the index of the initial NFT that was used for recommendations
#     initial_idx = indices[indices == initial_reference].index[0]
#     recommended_idx = indices[indices == item_reference_id].index[0]

#     return cosine_sim[initial_idx][recommended_idx]

# def get_total_rarity_score(item_reference_id):
#     return df.loc[item_reference_id]['total_rarity']

# # define this at the top, before getting recommendations

