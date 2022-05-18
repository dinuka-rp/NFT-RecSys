# save this as app.py
from flask import Flask, jsonify, request
from trends_content_nft_recsys import trends_based_recommendations

app = Flask(__name__)

# to run on specific port: python3 -m flask run -p 5004


# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

@app.route("/rec")
def get_trait_similarity_recommendations():
    if(request.method == 'GET'):
        generated_recommendations = trends_based_recommendations()

        data = {
            'trends_featured_rec': {
                'items': generated_recommendations,
            }
        }

    return jsonify(data)

# export FLASK_APP=app.py
# python3 -m flask run