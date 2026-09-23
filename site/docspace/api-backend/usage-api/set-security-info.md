# setSecurityInfo

Referenced types are defined in the [full reference](../files.md).

> FileShareArrayWrapper setSecurityInfo(SecurityInfoRequestDto)

`PUT /api/2.0/files/share`

Set sharing rights in batch

Grants, changes or withdraws the access of the listed accounts and groups on every file and folder named in the request at once, and returns the resulting rights. Entry identifiers come from a listing operation, and the accounts and groups come from the portal's own account and group lists; an access of `None` withdraws the rights instead of granting them. The caller must be allowed to change the access of every listed entry - the creator of the room, a member with the rights to manage it, or a portal administrator - and a read-only member or a guest is refused even when the payload changes nothing. A subject the caller is not allowed to share with, such as a guest that belongs to another member, is skipped without an error, and an empty `share` collection makes the call do nothing and answer with an empty list. Repeating the same request leaves the same rights in place. The answer holds one record per listed subject for each entry that was actually processed, so it is shorter than the request when something was skipped and worth comparing against it. For a single room prefer `PUT api/2.0/files/rooms/{id}/share`, which also invites members by email.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SecurityInfoRequestDto** | body | [**SecurityInfoRequestDto**](../files.md#model-securityinforequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rights of the listed accounts and groups on every entry that was processed | [**FileShareArrayWrapper**](../files.md#model-filesharearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: application/json
- **Accept**: application/json

## FilesThirdPartyIntegrationApi
