---
sidebar_position: -4
---

# OAuth 2.0

The [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) authorization protocol enables a third-party application to obtain limited access to an HTTP service. You can add OAuth applications to the DocSpace portal and use them to access the API for authorization and further actions such as accessing accounts, rooms, files, etc.

**DocSpace OAuth API** allows developers to register a new OAuth application on the portal. 

This documentation describes:

- How to [create a new OAuth application](creating-oauth-app.md)
- How to [edit the application](editing-oauth-app.md)
- How to preview the [authorization button](auth-button.md) and embed it into your website
- How to [generate a developer token](developer-token.md)
- How the [authorization flow](authorization-flow.md) looks like
- How to [view active authorizations](viewing-active-authorizations.md)

API methods for working with OAuth 2.0 clients are detailed [in this section](../../../../../docspace/api-backend/usage-api/o-auth-2-authorization-endpoint.api.mdx).

The Node.js and Python examples demonstrating OAuth 2.0 integration with ONLYOFFICE DocSpace can be found [here](https://github.com/ONLYOFFICE/docspace-samples/tree/develop/oauth2).

## What OAuth apps can do

An OAuth application can:

- authorize users through the DocSpace portal without storing or processing passwords;
- access user account information (such as name) to verify their identity without having access to the password;
- use an access token to retrieve user information (before the token expires);
- perform only those actions on the data that are allowed by the authorized user.
