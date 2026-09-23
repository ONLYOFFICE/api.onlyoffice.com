# storeForcesave

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper storeForcesave()

`PUT /api/2.0/files/storeforcesave`

Change the ability to store the forcesaved files

Reports that forcesaved versions are not kept as separate file versions in this portal. The operation is a stub kept for compatibility: it takes no request body, stores nothing and always answers false, so it neither turns the behaviour on nor off and repeating it changes nothing. What it describes is what happens to the intermediate saves the editor makes while a document is still open - they update the current version instead of piling up as new ones in `GET api/2.0/files/file/{fileId}/history`. Any authenticated role down to a guest may call it; an unauthenticated caller is refused. The same constant is published as `storeForcesave` by `GET api/2.0/files/settings`, which is the cheaper way to read it. Its companion stub `PUT api/2.0/files/forcesave` answers for forcesaving itself in the same way. Version history is not affected by this call either: the versions a document really has are the ones the file history operation lists, and a new one appears when the editing session is closed.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always false: forcesaved versions are not kept separately | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../files.md#model-booleanwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
