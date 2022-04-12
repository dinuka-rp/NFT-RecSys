# save this as app.py
from flask import Flask, jsonify, request
from traits_content_nft_recommender_system import content_based_recommendations

app = Flask(__name__)

# export FLASK_APP=app.py
# python3 -m flask run
# export FLASK_RUN_PORT=5002
# to run on specific port: python3 -m flask run -p 3000

# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

@app.route("/rec")
def get_trait_content_recommendations():
    reference_item_id = ''     # get from query param?

    if(request.method == 'GET'):
        generated_recommendations, cosine_similarities = content_based_recommendations(reference_item_id)

        # TODO: add collection name used for reference as well for clarity
        data = {
            'content_rec': {
                'items': generated_recommendations,
                'cosine_similarities': cosine_similarities
            }
        }

    return jsonify(data)


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

# change port - this is not working for some reason
if __name__ == "__main__":
    app.run(host="localhost", port=5003)
# ref: https://www.codegrepper.com/code-examples/python/change+port+flask
# https://flask.palletsprojects.com/en/2.1.x/tutorial/deploy/
# using waitress to serve: https://stackoverflow.com/a/54381386/11005638