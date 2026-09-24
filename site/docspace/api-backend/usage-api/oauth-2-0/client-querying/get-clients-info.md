# getClientsInfo

> PageableClientInfoResponse getClientsInfo(limit, last\_client\_id, last\_created\_on)

`GET /api/2.0/oauth2/clients/info`

List client info

Retrieves a paginated list of information for all clients, each in the same consent-facing form as the single-client info read. An administrator sees every client of the tenant, a plain user only the clients they created. Paging is keyset-based: limit sets the page size, and last_client_id and last_created_on are carried over from the previous page. Unlike the full client listing, limit has no default here - it has to be supplied on every call and has to lie between 1 and 50, and a missing or out-of-range value is rejected with 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **limit** | query | **Integer** (int32) | How many entries to return, between 1 and 50. It has no default and has to be sent on every call. | [required] [example: `30`] [min: 1] [max: 50] |
| **last\_client\_id** | query | **String** | ID of the last retrieved client | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **last\_created\_on** | query | **Date** (date-time) | Date of the last retrieved client | [optional] [example: `2024-04-04T12:00:00Z`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved clients info | [**PageableClientInfoResponse**](../../models/pageable-client-info-response.md) | - |
| **400** | The limit parameter is missing, is outside the range 1-50, or last_created_on cannot be parsed as a date-time | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **403** | Insufficient permissions to list client information | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../../models/problem-detail.md) | - |

## Return type

[**PageableClientInfoResponse**](../../models/pageable-client-info-response.md)

## Authorization

[x-signature](../oauth-2-0.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
