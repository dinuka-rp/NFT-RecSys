# save this as app.py
from flask import Flask, jsonify, request
from trait_similarity_nft_recsys import content_based_recommendations, create_rec_response

app = Flask(__name__)

# export FLASK_APP=app.py
# python3 -m flask run
# export FLASK_RUN_PORT=5002
# to run on specific port: python3 -m flask run -p 5002

# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

@app.route("/rec")
def get_trait_similarity_recommendations():
    request_args = request.args
    reference_item_id = request_args.get('reference_id')
    # reference_item_id = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d-9948'     # get from query param?

    if(request.method == 'GET'):
        recommended_nfts_arr, cosine_sim_scores_of_recommendations_arr = content_based_recommendations(reference_item_id)

        rec_resp = create_rec_response(recommended_nfts_arr, cosine_sim_scores_of_recommendations_arr)


        data = {
            'similarity_rec': rec_resp,
            # 'ref_item': 
        }

    return jsonify(data)

# TODO: create multi reference ids endpoint for recommendations

# TODO: remove random data & endpoint - used to test jsonify
# info endpoint
# @app.route("/info")
# def info_endpoint():
#     if(request.method == 'GET'):
#         data = {
#             "Modules" : 15,
#             "Subject" : "Data Structures and Algorithms",
#         }

#     return jsonify(data)

if __name__ == "__main__":
    # load & preprocess dataset
    # load_preprocess_data()

    # change port - this is not working for some reason
    app.run(host="localhost", port=5003)
# ref: https://www.codegrepper.com/code-examples/python/change+port+flask
# https://flask.palletsprojects.com/en/2.1.x/tutorial/deploy/
# using waitress to serve: https://stackoverflow.com/a/54381386/11005638