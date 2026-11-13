# removeSecurityInfo

> BooleanWrapper removeSecurityInfo(BaseBatchRequestDto)

`DELETE /api/2.0/files/share`

Remove sharing rights in batch

Deletes all sharing rights on the listed files and folders, or removes them from the caller's own list. The owner's record and external links stay. To delete external links, use the link operations of the entry. Requires read access to each entry. Other callers get 403. Only a caller who may manage access, or a DocSpace admin outside a private room, deletes the rights. Any other caller only removes the entry from their own list. For a room member, this means leaving the room. The call changes data, and you can repeat it. It stops at the first entry it may not change, and earlier entries stay changed. In both modes, it clears the caller's favorite, recent, and new marks on the entry. In a private room, every account that loses access also loses its file keys. The call always returns `true` and skips IDs that match nothing. To check the result, use `POST api/2.0/files/share`. To delete the rights of one account, use `PUT api/2.0/files/share` with the access `None`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the accounts and groups that had access to the listed entries no longer have it | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not change the access of a listed entry and cannot read it either, so it cannot be dropped from their own list. A portal administrator outside a private room gets this as well | - | - |
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
