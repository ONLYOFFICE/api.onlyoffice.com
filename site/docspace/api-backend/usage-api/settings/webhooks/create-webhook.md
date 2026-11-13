# createWebhook

> WebhooksConfigWrapper createWebhook(CreateWebhooksConfigRequestDto)

`POST /api/2.0/settings/webhook`

Create a webhook

Creates a webhook subscription of the portal. The portal then posts a signed JSON payload to `uri` when a subscribed event happens. Any signed-in user can call it, except a guest. A guest gets 403. If the portal restricts the developer tools, only DocSpace admins can call it. Other callers then get 403. The call changes data. A repeated call with the same `name` and `uri` returns 400. The response never contains the secret key. Before saving, the call sends a HEAD request to `uri` and does not follow redirects. If you leave out `ssl`, it is `true` for an `https` address and `false` for an `http` one. If `triggers` is 0, the subscription gets every event that the role of its creator allows. To find the triggers your role allows, use `GET api/2.0/settings/webhook/triggers`. A subscription delivers only while it is on, and only events that its creator can see. The call returns 400 if `name` or `uri` is empty, a value is too long, or `uri` is not allowed. It also returns 400 if `uri` answers the HEAD request with an error code. It also returns 400 if `secretKey` breaks the password rules or your role does not allow a trigger. For user or group events, `targetId` must name a user or group that you can see. If it does not, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateWebhooksConfigRequestDto** | body | [**CreateWebhooksConfigRequestDto**](../../models/create-webhooks-config-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created webhook subscription, without its secret key | [**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `name` or `uri` is missing or empty, `name` or `secretKey` is longer than 50 characters or `targetId` longer than 255, the target URL is unusable or answers the HEAD request with a non-success code, or the secret key, a trigger flag or the `targetId` of user or group events was rejected: no user or group the creator may see has that ID, or the portal already has a subscription with the same `name` and `uri` | - | - |
| **403** | The caller is a `Guest`, or a non-admin caller while the developer tools are restricted | - | - |
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
