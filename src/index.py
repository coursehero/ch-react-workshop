from flask import Flask, request, Response
from flask import render_template
from flask_cors import CORS

import json
import os

app = Flask(__name__)
CORS(app)

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
docs_json = os.path.join(SITE_ROOT, "static/", "docs.json")

@ app.route('/')
def index():
    return render_template('index.html')


@ app.route('/search')
def search():
    titles = []
    term = request.args.get('term')
    with open(docs_json) as json_file:
        data = json.load(json_file)

        for key in data:
            if term.upper() in data[key]['name'].upper():
                titles.append({
                    'value': key,
                    'label': data[key]['name']
                })

    return Response(json.dumps(titles), mimetype='application/json')


@ app.route('/docInfo')
def docInfo():
    term = request.args.get('docName')
    with open(docs_json) as json_file:
        data = json.load(json_file)
    return data[term]


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
