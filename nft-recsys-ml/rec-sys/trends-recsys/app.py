# save this as app.py
from flask import Flask, jsonify, request
from trends_content_nft_recsys import trends_based_recommendations, create_rec_response

app = Flask(__name__)

# to run on specific port: python3 -m flask run -p 5004


# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

@app.route("/rec")
def get_trait_similarity_recommendations():
    if(request.method == 'GET'):
        top_trending_nfts_df = trends_based_recommendations()
        rec_resp = create_rec_response(top_trending_nfts_df)

        data = {
            'trends_featured_rec': rec_resp
        }

    return jsonify(data)

# export FLASK_APP=app.py
# python3 -m flask run