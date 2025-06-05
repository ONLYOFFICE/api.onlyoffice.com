---
sidebar_position: -3
---

# OpenID Connect

[OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) is an authentication protocol based on OAuth 2.0, which simplifies the way to verify the identity of users and obtain basic profile information in a secure and standardized way. It is commonly used in scenarios where applications need to authenticate users and establish their identity.

DocSpace supports the OpenID Connect protocol for authenticating DocSpace users with your applications. This allows your users to sign in to your application using their DocSpace accounts.

OpenID Connect implementation in DocSpace includes:

1. [OAuth 2.0 authorization code flow](oauth2/authorization-flow.md);
2. access token and refresh token handling;
3. JWT token decoding;
4. user profile fetching via OpenID Connect UserInfo endpoint.

The Node.js and Python examples demonstrating how to implement OAuth 2.0 authentication with OpenID Connect using DocSpace can be found [here](https://github.com/ONLYOFFICE/docspace-samples/tree/develop/oauth2).

## Authentication flow

To initiate authentication, redirect users to the authorization URL which is constructed in the following way:

``` ts
app.route("/authenticate").get((req, res) => {
  res.redirect(
    `${process.env.API_BASE_URL}/oauth2/authorize?response_type=${process.env.RESPONSE_TYPE}&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=${process.env.CLIENT_SCOPES}`
  );
});
```

For more information on authorization URL parameters, see the [Auth button](oauth2/auth-button.md) guide.

To obtain a signed JSON Web Token containing the user's ID along with some metadata, request the `openid` [scope](oauth2/creating-oauth-app.md#access-scopes) during the authentication flow.

The application decodes the JWT token to extract user information.

## UserInfo Endpoint

To access additional user information, use the standardized [UserInfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). This endpoint returns a JSON object with the user's identity information.

This is done by making a GET request to the UserInfo endpoint with the access token:

``` ts
const userResponse = await axios.get(
  `${aud}${process.env.API_BASE_PATH}/oauth2/userinfo`,
  { headers: { Authorization: `Bearer ${access_token}` } }
);
```

The response contains the following fields.

### Parameters

| Name  | Type             | Example                                | Description                                                   |
| ----- | ---------------- | -------------------------------------- | ------------------------------------------------------------- |
| sub   | string           | "66faa6e4-f133-11ea-b126-00ffeec8b4ef" | The unique user identifier.                                   |
| aud   | array of strings | ["\{\{docspace_address\}\}"]              | The intended recipients of the token (the API base URL).      |
| nbf   | integer          | 1745499926                             | A Unix timestamp before which the token must not be accepted. |
| scope | array of strings | ["openid"]                             | An array of scopes granted to the token.                      |
| iss   | string           | "\{\{docspace_address\}\}/oauth2"          | The URL of the authorization server that issued the token.    |
| exp   | integer          | 1745503526                             | A Unix timestamp indicating when the token expires.           |
| iat   | integer          | 1745499926                             | A Unix timestamp indicating when the token was issued.        |
| jti   | string           | "efc90ecc-bbda-4bbb-a9cb-6a9cecb4ae48" | The unique JSON Web Token identifier.                         |
| tid   | integer          | 1                                      | The tenant identifier.                                        |
| cid   | string           | "ce05cd8d-2844-47e8-a72e-cbb6141ebe97" | The unique client identifier.                                 |

### Example

```json
{
  "sub": "66faa6e4-f133-11ea-b126-00ffeec8b4ef",
  "aud": ["{{docspace_address}}"],
  "nbf": 1745499926,
  "scope": ["openid"],
  "iss": "{{docspace_address}}/oauth2",
  "exp": 1745503526,
  "iat": 1745499926,
  "jti": "efc90ecc-bbda-4bbb-a9cb-6a9cecb4ae48",
  "tid": 1,
  "cid": "ce05cd8d-2844-47e8-a72e-cbb6141ebe97"
}
```

For more details about DocSpace OAuth 2.0 authorization, refer to the [DocSpace API documentation](oauth2/oauth2.md).
