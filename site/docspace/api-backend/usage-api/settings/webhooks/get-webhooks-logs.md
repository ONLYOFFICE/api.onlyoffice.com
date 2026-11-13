# getWebhooksLogs

> WebhooksLogArrayWrapper getWebhooksLogs(deliveryFrom, deliveryTo, hookUri, configId, eventId, groupStatus, userId, trigger, count, startIndex)

`GET /api/2.0/settings/webhooks/log`

Get the webhook delivery log

Returns the delivery log of the portal webhooks, newest first. Each record is one delivery of an event. Automatic retries update the same record. A manual retry adds a new record with the same `eventId`. Any signed-in user can call it, except a guest. A guest gets 403. If the portal restricts the developer tools, only DocSpace admins can call it. Other callers then get 403. Users who are not DocSpace admins see only the deliveries of their own subscriptions. For them, the call replaces `userId` with their own ID. The call is read-only. The call pages with `startIndex` and `count`, up to 100 records a page. The response gives the number of matching records in `total`. All filters combine with AND. A `groupStatus` or `trigger` of 0 means no filter. To get every record of one event, filter by its `eventId`. With the `id` of a manual retry record as `eventId`, the call returns only that record. If `count` is out of its range, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **deliveryFrom** | query | **Date** (date-time) | The earliest delivery moment a record may carry. Records of attempts still on their way have no delivery moment yet and fall outside any bound set here. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **deliveryTo** | query | **Date** (date-time) | The latest delivery moment a record may carry. All the filters combine with AND, so it narrows whatever the other ones already kept. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **hookUri** | query | **String** | The subscription target address, matched in full rather than as a prefix. Filtering by `configId` is the reliable way to pick one subscription, since several may share an address. | [optional] [example: `https://example.com/webhook`] |
| **configId** | query | **Integer** (int32) | The subscription whose deliveries are kept, by the `id` that `GET api/2.0/settings/webhook` reports. | [optional] [example: `1`] |
| **eventId** | query | **Integer** (int32) | One event, by the `eventId` of its delivery records, which is also the `event.id` the receiver got. | [optional] [example: `1`] |
| **groupStatus** | query | **WebhookGroupStatus** | The classes of answered status to keep, as a bitmask; 0 keeps every record whatever the target answered. | [optional] [example: `NotSent`] [enum: `0`, `1`, `2`, `4`, `8`, `16`] |
| **userId** | query | **UUID** (uuid) | The member whose subscriptions the records belong to, by portal user ID - who created the subscription, not who caused the event. For a caller who is not a DocSpace administrator it is overwritten with the caller own ID, so such a caller never sees another member deliveries whatever is sent here. | [optional] [example: `{}`] |
| **trigger** | query | **WebhookTrigger** | The single event kind to keep; 0 keeps every kind. It names one trigger rather than a mask of several, unlike the `triggers` a subscription is created with. | [optional] [example: `0`] [enum: `0`, `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384`, `32768`, `65536`, `131072`, `262144`, `524288`, `1048576`, `2097152`, `4194304`, `8388608`, `16777216`, `33554432`, `67108864`, `134217728`, `268435456`, `536870912`, `1073741824`] |
| **count** | query | **Integer** (int32) | How many records one page may hold. The maximum is also the default, so a client that wants shorter pages has to ask for them; the number of records matching the filter comes back as `total` beside the page. | [optional] [example: `1`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many matching records to skip before the page begins, counting from the newest. Advance it by `count` to walk back through the log. | [optional] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching delivery records, newest first, with the total count reported beside them | [**WebhooksLogArrayWrapper**](../../models/webhooks-log-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The `count` is outside its allowed range | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
