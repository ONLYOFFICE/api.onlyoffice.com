# getByStatus

> EmployeeFullArrayWrapper getByStatus(status, filterBy, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue)

`GET /api/2.0/people/status/{status}`

Get profiles by status

Returns a page of the accounts with the status from the route, with full profiles. Requires a room admin, a DocSpace admin, or an admin of the People module. Other callers get 403. The call is read-only. The response has the total number of matches. If `count` is out of range, the call returns 400. The call filters the accounts by name and email with `filterValue`. With `filterBy` set to `group`, `filterValue` is also a group ID. The call then matches that ID against names and emails too, so it usually finds nothing. To filter by group, use `GET api/2.0/people/filter` with `groupId`. For active accounts only, the same call is `GET api/2.0/people`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **status** | path | **EmployeeStatus** | The account state to list, taken from the route: `Active` for working accounts, `Terminated` for disabled ones, `Pending` for open invitations, or `All` for every state. | [required] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **sortBy** | query | **String** | What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`, `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`. | [optional] [example: `DisplayName`] |
| **sortOrder** | query | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | [optional] [example: `Ascending`] [enum: `0`, `1`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the name and the email of the account, case-insensitively. Omit it to apply no text filter. | [optional] [example: `John`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A page of accounts in the requested state, with their full profiles | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or the `count` is outside its allowed range | - | - |
| **403** | The caller is a member or a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
