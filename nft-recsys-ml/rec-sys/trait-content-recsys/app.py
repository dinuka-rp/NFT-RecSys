# save this as app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

# export FLASK_APP=app.py
# python3 -m flask run
# export FLASK_RUN_PORT=5002
# to run on specific port: python3 -m flask run -p 3000

# TODO: remove random data & endpoint - used to test jsonify
# info endpoint
@app.route("/info")
def info_endpoint():
    if(request.method == 'GET'):
        data = {
            "Modules" : 15,
            "Subject" : "Data Structures and Algorithms",
        }

    return jsonify(data)

# change port - this is not working for some reason
if __name__ == "__main__":
    app.run(host="localhost", port=5003)
# ref: https://www.codegrepper.com/code-examples/python/change+port+flask
