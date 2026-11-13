# retryWebhook

> WebhooksLogWrapper retryWebhook(id)

`PUT /api/2.0/settings/webhook/{id}/retry`

Retry a webhook delivery

Sends one past webhook delivery again. The path `id` is a delivery record from `GET api/2.0/settings/webhooks/log`, not a subscription. Any signed-in user can call it, except a guest. A guest gets 403. The portal owner and DocSpace admins can retry any delivery. Other users can retry only deliveries of their own subscriptions and get 403 for others. If the portal restricts the developer tools, users who are not DocSpace admins get 403 too. The call queues work. It returns a new delivery record with its own `id`, the old `eventId`, and the caller in `retriedBy`. The old record keeps its outcome. Each call queues a new delivery and stops the deliveries queued earlier for the event. The receiver gets the same event ID in a body that the portal signs again. To learn the outcome, poll `GET api/2.0/settings/webhooks/log` with `eventId` set to the returned `id`. Repeat it until `nextAttemptOn` is empty. Then a set `delivery` means success, and an empty one means that the portal gave up. On the default schedule, the portal tries six more times over about 18 hours. The call is rate limited. More calls return 429. If `id` is 0, the call returns 400. If no delivery record has this `id`, the call returns 404. It returns 409 and queues nothing for an event being sent now, a disabled subscription, or an outdated record.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The identifier of the object the operation acts on, as the listing operation of that kind of object reports it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of another shape does not match the route at all and is answered as not found. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new delivery record queued for the event, with its own identifier and the retried record's event identifier | [**WebhooksLogWrapper**](../../models/webhooks-log-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The delivery record identifier is 0 | - | - |
| **403** | The delivery belongs to another member's subscription, or the caller may not use webhooks | - | - |
| **404** | No delivery record with this ID exists in the portal | - | - |
| **409** | Nothing was queued: a delivery of the same event is being sent at this moment, the subscription is disabled, or the record predates the current delivery format | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksLogWrapper**](../../models/webhooks-log-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
