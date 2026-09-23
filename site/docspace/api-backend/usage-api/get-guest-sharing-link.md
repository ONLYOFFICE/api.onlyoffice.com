# getGuestSharingLink

Referenced types are defined in the [full reference](../people.md).

> StringWrapper getGuestSharingLink(userid)

`GET /api/2.0/people/guests/{userid}/share`

Get a guest sharing link

Builds a link that lets another member of the portal take over the caller's guest, so that the guest becomes visible to them as well. The account in the route has to exist and be a guest - any other type is rejected with 400 - and the caller has to be able to see it and must not be a guest itself. The call is read-only: it only mints the link and changes nothing, and it can be repeated as often as needed. The answer is a shortened confirmation URL as plain text; hand it to the person who should get the guest, and their client completes the hand-over with `POST api/2.0/people/guests/share/approve`. The link carries a confirmation token and therefore expires, so mint it when it is about to be used rather than storing it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the guest to be handed over, taken from the route. The account has to exist, has to be a guest, and has to be one the caller can see. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The shortened confirmation link, as plain text | [**StringWrapper**](../people.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The account is not a guest | - | - |
| **403** | The caller is a guest, or is not allowed to see that account | - | - |
| **404** | No account has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../people.md#model-stringwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
