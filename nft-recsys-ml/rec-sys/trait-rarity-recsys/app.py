# save this as app.py
from flask import Flask

app = Flask(__name__)

# status check ping-pong endpoint
@app.route("/ping")
def hello():
    return "pong"

# export FLASK_APP=app.py
# python3 -m flask run