# getWebhooksLogs

Referenced types are defined in the [full reference](../api.md).

> WebhooksLogArrayWrapper getWebhooksLogs(deliveryFrom, deliveryTo, hookUri, configId, eventId, groupStatus, userId, trigger, count, startIndex)

`GET /api/2.0/settings/webhooks/log`

Get the webhook delivery log

Returns the delivery records of the portal webhooks, one record per attempt, carrying the trigger, the request and response headers and bodies, the HTTP `status` the target answered and the `delivery` moment, the last two staying empty while an attempt is still on its way. Records come newest first and are paged with `startIndex` and `count`, at most 100 at a time, while the number of records matching the filter is reported as `total` beside the response. Filters combine with AND: `deliveryFrom` and `deliveryTo` bound the delivery moment, `hookUri` matches the subscription URL exactly, `configId` picks one subscription, `eventId` one single record, `groupStatus` keeps only the answered status classes it names with 0 meaning no status filter, and `trigger` narrows to one event with 0 meaning all of them. `userId` filters by who created the subscription rather than by who caused the event, and for a caller who is not a `DocSpaceAdmin` it is forced to the caller, so a non-admin only ever sees deliveries of their own subscriptions. A `Guest` is refused. Nothing is written.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **deliveryFrom** | query | **Date** (date-time) | The earliest delivery moment a record may carry. Records of attempts still on their way have no delivery moment yet and fall outside any bound set here. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **deliveryTo** | query | **Date** (date-time) | The latest delivery moment a record may carry. All the filters combine with AND, so it narrows whatever the other ones already kept. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **hookUri** | query | **String** | The subscription target address, matched in full rather than as a prefix. Filtering by `configId` is the reliable way to pick one subscription, since several may share an address. | [optional] [example: `https://example.com/webhook`] |
| **configId** | query | **Integer** (int32) | The subscription whose deliveries are kept, by the `id` that `GET api/2.0/settings/webhook` reports. | [optional] [example: `1`] |
| **eventId** | query | **Integer** (int32) | A single delivery record, by its own identifier. It narrows the answer to that one record, which is how a client follows up a retry it queued earlier. | [optional] [example: `1`] |
| **groupStatus** | query | **WebhookGroupStatus** | The classes of answered status to keep, as a bitmask; 0 keeps every record whatever the target answered. | [optional] [example: `NotSent`] [enum: `0`, `1`, `2`, `4`, `8`, `16`] |
| **userId** | query | **UUID** (uuid) | The member whose subscriptions the records belong to, by portal user ID - who created the subscription, not who caused the event. For a caller who is not a DocSpace administrator it is overwritten with the caller own ID, so such a caller never sees another member deliveries whatever is sent here. | [optional] [example: `{}`] |
| **trigger** | query | **WebhookTrigger** | The single event kind to keep; 0 keeps every kind. It names one trigger rather than a mask of several, unlike the `triggers` a subscription is created with. | [optional] [example: `0`] [enum: `0`, `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384`, `32768`, `65536`, `131072`, `262144`, `524288`, `1048576`, `2097152`, `4194304`, `8388608`, `16777216`, `33554432`, `67108864`, `134217728`, `268435456`, `536870912`, `1073741824`] |
| **count** | query | **Integer** (int32) | How many records one page may hold. The maximum is also the default, so a client that wants shorter pages has to ask for them; the number of records matching the filter comes back as `total` beside the page. | [optional] [example: `1`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many matching records to skip before the page begins, counting from the newest. Advance it by `count` to walk back through the log. | [optional] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching delivery records, newest first, with the total count reported beside them | [**WebhooksLogArrayWrapper**](../api.md#model-webhookslogarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a `Guest`, or a non-admin caller while the developer tools are restricted | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksLogArrayWrapper**](../api.md#model-webhookslogarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
