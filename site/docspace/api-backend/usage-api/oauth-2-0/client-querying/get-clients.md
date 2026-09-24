# getClients

> PageableClientResponse getClients(limit, last\_client\_id, last\_created\_on)

`GET /api/2.0/oauth2/clients`

List clients

Returns one page of the tenant's clients, newest first, each in the same full form as the single-client read. An administrator sees every client of the tenant, a plain user only the clients they created. Paging is keyset-based rather than offset-based: limit sets the page size, and last_client_id and last_created_on are carried over from the previous page to ask for the next one. The limit defaults to 30 and has to lie between 1 and 50; a value outside that range, or a last_created_on that cannot be parsed as a date, is rejected with 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **limit** | query | **Integer** (int32) | How many entries to return, between 1 and 50. Defaults to 30 when omitted. | [optional] [example: `30`] [default to `30`] [min: 1] [max: 50] |
| **last\_client\_id** | query | **String** | ID of the last retrieved client | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **last\_created\_on** | query | **Date** (date-time) | Date of the last retrieved client | [optional] [example: `2024-04-04T12:00:00Z`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client list successfully retrieved | [**PageableClientResponse**](../../models/pageable-client-response.md) | - |
| **400** | Invalid pagination parameters, including a last_created_on that cannot be parsed as a date-time | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **403** | Insufficient permissions to list clients | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../../models/problem-detail.md) | - |

## Return type

[**PageableClientResponse**](../../models/pageable-client-response.md)

## Authorization

[x-signature](../oauth-2-0.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
