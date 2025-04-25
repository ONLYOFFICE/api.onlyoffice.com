# OAuth Node.js Example (DocSpace Integration)

This guide shows how to build a complete **OAuth 2.0 flow** using Node.js and DocSpace.  
By the end, you'll have a local web app that lets users log in with their DocSpace account and fetches their profile data.

---

## Before You Start

Make sure you have:

- A **DocSpace account** to register your OAuth app
- **Ngrok** installed (required for HTTPS tunneling, if your running on localhost)

Install Ngrok (if needed):

```bash
npm install -g ngrok
```

Start your tunnel:

```bash
ngrok http 3000
```

Copy the HTTPS URL it shows (e.g. `https://abc123.ngrok-free.app`) and **don’t stop Ngrok** while testing.

---

## Step 1: Create the Frontend

Create a `static/` folder with two files:

### static/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>DocSpace User Profile</title>
</head>
<body>
  <button id="docspace-button">Sign in with DocSpace</button>
  <script src="index.js"></script>
</body>
</html>
```

### static/index.js

```js
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("docspace-button").addEventListener("click", () => {
    console.log("Opening OAuth page")
    window.open(window.location.origin + "/authenticate", "_self")
  })
})
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

Fill these in with values from your DocSpace app.

---

## Step 4: Set up Express Server

### index.js

```js
require("dotenv").config()
const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
const path = require("path")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("static"))
app.use(cookieParser())
app.use(cors({ origin: process.env.SERVER_URL }))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/static/index.html"))
})

// Step 1: Redirect to DocSpace OAuth page
app.get("/authenticate", (req, res) => {
  const url = `${process.env.API_BASE_URL}/oauth2/authorize?response_type=${process.env.RESPONSE_TYPE}&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=${process.env.CLIENT_SCOPES}`
  res.redirect(url)
})

// Step 2: Handle OAuth callback and token exchange
app.get("/callback", async (req, res) => {
  const code = req.query.code
  const body = new URLSearchParams()
  body.append("client_id", process.env.CLIENT_ID)
  body.append("client_secret", process.env.CLIENT_SECRET)
  body.append("code", code)
  body.append("redirect_uri", process.env.REDIRECT_URI)
  body.append("grant_type", "authorization_code")

  try {
    const tokenResponse = await axios.post(
      `${process.env.API_BASE_URL}/oauth2/token`,
      body
    )

    const { access_token, refresh_token } = tokenResponse.data

    const tokenParts = access_token.split(".")
    const payload = JSON.parse(Buffer.from(tokenParts[1], "base64").toString())
    const { aud } = payload

    const userResponse = await axios.get(
      `${aud}${process.env.API_BASE_PATH}/people/@self`,
      { headers: { Authorization: `Bearer ${access_token}` } }
    )

    res.send(userResponse.data.response)
  } catch (error) {
    console.error("OAuth Error:", error.response?.data || error.message)
    res.status(400).send("OAuth failed")
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
```

---

## Step 5: Run Everything

1. Start Ngrok in one terminal:
   ```bash
   ngrok http 3000
   ```

2. Start your server:
   ```bash
   node index.js
   ```

3. Visit `http://localhost:3000` (or your Ngrok URL)

4. Click **"Sign in with DocSpace"**

---

## What Happens Behind the Scenes

```
User → /authenticate → DocSpace OAuth
     → /callback (code) → token exchange
     → API call → /people/@self → profile shown
```
