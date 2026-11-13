# retryWebhooks

> WebhooksLogArrayWrapper retryWebhooks(WebhookRetryRequestDto)

`PUT /api/2.0/settings/webhook/retry`

Retry webhook deliveries

Sends several past webhook deliveries again. The body lists delivery records from `GET api/2.0/settings/webhooks/log` in `ids`. Any signed-in user can call it, except a guest. A guest gets 403. If the portal restricts the developer tools, only DocSpace admins can call it. Other callers then get 403. The call queues work. For each record, it queues a new delivery of the same event and returns the new record. Each new record has its own `id`, the old `eventId`, and the caller in `retriedBy`. Each call also stops the deliveries queued earlier for these events. The call retries each event once and skips other records of the same event. It also skips unknown records and records that it cannot queue now. Users who are not DocSpace admins can retry only records of their own subscriptions. The call skips other records for them. So compare the response with `ids`. An empty `ids` queues nothing. Each receiver gets the same event ID in a body that the portal signs again. To learn the outcome, poll `GET api/2.0/settings/webhooks/log` with `eventId` set to each returned `id`. Repeat it until `nextAttemptOn` is empty. Then a set `delivery` means success, and an empty one means that the portal gave up. The call is rate limited. More calls return 429. If `ids` has more than 100 records, the call returns 400. To learn why the call skipped a record, use `PUT api/2.0/settings/webhook/{id}/retry`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WebhookRetryRequestDto** | body | [**WebhookRetryRequestDto**](../../models/webhook-retry-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new delivery records, one for every event that could be retried, each with its own identifier | [**WebhooksLogArrayWrapper**](../../models/webhooks-log-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `ids` holds more than 100 identifiers | - | - |
| **403** | The caller is a `Guest`, or a non-admin caller while the developer tools are restricted | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksLogArrayWrapper**](../../models/webhooks-log-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
