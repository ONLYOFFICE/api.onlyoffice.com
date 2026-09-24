# getCustomerServiceUsage

> CustomerServiceUsageReportWrapper getCustomerServiceUsage(ServiceName, ParticipantName, Status, StartDate, EndDate, Metadata, offset, limit, OrderBy, OrderType)

`GET /api/2.0/portal/payment/customer/usage`

Get the customer service usage

Returns how much of each wallet service the portal consumed and what that cost, added up per service instead of listed per movement. Only a DocSpace administrator may read it, a portal with no billing customer answers with an empty result, and the call is read-only. The filters are optional: `serviceName` narrows to particular services and fails with 404 on a name this installation does not sell, `participantName` and `status` narrow to who consumed and how the operation ended, `startDate` and `endDate` bound the period in the portal time zone, `metadata` matches the key and value pairs a service records with its usage, and `offset`, `limit`, `orderBy` and `orderType` page and sort the result. Amounts come with the unit the service is sold in, except AI tools, whose consumption is reported in tokens rather than in AI credits. The individual charges behind these totals are `GET api/2.0/portal/payment/customer/operations`, and the same figures as a downloadable file are `POST api/2.0/portal/payment/customer/usage/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ServiceName** | query | **List** | The wallet services whose consumption is added up, named the way the billing catalogue names them - `backup`, `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not sell fails the call with 404, and an omitted list covers every service. | [optional] [example: `[backup]`] |
| **ParticipantName** | query | **String** | The participant whose consumption is added up - the account the accounting service records as the consumer. Consumption caused by a portal user carries that user ID here; surrounding whitespace is trimmed, and an omitted value covers every participant. | [optional] [example: `My Own Corporation`] |
| **Status** | query | **OperationStatus** | The outcome to keep. Consumption that is still being settled is reported as pending and may change later, while the other outcomes are final; every outcome is counted when this is omitted. | [optional] [example: `Completed`] [enum: `0`, `1`, `2`, `3`] |
| **StartDate** | query | **Date** (date-time) | The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to the portal creation date. | [optional] [example: `2025-01-01T00:00:00Z`] |
| **EndDate** | query | **Date** (date-time) | The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to the moment the call is made. | [optional] [example: `2025-12-31T23:59:59Z`] |
| **Metadata** | query | **Map** | The usage annotations a wallet service records alongside its consumption, as the key and value pairs that must all match for a record to be counted. The keys are chosen by the service that writes them, so read them off the `metadata` of the records already returned rather than guessing; an omitted map counts every record. | [optional] [example: `{"key1":"value1","key2":"value2"}`] |
| **offset** | query | **Integer** (int32) | The number of per-service totals to skip before the first one returned. Counted after the filters and the ordering are applied, and starts at 0 when omitted. | [optional] [example: `0`] |
| **limit** | query | **Integer** (int32) | The maximum number of per-service totals returned in one page. Defaults to 25 when omitted; the answer echoes the window back with its paging information, so the next `offset` can be computed without counting the items. | [optional] [example: `25`] |
| **OrderBy** | query | **String** | The name of the field the per-service totals are sorted by, spelled as the accounting service names it, such as `ServiceName` or `StartDate`. Surrounding whitespace is trimmed, and the accounting service applies its own ordering when this is omitted. | [optional] [example: `ServiceName`] |
| **OrderType** | query | **OperationOrderType** | The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting service does by default, so leaving this out sorts the same way as asking for descending explicitly. | [optional] [example: `Descending`] [enum: `0`, `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The usage and cost per wallet service with its paging information, or an empty result when the portal has no billing customer | [**CustomerServiceUsageReportWrapper**](../../models/customer-service-usage-report-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | One of the names in `serviceName` is not a wallet service of this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomerServiceUsageReportWrapper**](../../models/customer-service-usage-report-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
