# getConsents

Referenced types are defined in the [full reference](../oauth.md).

> PageableModificationResponse getConsents(limit, last\_modified\_on)

`GET /api/2.0/oauth2/clients/consents`

List user consents

Retrieves a paginated list of user consents: the clients the calling user has authorized, each with the scopes granted, the moment the consent was last changed and the client's consent-facing details. It always reports the caller's own consents and nothing else - there is no role check on this endpoint, so guests may call it too, and no parameter widens it to another user. The consents are read from the authorization service over gRPC, so an authorization service that cannot be reached surfaces as 503. Paging is keyset-based on last_modified_on, and limit has no default: it has to be supplied on every call and has to lie between 1 and 50.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **limit** | query | **Integer** (int32) | How many entries to return, between 1 and 50. It has no default and has to be sent on every call. | [required] [example: `30`] [min: 1] [max: 50] |
| **last\_modified\_on** | query | **Date** (date-time) | Date of the last retrieved consent | [optional] [example: `2024-04-04T12:00:00Z`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved user consents | [**PageableModificationResponse**](../oauth.md#model-pageablemodificationresponse) | - |
| **400** | The limit parameter is missing, is outside the range 1-50, or last_modified_on cannot be parsed as a date-time | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **403** | The request carries no valid portal signature | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **503** | Authorization service unavailable | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |

## Return type

[**PageableModificationResponse**](../oauth.md#model-pageablemodificationresponse)

## Authorization

[x-signature](../oauth.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
