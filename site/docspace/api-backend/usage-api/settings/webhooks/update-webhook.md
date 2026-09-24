# updateWebhook

> WebhooksConfigWrapper updateWebhook(UpdateWebhooksConfigRequestsDto)

`PUT /api/2.0/settings/webhook`

Update a webhook

Replaces the stored parameters of one webhook subscription, which is addressed by `id` in the body rather than in the path. Every field of the request overwrites the stored one, so a payload that leaves out `enabled`, `ssl`, `triggers` or `targetId` resets them to off, all events and no target: read the current values with `GET api/2.0/settings/webhook` first and send back whatever should stay. `secretKey` is the one exception, an empty value keeping the existing secret and a new one having to satisfy the portal password rules. The new target is validated exactly as on creation, that is it must sit outside the installation's own network and answer a HEAD request, and trigger flags the caller's role may not use are rejected. That validation runs before the subscription is looked up, so an unusable payload is refused with 400 even when no subscription with this `id` exists. A `DocSpaceAdmin` may update any subscription in the portal, anyone else only their own, and a `Guest` is refused. Sending the same payload twice leaves the same state. Use `PUT api/2.0/settings/webhook/enable` to switch a subscription on or off without touching anything else.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateWebhooksConfigRequestsDto** | body | [**UpdateWebhooksConfigRequestsDto**](../../models/update-webhooks-config-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The updated webhook subscription, without its secret key | [**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The target URL is unusable or unreachable, or the secret key or a trigger flag was rejected | - | - |
| **403** | The subscription belongs to another member, or the caller may not use webhooks at all | - | - |
| **404** | No webhook subscription with this ID exists in the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
