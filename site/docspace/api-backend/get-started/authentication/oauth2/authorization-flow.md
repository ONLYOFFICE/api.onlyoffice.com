---
sidebar_position: -2
---

# Authorization flow

When a user clicks the authorization link, any of these four scenarios can occur:

## Scenario 1: User authorization

For users not yet authorized on the portal, the authorization link opens an authorization form where they enter their email and password and sign in. On successful authorization, they are redirected to the pages described in scenarios 2 and 3.

<img alt="Authorization flow" src="/assets/images/docspace/authorization-flow.png#gh-light-mode-only" width="300px" /><img alt="Authorization flow" src="/assets/images/docspace/authorization-flow.dark.png#gh-dark-mode-only" width="300px" />

## Scenario 2: Portal selection

If the user has more than one portal with the entered personal data, they will be redirected to the page for choosing the necessary one.

<img alt="Choose portal" src="/assets/images/docspace/choose-portal.png" width="400px" />

## Scenario 3: Consent page

Authorized users are redirected to a consent page that lists all the application abilities while displaying the URLs to the privacy policy and terms of service. This page also provides the possibility to change the user profile.

Click **Allow** or **Deny** to finish the authorization flow.

<img alt="Consent page" src="/assets/images/docspace/consent-page.png#gh-light-mode-only" width="400px" /><img alt="Consent page" src="/assets/images/docspace/consent-page.dark.png#gh-dark-mode-only" width="400px" />

## Scenario 4: Error page

If the authorization link contains non-existent [client_id](auth-button.md#client_id) and [redirect_uri](auth-button.md#redirect_uri), it redirects the user to the DocSpace error page.

<img alt="Error page" src="/assets/images/docspace/error-page.png#gh-light-mode-only" width="400px" /><img alt="Error page" src="/assets/images/docspace/error-page.dark.png#gh-dark-mode-only" width="400px" />

## How it works

1. When the user clicks the **Allow** button on the consent page, they will be redirected to [redirect_uri](auth-button.md#redirect_uri) where the code field will be added to the search.

   :::note
   If the user clicks the **Deny** button on the consent page, they will be redirected to [redirect_uri](auth-button.md#redirect_uri) with an error, without the possibility to get JWT.
   :::

   To send a consent request, you can also send a POST request to the [oauth2/authorize](../../../../../docspace/api-backend/usage-api/submit-consent.api.mdx) address.

2. The application exchanges the user code for the access token and refresh token, saves them to its storage, and uses these tokens to get access to the DocSpace API.

3. The application sends the [POST request](../../../../../docspace/api-backend/usage-api/exchange-token.api.mdx):

``` ini
{{docspace_address}}/oauth2/token
```

The parameters that must be specified in the request body depend on the client type.

### For client_secret_post

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter     | Type   | Example                                                                                                                            | Description                                                                                |
|---------------|--------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| client_id     | string | `695d37b7-18aa-4033-91b4-09690178e99a`                                                                                             | The ID of the client that will be used for authorization.                                  |
| client_secret | string | `49487362-7d4a-471f-bbf3-c04e2e1c541f`                                                                                             | The secret of the client that will be used for authorization.                              |
| grant_type    | string | `authorization_code`                                                                                                               | The OAuth grant type.                                                                      |
| code          | string | `OENBaHXhZStQ9eDVIq-1NlHu6luruKqJtCp6Rhg-OFXAeAp4YWoUHtOkGYCPtW7l8T-qtZaoUnmvtHuJbb3d-wgYtHOKhd-nqisoeiO91u-Z9fsnhtiO318mihPflIpV` | A temporary authorization code that is sent to the client to be exchanged for a token.     |
| redirect_uri  | string | `https://redirect-url.com`                                                                                                         | The URL where the user will be redirected after successful or unsuccessful authentication. |

```mdx-code-block
</APITable>
```

### For client with PKCE

For the client with PKCE, the parameters are the same as for **client_secret_post**, but the [client_secret](#client_secret) must be replaced with the `code_verifier`.

```mdx-code-block
<APITable>
```

| Parameter     | Type   | Example                                                                    | Description                                                                              |
|---------------|--------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| code_verifier | string | `a50883696b67d1e91-e52be26d8b78ae902b354-a4b3a8965affbe30f-c8056c89afa066` | The code verifier, a cryptographically random string between 43 and 128 characters long. |

```mdx-code-block
</APITable>
```
