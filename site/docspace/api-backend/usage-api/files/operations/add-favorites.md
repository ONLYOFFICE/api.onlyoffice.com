# addFavorites

> BooleanWrapper addFavorites(BaseBatchRequestDto)

`POST /api/2.0/files/favorites`

Add favorite files and folders

Marks the listed files and folders as favorites for the calling account. The favorite list is personal: nothing changes for other members, and the entries stay where they are stored. Read access to each item is enough, so a room member with view-only rights and a guest may call it. Items the caller cannot read, ids that do not exist and encrypted files of a private room are skipped without a word, and the answer is `true` even when nothing was marked, so read the outcome back from `GET api/2.0/files/@favorites` instead of trusting it. Numeric ids address entries stored in the portal itself, string ids entries on a connected third-party account, and both kinds may be sent in one request. The call is mutating but safe to repeat: an item already marked stays listed once. An entry moved to the Trash keeps its mark and is left out of the listing until it is restored. `returnSingleOperation` arrives with the shared body and does nothing here. Use `DELETE api/2.0/files/favorites` to undo, or `GET api/2.0/files/favorites/{fileId}` for a single file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the request was understood, which does not mean that anything was marked | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Marking favorites is refused for the caller | - | - |
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
