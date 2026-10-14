# AiWebSearchConfig
Web-search provider configuration. Credentials and provider selection for the built-in web-search tool group.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **provider** | **String** | Provider identifier (e.g. `exa`). | [required] [example: `exa`] |
| **key** | **String** | API key for the provider. Optional for self-hosted or keyless setups. | [optional] [example: `your-web-search-api-key`] |
| **baseUrl** | **String** | Optional override for the provider's base URL. | [optional] [example: `https://api.exa.ai`] |
| **isCloudProvider** | **Boolean** | Whether this provider is cloud-hosted (vs. self-hosted). | [optional] [example: `true`] |
| **headers** | **Map** | Extra HTTP headers sent with each request to the ONLYOFFICE / cloud backend (e.g. `X-Tenant`). Merged after the derived `Authorization` header, so a custom header of the same name wins. | [optional] [example: `{}`] |
