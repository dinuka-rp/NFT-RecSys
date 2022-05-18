# save this as app.py
from flask import Flask, jsonify, request
from basic_content_based_nft_recommender_system import description_content_based_recommendations, load_preprocess_data

app = Flask(__name__)

# export FLASK_APP=app.py
# python3 -m flask run
# export FLASK_RUN_PORT=5005
# to run on specific port: python3 -m flask run -p 5005

# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

@app.route("/rec")
def get_trait_similarity_recommendations():
    request_args = request.args
    reference_item_id = request_args.get('reference_id')
    # reference_item_id = '0x495f947276749ce646f68ac8c248420045cb7b5e-57422959511997337577873730268633988669226471548944456734432444570123223695361'     # get from query param?

    if(request.method == 'GET'):
        generated_recommendations, cosine_similarities = description_content_based_recommendations(reference_item_id)

        # TODO: add collection name used for reference as well for clarity
        data = {
            'content_rec': {
                'items': generated_recommendations,
                'cosine_similarities': cosine_similarities
            }
        }

    return jsonify(data)

# TODO: create multi reference ids endpoint for recommendations

if __name__ == "__main__":
    # load & preprocess dataset - this happens even without running this
    # load_preprocess_data()

    # change port - this is not working for some reason
    app.run(host="localhost", port=5003)


# export FLASK_APP=app.py
# python3 -m flask run