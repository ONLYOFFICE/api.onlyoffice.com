# getWebhookTriggers

> WebhookTriggerArrayWrapper getWebhookTriggers()

`GET /api/2.0/settings/webhook/triggers`

Get the webhook triggers

Returns the events that a webhook subscription can listen to. Any signed-in user can call it, including a guest. The developer tools restriction does not apply here. The call is read-only. The list is the same for every portal and has no paging. It shows user, group, file, folder, room, form, and agent events, in this order. To build `triggers`, add the `id` values of the wanted events. The entry `*` has the value 0 and means every event that the role of the creator allows. Use it alone. The `available` field shows whether your role can subscribe to the event. The list also includes the events that your role cannot use. The portal refuses such an event when you create or change a subscription.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The triggers a webhook may subscribe to, each marked available for the caller's role or not | [**WebhookTriggerArrayWrapper**](../../models/webhook-trigger-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhookTriggerArrayWrapper**](../../models/webhook-trigger-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
