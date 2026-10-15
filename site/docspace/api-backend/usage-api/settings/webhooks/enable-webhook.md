# enableWebhook

> WebhooksConfigWrapper enableWebhook(UpdateWebhooksConfigRequestDto)

`PUT /api/2.0/settings/webhook/enable`

Switch a webhook on or off

Switches one webhook subscription on or off, leaving the rest of its parameters as they are. Only `id` and `enabled` are read from the body: `name`, `uri`, `secretKey`, `ssl`, `triggers` and `targetId` are demanded by the schema but ignored here, so change any of them with `PUT api/2.0/settings/webhook` instead. Switching a subscription on re-checks what is already stored, probing the saved URL with a HEAD request and re-validating the saved secret against the current portal password rules, and the call is refused with 400 when either fails: a subscription whose target has gone away, or whose secret predates a tightening of the password rules, cannot be switched on until it is updated. Switching one off is not validated. While a subscription is off its events are dropped rather than queued, so nothing arrives from that period once it is switched on again. A `DocSpaceAdmin` may switch any subscription in the portal, anyone else only their own, and a `Guest` is refused. The response carries the subscription in its new state, and repeating the call changes nothing further.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateWebhooksConfigRequestDto** | body | [**UpdateWebhooksConfigRequestDto**](../../models/update-webhooks-config-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The webhook subscription in its new state, without its secret key | [**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `id`, `name` or `uri` is missing or empty, `name` or `secretKey` is longer than 50 characters or `targetId` longer than 255, although this call reads only `id` and `enabled`, or on switching on the saved target answers the HEAD request with a non-success code or the saved secret no longer passes the password rules | - | - |
| **403** | The subscription belongs to another member, or the caller may not use webhooks at all | - | - |
| **404** | No webhook subscription with this ID exists in the portal | - | - |
| **500** | On switching on, the saved target URL gives no answer to the HEAD request: the connection fails or times out, or the certificate is not valid while the subscription has `ssl` set | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
