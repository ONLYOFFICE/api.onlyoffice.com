---
sidebar_position: -3
---

# Postman

The ONLYOFFICE DocSpace SDK for Postman is a simple Postman Collection for integrating with the ONLYOFFICE DocSpace API.

A Postman Collection is a structured format for organizing API requests.

The collection includes comprehensive API endpoints for managing groups, people, files, folders, rooms, and more in DocSpace.

**[ONLYOFFICE Postman Collection on GitHub](https://github.com/ONLYOFFICE/docspace-api-postman-collections)**

## Installation

You can get the collection in one of the following ways:

- **Open in Postman** — open the collection directly in the Postman web app:
  [https://www.postman.com/onlyoffice/onlyoffice-docspace](https://www.postman.com/onlyoffice/onlyoffice-docspace)

- **Download the JSON file** — download `postman.json` from the [GitHub repository](https://github.com/ONLYOFFICE/docspace-api-postman-collections) and import it into Postman via **File → Import**.

## Configuring variables

The collection uses variables that you need to set before making requests.

Go to your collection → **Variables** tab and fill in the following:

| Variable | Description | Example |
|---|---|---|
| `baseUrl` | The URL of your DocSpace instance | `https://your-docspace.onlyoffice.com` |
| `asc_auth_key` | Your personal API key | `your-api-key-here` |
| `ApiKeyBearer` | The key is passed via the Authorization header | `your-api-key-here` |
| `x-signature` | JWT signature passed as a cookie. Obtain the token via `POST /api/2.0/security/oauth2/token` | `your-api-key-here` |

To generate an API key, go to DocSpace **Settings → Developer Tools → API Keys**.
For most use cases, `asc_auth_key` is the recommended method.
