# linkThirdPartyAccount

> linkThirdPartyAccount(LinkAccountRequestDto)

`PUT /api/2.0/people/thirdparty/linkaccount`

Link a third-party account

Connects a third-party identity to the calling profile, so that the account can afterwards sign in through that provider. The profile has to come from a completed provider authorization: pass the serialized `LoginProfile` the login flow started from `GET api/2.0/people/thirdparty/providers` handed back, not a hand-written object. It acts on the authenticated account only, and the portal has to be a standalone installation or have a tariff that includes third-party authorization, otherwise the operation answers 403. The call returns no body and is not idempotent: one third-party identity can be linked to a single portal profile, so repeating it, or linking an identity somebody else already uses, answers 400. A profile whose authorization was cancelled by the user is accepted and ignored, so a cancelled login also answers 200 and links nothing - read `GET api/2.0/people/thirdparty/providers` afterwards and check `linked` to find out whether the link exists. Use `DELETE api/2.0/people/thirdparty/unlinkaccount` to remove a link.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **LinkAccountRequestDto** | body | [**LinkAccountRequestDto**](../../models/link-account-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The third-party identity is linked to the calling profile. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The third-party identity is already linked to a portal profile | - | - |
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
