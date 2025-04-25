---
sidebar_position: -2
---

# Authentication

To interact with the API, most requests require authentication. The authentication method you choose depends on your application's purpose, its users, and the features it requires. You can authenticate with the ONLYOFFICE DocSpace API in several ways.

## API keys

API keys are a simple way to authenticate requests, typically used for server-to-server communication or internal services where user context isn't required. They provide a static authentication mechanism without the need for user interaction.

[Learn more about API keys](api-keys.md)

## OAuth 2.0

OAuth 2.0 is recommended when your application needs to access data on behalf of multiple users or when you want users to explicitly authorize your application without sharing their credentials. OAuth is more complex to implement than using personal access tokens, but it offers more features and security.

[Learn more about OAuth 2.0](oauth2/oauth2.md)

## OpenID Connect

OpenID Connect (OIDC) is an authentication protocol based on OAuth 2.0, which simplifies the way to verify the identity of users and obtain basic profile information in a secure and standardized way. It is commonly used in scenarios where applications need to authenticate users and establish their identity.

[Learn more about OpenID Connect](openid-connect.md)

## Basic authentication

Basic authentication involves sending a username and password with each API request, encoded in Base64. While it is easy to implement, it is generally recommended only for testing, quick integrations, or internal applications, as it requires securely storing user credentials and lacks advanced security features.

[Learn more about basic authentication](basic-authentication.md)

## Personal access tokens

Personal access token (PAT) is bounded to a single user account and allows scripts, tools, and integrations to authenticate as a specific user. This method is simple to set up and works well for personal automation or server-side applications running on behalf of a single user.

[Learn more about personal access tokens](personal-access-tokens.md)
