# this is an alternative implementation of the server in Python/Flask

python3 -m venv venv

export FLASK_DEBUG=1
export FLASK_APP=src/index.py
. venv/bin/activate
pip install -r requirements.txt
flask run -h localhost -p 5005

