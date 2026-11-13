# checkDocServiceUrl

> DocServiceUrlWrapper checkDocServiceUrl(CheckDocServiceUrlRequestDto)

`PUT /api/2.0/files/docservice`

Set the document service address

Changes the ONLYOFFICE Docs connection settings of the portal and checks them on the running Document Server. An empty address deletes the portal's own value, and the deployment default applies again. The portal adds `http://` to an address without a scheme. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and you can repeat it with the same body. The check calls the editor api script, the healthcheck, the converter, the command service, and the document builder. If one fails, the portal restores all previous settings. Then the call fails. On success, it returns what `GET api/2.0/files/docservice` returns without `version`. The call returns 400 if an address cannot be parsed or is an absolute address with a query string. It also returns 400 for a secret without a header. It also returns 400 for an `http` public address on a portal served over `https`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CheckDocServiceUrlRequestDto** | body | [**CheckDocServiceUrlRequestDto**](../../models/check-doc-service-url-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The settings are stored and the Document Server answered the verification requests | [**DocServiceUrlWrapper**](../../models/doc-service-url-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `docServiceUrl`, an address cannot be parsed or carries a query string, the signature secret is sent without its header, or an http address is given for a portal served over https | - | - |
| **403** | The caller is not the portal owner or a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocServiceUrlWrapper**](../../models/doc-service-url-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
