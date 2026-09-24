# externalShare

> BooleanWrapper externalShare(DisplayRequestDto)

`PUT /api/2.0/files/settings/external`

Change the external sharing ability

Turns external (public) links on or off for the whole portal and returns the value that is now stored. Only the portal owner and a DocSpace administrator may change it: a room administrator, a member or a guest is refused, and so is an unauthenticated caller. Turning it off also turns sharing on social networks off, so a following read of `externalShareSocialMedia` reports false without a separate call. This operation sets one flag; to write the whole external-sharing policy in one request - the default link type, the sections the restriction applies to and whether existing links are blocked at once - use `PUT api/2.0/files/settings/externalsharingsettings`. The value is published as `externalShare` by `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from the portal rather than a success flag. External links are allowed in a new portal. Turning them off does not delete the links that already exist - whether those stop working at once is decided by the `blockExistingLinksOnRestrict` field of the settings operation named above.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DisplayRequestDto** | body | [**DisplayRequestDto**](../../models/display-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if external links may be created in this portal | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
