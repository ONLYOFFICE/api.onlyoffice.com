# unlinkThirdPartyAccount

> unlinkThirdPartyAccount(provider)

`DELETE /api/2.0/people/thirdparty/unlinkaccount`

Unlink a third-party account

Removes the link between the calling profile and the named third-party provider, so that the account can no longer sign in through it. It acts on the authenticated account only and takes the provider name in the query, using the same lowercase values `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`. The call returns no body and is idempotent: unlinking a provider that is not linked answers 200 and changes nothing. The portal profile itself is kept, together with its password, so the account stays usable through the ordinary sign-in; only the third-party route is removed. Link the provider again through `PUT api/2.0/people/thirdparty/linkaccount`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **provider** | query | **String** | The name of the provider to unlink, in the lowercase form `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`. A name that is not linked to the calling profile is accepted and changes nothing. | [optional] [example: `google`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The third-party identity is no longer linked to the calling profile. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
