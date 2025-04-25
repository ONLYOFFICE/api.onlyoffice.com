# OAuth Flask Example (DocSpace Integration)

This guide walks you through implementing a full **OAuth 2.0 flow** using Python Flask with DocSpace.  
You'll build a local web app that lets users sign in with DocSpace and retrieves their profile information.

---

## Before You Start

Make sure you have:

- A **DocSpace account** to register your OAuth app
- **Ngrok** installed (for HTTPS if you're running locally)

Install Ngrok (if needed):

```bash
npm install -g ngrok
```

Start a secure tunnel:

```bash
ngrok http 3000
```

Copy the HTTPS URL it shows (e.g. `https://abc123.ngrok-free.app`) and **don’t stop Ngrok** while testing.

---

## Step 1: Create the HTML Template

Create a `templates/` folder and inside it, add:

### templates/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>DocSpace User Profile</title>
</head>
<body>
  <button id="docspace-button">Sign in with DocSpace</button>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("docspace-button").addEventListener("click", () => {
        console.log("Opening OAuth page")
        window.open(window.location.origin + "/authenticate", "_self")
      })
    })
  </script>
</body>
</html>
```

---

## Step 2: Register Your OAuth App in DocSpace

Go to **Developer Tools → OAuth 2.0 → Register New Application** inside DocSpace.

### Fill out the App fields
- **App name / image** - anything
- **Website URL** - your Ngrok HTTPS URL (e.g. `https://abc123.ngrok-free.app`)
- **Redirect URI** - same as above + `/callback`
- **Allowed origins** - same as website URL
- **Permissions** - enable `Profile (read/write)`
- **Privacy/Security** - can match website URL

> **Don’t stop Ngrok while testing!**  
> The URL will break if you close it.

---

## Step 3: Set up your .env file

Create a `.env` in your project root:

```env
PORT=3000
API_BASE_URL=https://oauth.onlyoffice.com
API_BASE_PATH=/api/2.0
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
CLIENT_SCOPES=accounts.self:read%20accounts.self:write
SERVER_URL=https://abc123.ngrok-free.app
RESPONSE_TYPE=code
REDIRECT_URI=https://abc123.ngrok-free.app/callback
```

---

## Step 4: Implement the Flask App

### app.py

```python
import os
import requests
from flask import Flask, request, redirect, render_template, jsonify, make_response
from dotenv import load_dotenv
from urllib.parse import urlencode
from flask_cors import CORS
import base64
import json

load_dotenv()

app = Flask(__name__)
CORS(app, origins=[os.getenv("SERVER_URL")])

@app.route("/")
def serve_main_page():
    return render_template("index.html")

@app.route("/authenticate")
def authenticate():
    url = f"{os.getenv('API_BASE_URL')}/oauth2/authorize?response_type={os.getenv('RESPONSE_TYPE')}&client_id={os.getenv('CLIENT_ID')}&redirect_uri={os.getenv('SERVER_URL')}/callback&scope={os.getenv('CLIENT_SCOPES')}"
    return redirect(url)

@app.route("/callback")
def callback():
    code = request.args.get("code")
    data = {
        "client_id": os.getenv("CLIENT_ID"),
        "client_secret": os.getenv("CLIENT_SECRET"),
        "code": code,
        "redirect_uri": os.getenv("REDIRECT_URI"),
        "grant_type": "authorization_code",
    }

    token_url = f"{os.getenv('API_BASE_URL')}/oauth2/token"
    response = requests.post(token_url, data=data)
    tokens = response.json()

    access_token = tokens["access_token"]
    refresh_token = tokens["refresh_token"]

    payload_base64 = access_token.split(".")[1]
    padded = payload_base64 + "=" * (-len(payload_base64) % 4)
    payload = json.loads(base64.b64decode(padded).decode("utf-8"))
    aud = payload["aud"]

    profile_url = f"{aud}{os.getenv('API_BASE_PATH')}/people/@self"
    user_response = requests.get(profile_url, headers={"Authorization": f"Bearer {access_token}"})
    user = user_response.json()["response"]

    resp = make_response(jsonify(user))
    resp.set_cookie("token", access_token)
    resp.set_cookie("refresh_token", refresh_token)
    return resp

if __name__ == "__main__":
    port = int(os.getenv("PORT", 3000))
    app.run(debug=True, port=port)
```

---

## Step 5: Run the App

1. Start Ngrok in one terminal:

   ```bash
   ngrok http 3000
   ```

2. Run your Flask server:

   ```bash
   python app.py
   ```

3. Visit `http://localhost:3000` (or your Ngrok URL)

4. Click **"Sign in with DocSpace"**.

---

## What Happens Behind the Scenes

```
User → /authenticate → DocSpace OAuth
     → /callback (code) → token exchange
     → API call → /people/@self → user profile shown
```
