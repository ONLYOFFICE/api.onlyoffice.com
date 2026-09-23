# forcesave

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper forcesave()

`PUT /api/2.0/files/forcesave`

Change the forcesaving ability

Reports that forcesaving is on for this portal. The operation is a stub kept for compatibility: it takes no request body, stores nothing and always answers true, so calling it neither turns forcesaving on nor off and repeating it changes nothing. Forcesaving itself - the editor writing the document back to storage while the session is still open - is on for every portal and cannot be switched off through the API. Any authenticated role down to a guest may call it; an unauthenticated caller is refused. The same constant is published as `forcesave` by `GET api/2.0/files/settings`, which is the cheaper way to read it together with the rest of the settings. A companion stub, `PUT api/2.0/files/storeforcesave`, answers for the storing of forcesaved versions in the same way. Nothing in this call reaches a document: to have the current state of an editing session written to storage, drive the document through the editor operations of the file itself rather than through this setting.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: forcesaving is on for every portal | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
