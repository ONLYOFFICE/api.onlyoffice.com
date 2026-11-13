# getTenantWebhooks

> WebhooksConfigWithStatusArrayWrapper getTenantWebhooks()

`GET /api/2.0/settings/webhook`

Get the portal webhooks

Returns the webhook subscriptions of the portal, each with the outcome of its last delivery. Any signed-in user can call it, except a guest. A guest gets 403. If the portal restricts the developer tools, only DocSpace admins can call it. Other callers then get 403. To read this setting, use `GET api/2.0/settings/devtoolsaccess`. The portal owner and DocSpace admins see every subscription. Other users see only the subscriptions they created. The call is read-only. The response never contains the secret key. The list has no paging and no fixed order. An empty list means that the caller has no subscriptions. To create a subscription, use `POST api/2.0/settings/webhook`. To read single deliveries, use `GET api/2.0/settings/webhooks/log`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The webhook subscriptions visible to the caller, each with the status of its last delivery | [**WebhooksConfigWithStatusArrayWrapper**](../../models/webhooks-config-with-status-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a `Guest`, or a non-admin caller while the developer tools are restricted | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksConfigWithStatusArrayWrapper**](../../models/webhooks-config-with-status-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
