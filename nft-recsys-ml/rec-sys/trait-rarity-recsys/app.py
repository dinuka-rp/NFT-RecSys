# save this as app.py
from flask import Flask, jsonify, request
from trait_rarity_nft_recsys import trait_rarity_recommendations, create_rec_response

app = Flask(__name__)

# to run on specific port: python3 -m flask run -p 5003

# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

@app.route("/rec")
def get_trait_rarity_recommendations():
    request_args = request.args
    reference_item_id = request_args.get('reference_id')
    # reference_item_id = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d-9948'     # get from query param

    if(request.method == 'GET'):
        recommended_nfts_arr, total_rarity_scores_of_recommendations_arr = trait_rarity_recommendations(reference_item_id)
        
        rec_resp = create_rec_response(recommended_nfts_arr, total_rarity_scores_of_recommendations_arr)

        # TODO: return rarity of reference item as well

        data = {
            'rarity_rec': rec_resp,
            # 'ref_item': 
        }


    return jsonify(data)


# TODO: the logic needs fixing
# @app.route("/rec-multi")
# def get_trait_rarity_recommendations():
#     request_args = request.args
#     reference_item_ids_string = request_args.get('reference_item_id')
#     # reference_item_id = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d-9948'     # get from query param

#     reference_item_ids_arr = reference_item_ids_string.split(",")

#     if(request.method == 'GET'):
#         generated_recommendations, total_rarities = trait_rarity_recommendations_multi(reference_item_ids_arr)

#         # TODO: return rarity of reference item as well

#         # TODO: add collection name used for reference as well for clarity
#         data = {
#             'rarity_rec': {
#                 'items': generated_recommendations,
#                 'total_rarities': total_rarities
#             }
#         }

#     return jsonify(data)


if __name__ == "__main__":
    # load & preprocess dataset
    # load_preprocess_data()

    # change port - this is not working for some reason
    app.run(host="localhost", port=5003)

# export FLASK_APP=app.py
# python3 -m flask run