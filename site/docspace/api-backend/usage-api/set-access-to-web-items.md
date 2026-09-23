# setAccessToWebItems

Referenced types are defined in the [full reference](../api.md).

> SecurityArrayWrapper setAccessToWebItems(WebItemsSecurityRequestsDto)

`PUT /api/2.0/settings/security/access`

Set access to modules in bulk

Switches several portal modules on or off in one call: `items` carries an entry per module, its `key` the module GUID and its `value` the new enabled flag. The caller needs the portal-settings right of a DocSpace administrator, and the call is answered with 403 on an open portal, where everyone is admitted and per-module rules would mean nothing. Every key has to be a GUID; anything else is rejected as an invalid request, and a module listed twice is applied once, from its first entry. This operation carries no subject list of its own: switching a product module on restores the users and groups it was last restricted to, while every other case is stored as a plain allow or deny for everyone, so use `PUT api/2.0/settings/security` when the allow-list itself has to change. The batch is recorded in the audit trail as one list update rather than module by module. The answer is the resulting configuration of every module listed, in the shape `GET api/2.0/settings/security` returns.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WebItemsSecurityRequestsDto** | body | [**WebItemsSecurityRequestsDto**](../api.md#model-webitemssecurityrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The resulting access configuration of every module listed in the request | [**SecurityArrayWrapper**](../api.md#model-securityarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Per-module access cannot be configured on an open portal, or the caller lacks the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SecurityArrayWrapper**](../api.md#model-securityarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
