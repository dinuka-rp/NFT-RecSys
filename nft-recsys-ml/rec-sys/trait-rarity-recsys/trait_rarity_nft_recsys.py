# -*- coding: utf-8 -*-
"""# Trait Rarity-based NFT Recommender System.py"""

import pandas as pd


def load_preprocess_data():
    """## Get Dataset"""
    assets_file_path = "../../datasets/bayc-nft-assets"
    global original_df
    original_df = pd.read_csv(assets_file_path, sep='\t')

    """## Data Cleaning"""
# TODO: remove unwanted preprocessing steps - may not be needed for this model
    for index, row in original_df.iterrows():
        original_df.at[index,'reference_id'] = row["asset_contract_address"] + "-" + str(row["nft_id"])

    global df
    df = original_df.copy(deep=True)
    
    df['traits_string'] = df['traits_string'].str.replace(';;',' ')

    df.set_index('reference_id', inplace = True)   # set reference_id as the index of the dataframe
    original_df.set_index('reference_id', inplace = True)   # set reference_id as the index of the dataframe

    df = df[['traits_string','total_rarity']]

load_preprocess_data()



# function that takes in reference_id as input and returns the top 10 recommended nfts
def trait_rarity_recommendations(reference_id):
    # TODO: change this to return an array of dictionaries (item_id: , score: )

    recommended_nfts = []
    trait_rarity_scores_of_recommendations = []

    input = df.loc[reference_id]['total_rarity']
    # print(input)

    #  This considers the entire dataframe. Need to do this only within a collection - send the filtered dataframe as a parameter
    # the dataframe with 10 closest values.
    df_sort = df.iloc[(df['total_rarity']-input).abs().argsort()[1:11]]

    recommended_nfts = df_sort.index.tolist()
    trait_rarity_scores_of_recommendations = df_sort['total_rarity'].tolist()
    # print(df_sort['total_rarity'].tolist())

    return recommended_nfts, trait_rarity_scores_of_recommendations



def create_rec_response(recommended_nfts_arr, total_rarity_scores_of_recommendations_arr):

    # return the original data of the nft using the original_df dataframe (convert to an array of dictionaries and return)
    results_df = original_df.loc[recommended_nfts_arr]

    # append column with total_rarity_scores
    for index, nft in enumerate(recommended_nfts_arr):
        # print(index)
        results_df.at[nft, 'total_rarity'] = total_rarity_scores_of_recommendations_arr[index]

    results_df = results_df.astype(object).where(pd.notnull(results_df),None)

    return results_df.to_dict('records')


# get trait-rarity based recommendations from multiple items
# def trait_rarity_recommendations_multi(reference_ids):
    # TODO: this needs extra logic, needs to be tested in colab first
    # have an array of dictionaries and sort by score

    # multi_recommended_nfts = []
    # trait_rarity_scores_of_multi_recommendations = []

    # for reference_id in reference_ids:  
    #     recommended_nfts = []
    #     trait_rarity_scores_of_recommendations = []

    #     input = df.loc[reference_id]['total_rarity']
    #     # print(input)

    #     #  This considers the entire dataframe. Need to do this only within a collection - send the filtered dataframe as a parameter
    #     # the dataframe with 10 closest values.
    #     df_sort = df.iloc[(df['total_rarity']-input).abs().argsort()[1:11]]

    #     recommended_nfts = df_sort.index.tolist()
    #     trait_rarity_scores_of_recommendations = df_sort['total_rarity'].tolist()
    #     # print(df_sort['total_rarity'].tolist())

    # return multi_recommended_nfts, trait_rarity_scores_of_multi_recommendations

"""## Testing

Recommendation based on total rarity score similarity
"""

# resp = trait_rarity_recommendations('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d-9948')
# print("trait_rarity_recommendations", resp)
