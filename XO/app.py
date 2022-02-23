from flask import Flask, request, render_template
#from flask_restful import Resource, Api, reqparse
from json import dumps
from flask import jsonify
import json
import requests

app = Flask(__name__)
@app.route('/')
@app.route('/xo')
@app.route('/xo/<name>')
def xo(name=''):
    return render_template('index.html', param=name)
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, threaded=True, debug=False)