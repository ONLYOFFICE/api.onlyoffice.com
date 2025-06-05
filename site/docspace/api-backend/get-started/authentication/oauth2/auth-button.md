---
sidebar_position: -4
---

# Auth button

1. To preview an auth button in your application, click ![More icon](/assets/images/docspace/more-icon.png#gh-light-mode-only)![More icon](/assets/images/docspace/more-icon.dark.png#gh-dark-mode-only) to open the context menu and choose **Auth button**.

   ![Auth button](/assets/images/docspace/auth-button.png#gh-light-mode-only)![Auth button](/assets/images/docspace/auth-button.dark.png#gh-dark-mode-only)

2. In the opened window, copy HTML, CSS, and JavaScript code blocks and use them to embed a button into your website.

    <img alt="Preview" src="/assets/images/docspace/oauth-auth-button.png#gh-light-mode-only" width="400px" /><img alt="Preview" src="/assets/images/docspace/oauth-auth-button.dark.png#gh-dark-mode-only" width="400px" />

3. Copy the **Authorize link** and assign it to the authorization button. This link contains the following parameters:

## response_type

The type of the server response after authenticating the user and redirecting them to [redirect_uri](#redirect_uri). Currently, the *code* value is supported.

Example: code

## client_id

The ID of the client that will be used for authorization.

Example: 695d37b7-18aa-4033-91b4-09690178e99a

## redirect_uri

The URL where the user will be redirected after successful or unsuccessful authentication.

Example: `https://redirect-url.com`

## scope

All the possibilities of the current application to work with the DocSpace portal.

To get the required value, use the following code:

``` ts
const scopesString = client.scopes.join(" ")
const encodingScopes = encodeURI(scopesString || "")
```

Example: files:write%20accounts:write%20files:read%20openid%20rooms:read%20accounts.self:read%20accounts:read%20accounts.self:write%20rooms:write

## state

The random string to solve the CSRF vulnerability problem. This parameter with the *code* value will be added to [redirect_uri](#redirect_uri). This parameter is optional, but we recommend to specify it for security purposes.

Example: OENBaHXhZStQ9eDVIq1NlHu6luruKqJtCp6RhgOFXAeAp4YWoUHtOkGYCPtW7l8T-qtZaoUnmvtHZuJbb3d-wgYtHOKhd-nqisoeiO91u-Z9fsnhtiO318JmihPflIpV

## code_challenge_method

The method to encode the code verifier. Two parameters are supported: **plain** and **S256** (preferred). This parameter is used only when the authentication method is not specified (none) and the public client (PKCE) is allowed.

Example: S256

## code_challenge

The encoded code verifier. To get it, use the **crypto-js** npm package and the following code:

``` ts
// Total of 44 characters (1 Bytes = 2 char) (standard states that: 43 chars <= //verifier <= 128 chars)
const NUM_OF_BYTES = 36

const codeVerifier = crypto.lib.WordArray.random(NUM_OF_BYTES).toString()
const codeVerifierHash = sha256(randomVerifier).toString(crypto.enc.Base64)
```

This parameter is used only when the authentication method is not specified (none) and the public client (PKCE) is allowed.

Example: kNDpYrWzia4n6BoUewMVbnb5kQRIFgVdiaKwNGZ-_Wc

> Please note that the code verifier will be generated anew each time the preview dialog is reopened.

You can click the example button to go through the entire [authorization flow](authorization-flow.md).

To initiate the OAuth 2.0 authorization flow, you can also send GET request to the [oauth2/authorize](../../../../../docspace/api-backend/usage-api/o-auth-2-authorization-endpoint.api.mdx) address.

<img alt="Authorization flow" src="/assets/images/docspace/authorization-flow.png" width="400px" />
