# getApiKeys

Referenced types are defined in the [full reference](../people.md).

> ApiKeyResponseArrayWrapper getApiKeys()

`GET /api/2.0/keys`

Get the API keys

Returns the API keys the caller is allowed to see, which is not the same set for everybody: a DocSpace administrator gets every key of the portal, while any other member gets only the keys they created themselves. Any portal member except a guest may call it, and the call is read-only. The secrets are not returned - each entry identifies its key by `id` and by the last four characters in `keyPostfix`, and a secret can only be read once, at the moment `POST api/2.0/keys` creates it. Expired and deactivated keys stay in the list, so check `expiresAt` against the current time and read `isActive` before treating an entry as usable. An empty list means the caller has created no keys, not that the portal has none.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every key of the portal for a DocSpace admin, or the keys created by the caller for anybody else | [**ApiKeyResponseArrayWrapper**](../people.md#model-apikeyresponsearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ApiKeyResponseArrayWrapper**](../people.md#model-apikeyresponsearraywrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
