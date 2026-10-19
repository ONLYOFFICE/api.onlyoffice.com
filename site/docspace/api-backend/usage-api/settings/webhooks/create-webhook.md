# createWebhook

> WebhooksConfigWrapper createWebhook(CreateWebhooksConfigRequestDto)

`POST /api/2.0/settings/webhook`

Create a webhook

Creates a webhook subscription for the current portal: a target URL that the portal calls with a signed JSON payload whenever one of the subscribed events happens. The target is checked before anything is stored, so it has to be an absolute `http` or `https` address outside the installation's own network, and it has to answer a HEAD request with a success code, redirects not being followed. `secretKey` is mandatory here, has to satisfy the portal password rules published by `GET api/2.0/settings/security/password`, and signs the payloads; it does not appear in any response. `triggers` is a bitmask of the subscribed events with 0 standing for all of them; a flag the caller's role may not use is rejected, so take the allowed set from `GET api/2.0/settings/webhook/triggers`. `ssl=true` additionally demands an `https` target with a valid certificate, while `ssl=false` leaves the certificate unchecked. Set `targetId` to deliver events about a single entity only. A subscription fires only for events its creator is allowed to see, and only while it is enabled. Any role except `Guest` may create one, and each call adds another subscription rather than replacing an existing one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateWebhooksConfigRequestDto** | body | [**CreateWebhooksConfigRequestDto**](../../models/create-webhooks-config-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created webhook subscription, without its secret key | [**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `name` or `uri` is missing or empty, `name` or `secretKey` is longer than 50 characters or `targetId` longer than 255, the target URL is unusable or answers the HEAD request with a non-success code, or the secret key or a trigger flag was rejected | - | - |
| **403** | The caller is a `Guest`, or a non-admin caller while the developer tools are restricted | - | - |
| **500** | The target URL gives no answer to the HEAD request: the connection fails or times out, or the certificate is not valid while `ssl` is `true` | - | - |
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
