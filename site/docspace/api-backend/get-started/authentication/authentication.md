---
sidebar_position: -2
---

# Authentication

To interact with the API, most requests require authentication. The authentication method you choose depends on your application's purpose, its users, and the features it requires. You can authenticate with the ONLYOFFICE DocSpace API in several ways.

## Personal access tokens

Personal access token (PAT) is bounded to a single user account and allows scripts, tools, and integrations to authenticate as a specific user. This method is simple to set up and works well for personal automation or server-side applications running on behalf of a single user.

[Learn more about personal access tokens](personal-access-tokens.md)

## OAuth 2.0

OAuth 2.0 is recommended when your application needs to access data on behalf of multiple users or when you want users to explicitly authorize your application without sharing their credentials. OAuth is more complex to implement than using personal access tokens, but it offers more features and security.

[Learn more about OAuth 2.0](oauth2/oauth2.md)

## API keys

API keys are a simple way to authenticate requests, typically used for server-to-server communication or internal services where user context isn't required. They provide a static authentication mechanism without the need for user interaction.

[Learn more about API keys](api-keys.md)
