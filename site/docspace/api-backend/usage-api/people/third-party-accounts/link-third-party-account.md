# linkThirdPartyAccount

> linkThirdPartyAccount(LinkAccountRequestDto)

`PUT /api/2.0/people/thirdparty/linkaccount`

Link a third-party account

Links a third-party identity to the account of the caller. After this call, the account can sign in through that provider. First, complete the sign-in that a URL of `GET api/2.0/people/thirdparty/providers` starts. Then pass the `serializedProfile` that this sign-in returns. Any signed-in user can call it. If the portal tariff does not include third-party sign-in, the call returns 403. A standalone installation always includes it. The call changes data and returns no body. The call returns 400 if `serializedProfile` is empty, comes from another portal, or is already linked to an account. So a repeated call returns 400. If the user cancelled the sign-in at the provider, the call returns 200 and links nothing. To check the link, read `linked` in `GET api/2.0/people/thirdparty/providers`. To delete a link, use `DELETE api/2.0/people/thirdparty/unlinkaccount`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **LinkAccountRequestDto** | body | [**LinkAccountRequestDto**](../../models/link-account-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The third-party identity is linked to the calling profile. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The third-party identity is already linked to a portal profile, or `serializedProfile` is missing, empty or was issued by another portal | - | - |
| **403** | The portal tariff does not include third-party authorization | - | - |
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
