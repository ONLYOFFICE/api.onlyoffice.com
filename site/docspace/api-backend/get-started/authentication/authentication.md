---
sidebar_position: -5
---

# Authentication

Interacting with the DocSpace API requires authentication, and ONLYOFFICE DocSpace offers different ways to authenticate your requests to DocSpace. The chosen authentication method depends on your application's purpose, its users, and the features it requires. This page explains the various authentication methods.

## API keys

[API keys](api-keys.md) are a simple way to authenticate requests, typically used for server-to-server communication or internal services where user context isn't required. They provide a static authentication mechanism without the need for user interaction.

## OAuth 2.0

[OAuth 2.0](oauth2/oauth2.md) is recommended when your application needs to access data on behalf of multiple users or when you want users to explicitly authorize your application without sharing their credentials. OAuth is more complex to implement than using API keys, but it offers more features and security.

## OpenID Connect

[OpenID Connect (OIDC)](openid-connect.md) is an authentication protocol based on OAuth 2.0, which simplifies the way to verify the identity of users and obtain basic profile information in a secure and standardized way. It is commonly used in scenarios where applications need to authenticate users and establish their identity.

## Basic authentication

[Basic authentication](basic-authentication.md) involves sending a username and password with each API request, encoded in Base64. While easy to implement, it is generally recommended only for testing, quick integrations, or internal applications, as it requires securely storing user credentials and lacks advanced security features.

## Personal access tokens

In this method, a [Personal access token (PAT)](personal-access-tokens.md) binds to a single user account and allows scripts, tools, and integrations to authenticate as a specific user. This method is simple to set up and works well for personal automation or server-side applications running on behalf of a single user.