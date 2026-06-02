---
sidebar_position: -6
---

# Authentication

Interacting with the DocSpace API requires authentication, and ONLYOFFICE DocSpace offers different ways to authenticate your requests to DocSpace. The chosen authentication method depends on your application's purpose, its users, and the features it requires. This page explains the various authentication methods.

## OAuth 2.0

*Recommended for apps accessing data on behalf of multiple users*

Register an OAuth app in DocSpace Developer Tools, redirect users to the authorization URL, and use the returned access token to call the API. Users authorize access to their DocSpace data without sharing credentials with your app.

```sh
curl https://yourportal.onlyoffice.com/api/2.0/people/@self \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

[Learn more about OAuth 2.0](oauth2/oauth2.md)

## OpenID Connect

*User identity verification built on OAuth 2.0*

Use OpenID Connect when your app needs to authenticate users with their DocSpace accounts. The flow follows OAuth 2.0, but also returns a JWT token with the user's identity — no extra profile request needed.

```ts
res.redirect(
  `${API_BASE_URL}/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=openid`
);
```

[Learn more about OpenID Connect](openid-connect.md)

## API keys

*Server-to-server communication without user context*

Generate an API key in DocSpace Developer Tools and pass it as a Bearer token. API keys are tied to the application, not to a specific user — suitable for backend integrations and automated services.

```sh
curl https://yourportal.onlyoffice.com/api/2.0/people/@self \
  -H "Authorization: Bearer YOUR_API_KEY"
```

[Learn more about API keys](api-keys.md)

## Personal access tokens

*Automation and scripting for a single user account*

Send credentials to `/api/2.0/authentication` to get a personal access token, then pass it in the `Authorization` header with every API request. The token is bound to the user account that generated it.

```sh
# Step 1: Get token
curl -X POST https://yourportal.onlyoffice.com/api/2.0/authentication \
  -H "Content-Type: application/json" \
  -d '{"userName":"yourusername","password":"yourpassword"}'

# Step 2: Use token
curl https://yourportal.onlyoffice.com/api/2.0/people/@self \
  -H "Authorization: YOUR_TOKEN"
```

[Learn more about personal access tokens](personal-access-tokens.md)

## Basic authentication

*For testing only, not recommended for production*

Encode your DocSpace username and password in Base64 and pass them in the `Authorization` header. Simple to set up, but credentials are transmitted with every request — use only for local testing or quick integrations.

```sh
curl -u yourusername:yourpassword \
  https://yourportal.onlyoffice.com/api/2.0/people/@self
```

[Learn more about basic authentication](basic-authentication.md)
