# deleteGuests

> deleteGuests(UpdateMembersRequestDto)

`DELETE /api/2.0/people/guests`

Remove guest relations

Removes the listed guests from the guest list of the caller. The call also deletes the shares that the caller gave them. It does not delete the accounts. Each guest keeps its profile and the access that other users gave it. Requires a room admin or a DocSpace admin. Other callers get 403. Each listed account must exist, be an active guest, and be a guest of the caller. Otherwise the call returns 403 and changes nothing. The call changes data, and a repeated call returns 403. If `userIds` is missing, the call returns 400. It returns no body. To see the remaining guests, use `GET api/2.0/people/filter` with `area` set to `Guests`. To delete a guest account, disable it, then use `DELETE api/2.0/people/{userId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../../models/update-members-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The guests are no longer linked to the caller. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The userIds field is missing | - | - |
| **403** | The caller is not an admin, or an entry is not an active guest of the caller | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
