# getWebhookTriggers

> WebhookTriggerArrayWrapper getWebhookTriggers()

`GET /api/2.0/settings/webhook/triggers`

Get the webhook triggers

Returns the catalogue of events a webhook subscription can listen to, in the order the portal presents them: user events, then group, file, folder, room, form and agent ones. Each entry carries the event name as it appears in a payload, such as `file.created`, the bit value to put into the `triggers` bitmask of a subscription, and `available`, telling whether the caller's own role may subscribe to that event at all: a `User` cannot subscribe to the creation of users, groups or rooms, for instance, while a `RoomAdmin` can. Add the bit values of the wanted events together to build `triggers`; the entry named `*` has the value 0 and stands for every event, so it is used on its own rather than added. Events unavailable to the caller are listed all the same, but passing one to `POST api/2.0/settings/webhook` or `PUT api/2.0/settings/webhook` is rejected as an invalid request. This is fixed reference data: the same for every portal, not paginated, changing only with the product version, and readable by any authenticated caller, a `Guest` included. Nothing is written.

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
