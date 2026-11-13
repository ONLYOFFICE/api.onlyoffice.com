# getDocServiceUrl

> DocServiceUrlWrapper getDocServiceUrl(version)

`GET /api/2.0/files/docservice`

Get the document service address

Returns the ONLYOFFICE Docs connection settings of the portal and the editor script URLs. Anyone can call it without signing in, and every caller gets the same values. The call is read-only. With `version` true, the portal asks the Document Server for its editor version. Otherwise, `version` is empty and the call does not contact the Document Server. If the Document Server does not answer, `version` holds a fallback value instead of an error. So a version does not prove that the Document Server works. To change the settings, use `PUT api/2.0/files/docservice`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **version** | query | **Boolean** | Whether the running Document Server is asked for its editor version so that `version` can report it. Left off, the portal answers from its own settings without contacting the Document Server and `version` comes back empty. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The document service location, with the editor version filled in when it was requested | [**DocServiceUrlWrapper**](../../models/doc-service-url-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocServiceUrlWrapper**](../../models/doc-service-url-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
