# checkDocServiceUrl

Referenced types are defined in the [full reference](../files.md).

> DocServiceUrlWrapper checkDocServiceUrl(CheckDocServiceUrlRequestDto)

`PUT /api/2.0/files/docservice`

Set the document service address

Writes the portal-wide ONLYOFFICE Docs connection settings - the public Document Server address, its address inside the private network, the address it calls this portal back on, the request signature secret and header, and SSL verification - then verifies them against the running Document Server before keeping them. Every address is optional: an empty value drops the portal's own setting so that the deployment default takes over again. An address gets `http://` prepended when it carries no scheme, while an absolute address with a query string is rejected with 400, as is a signature secret sent without its header. Only the portal owner and a DocSpace administrator may call this; a room administrator, a user and a guest are refused with 403. The call is mutating and safe to repeat with the same body. Verification is live - the editor api script, the healthcheck, a test conversion, the command service and the document builder are all exercised - and when it fails the previous settings are restored in full and nothing is changed. The answer is what `GET api/2.0/files/docservice` returns with no version requested, so `version` comes back empty and the signature secret is not echoed back.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CheckDocServiceUrlRequestDto** | body | [**CheckDocServiceUrlRequestDto**](../files.md#model-checkdocserviceurlrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The settings are stored and the Document Server answered the verification requests | [**DocServiceUrlWrapper**](../files.md#model-docserviceurlwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | An address cannot be parsed or carries a query string, the signature secret is sent without its header, or an http address is given for a portal served over https | - | - |
| **403** | The caller is not the portal owner or a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocServiceUrlWrapper**](../files.md#model-docserviceurlwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
