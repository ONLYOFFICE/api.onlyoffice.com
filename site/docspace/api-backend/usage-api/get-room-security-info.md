# getRoomSecurityInfo

Referenced types are defined in the [full reference](../files.md).

> FileShareArrayWrapper getRoomSecurityInfo(id, filterType, count, startIndex, filterValue)

`GET /api/2.0/files/rooms/{id}/share`

Get the room access rights

Returns one page of the access list of a room: the owner first, then the managers, the groups, the ordinary members, the guests and finally the invitations nobody has accepted yet, with the total in the response headers. `filterType` selects what is listed and defaults to accounts and groups, which leaves the sharing links of the room out; those are read with `GET api/2.0/files/rooms/{id}/links`. `filterValue` matches the displayed name of the subject, and an invitation that is still pending is listed under the email address it was sent to. Paging is done with `count` and `startIndex`, and the order is stable between calls. Any member who can read the room sees the accounts and the groups, so the list is not limited to the managers, and portal administrators can read the list of a room they were never invited to; somebody who is not in the room at all is refused. Asking for the link entries instead needs the right to see the links of the room, and a member without it gets an empty page rather than an error.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose access list is read, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **filterType** | query | **ShareFilterType** | What kind of access entries to list. The default covers accounts and groups and leaves the sharing links of the room out; those are read with `GET api/2.0/files/rooms/{id}/links`. | [optional] [example: `0`] [enum: `0`, `1`, `2`, `4`, `8`, `15`, `16`, `32`] |
| **count** | query | **Integer** (int32) | How many entries to return in one answer. The total number of matching entries comes back in the response headers, so it is what tells the caller whether another page is needed. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many matching entries to skip before the page starts. Together with the page size it walks the list, which is ordered by role and then by name and is therefore stable between calls. | [optional] [example: `0`] |
| **filterValue** | query | **String** | Keeps only the entries whose displayed name contains this text. An invitation that has not been accepted yet is listed under the email address it was sent to, so that is what has to be searched for. | [optional] [example: `Smith`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the room access entries, ordered by role and then by name | [**FileShareArrayWrapper**](../files.md#model-filesharearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../files.md#model-filesharearraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
