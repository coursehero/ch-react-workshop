from flask import Flask, request, Response
from flask import render_template
import json
import os

app = Flask(__name__)

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
