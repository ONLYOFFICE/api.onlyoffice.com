# removeSecurityInfo

> BooleanWrapper removeSecurityInfo(BaseBatchRequestDto)

`DELETE /api/2.0/files/share`

Remove sharing rights in batch

Revokes the access of every account and group on the files and folders listed in the request, and clears the entries from the caller's own favorites, recent and unread marks. The owner's own record is kept, since removing it would take the entry away from the account that owns it, and external links survive untouched - remove those through the link operations of the entry. The caller must be allowed to change the access of each entry, which means the creator of the room, a portal administrator, or a member with the rights to manage it; a caller whose only access came through an external link may use this call to drop the entry from its own list, while a directly invited member or an unrelated account is refused. The answer is always `true` and identifiers that match nothing are skipped silently, so a successful answer is not proof that anything was revoked - read the rights back with `POST api/2.0/files/share`. The call is destructive and safe to repeat. To take the rights of one account away instead of all of them, call `PUT api/2.0/files/share` with that account's access set to `None`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the accounts and groups that had access to the listed entries no longer have it | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
