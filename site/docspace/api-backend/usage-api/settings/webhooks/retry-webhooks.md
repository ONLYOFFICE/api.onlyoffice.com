# retryWebhooks

> WebhooksLogArrayWrapper retryWebhooks(WebhookRetryRequestsDto)

`PUT /api/2.0/settings/webhook/retry`

Retry webhook deliveries

Sends a batch of past webhook deliveries again. `ids` holds the identifiers of delivery records from `GET api/2.0/settings/webhooks/log`; each of them is sent once more to the subscription it belongs to as a fresh delivery record, queued for asynchronous delivery, and the response lists those new records with `status` and `delivery` not filled in yet. Records that do not exist, and records of another member's subscription when the caller is not a `DocSpaceAdmin`, are skipped in silence instead of failing the call, so a response shorter than `ids` is the only sign that something was left out: compare the counts rather than assuming everything was queued. An empty `ids` list is accepted and queues nothing. Read the outcomes from `GET api/2.0/settings/webhooks/log`, matching the returned identifiers with `eventId`. Every call queues another round of attempts, and the original records stay as they are. A `Guest` is refused. The operation is rate limited, so a burst of calls is answered with 429. For a single record `PUT api/2.0/settings/webhook/{id}/retry` reports a missing or forbidden record instead of skipping it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WebhookRetryRequestsDto** | body | [**WebhookRetryRequestsDto**](../../models/webhook-retry-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The newly queued delivery records, one for every identifier that could be retried | [**WebhooksLogArrayWrapper**](../../models/webhooks-log-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a `Guest`, or a non-admin caller while the developer tools are restricted | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksLogArrayWrapper**](../../models/webhooks-log-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
