from flask import Flask, session, redirect, url_for, request, render_template, flash, abort
from functools import wraps
import json
from napis import *
import os
import random
import string

app = Flask(__name__, template_folder='pages', static_folder='assets')

app.secret_key = 'supersecretkey'
SHORT_URLS_FILE = 'short_urls.json'
USERS_FILE = 'users.json'

def load_data(filename, default={}):
    if not os.path.exists(filename):
        return default
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_data(filename, data):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'username' not in session:
            flash('Please login first', 'error')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

url_map = load_data(SHORT_URLS_FILE)

def generate_short_code(length=6):
    characters = string.ascii_letters + string.digits
    while True:
        code = ''.join(random.choice(characters) for _ in range(length))
        if code not in url_map:
            return code

@app.route('/shorten', methods=['GET'])
def shorten_url():
    long_url = "https://www.perplexity.ai/"#request.form.get('url')
    short_links = list()
    gen_cnt = 20
    while gen_cnt > 0:
        short_code = generate_short_code()
        short_links.append(short_code)
        gen_cnt -= 1
    return short_links

@app.route('/<short_code>')
def redirect_url(short_code):
    long_url = url_map.get(short_code)
    if long_url:
        return redirect(long_url, code=302)
    return abort(404)

@app.route('/')
def home():
    return redirect(url_for('dashboard'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        users = load_data(USERS_FILE)
        
        if username in users and users[username]['password'] == password:
            session['username'] = username
            session['role'] = users[username].get('role', 'user')
            flash('Login success!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Username or Password is incorrect', 'error')
    return render_template('sign-in.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        gmail = request.form['gmail']
        password = request.form['password']
        users = load_data(USERS_FILE)
        
        if username in users:
            flash('Username already exists!', 'error')
        else:
            users[username] = {
                'password': password,
                'gmail': gmail,
                'role': 'user',
                'click': "https://www.profitableratecpm.com/jsa85nvm?key=43c65dd42665b004d4e53c4bb9a5a00d",
                'conversion': "https://cjhaehd.igamesfinder.com/s/2f470dcd6e32e"
            }
            save_data(USERS_FILE, users)
            flash('Registration successful!', 'success')
            return redirect(url_for('login'))
    return render_template('sign-up.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login')) 

@app.route('/dashboard')
@login_required  
def dashboard():
    user_data = {"name": session.get('username'), "role": session.get('role', 'user')}
    smartlinkCampaign = get_summary_trafee("smartlinkCampaign")
    offerCampaign = get_summary_trafee("offerCampaign")
    return render_template('dashboard.html', 
                         user=user_data, 
                         summary_offer=offerCampaign.get('events', []),
                         summary_click=smartlinkCampaign.get('events', []))

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html')

@app.route('/clicks')
@login_required
def click():
    return render_template('clicks.html')

@app.route('/conversions')
@login_required
def conversion():
    conversions, total_count, num_items_per_page, filter_id = get_conversions_trafee()
    return render_template('conversion.html', data=conversions, total_count=total_count, num_items_per_page=num_items_per_page)

@app.route('/payments')
@login_required
def payment():
    return render_template('payment.html')

if __name__ == '__main__':
    app.run(debug=True)