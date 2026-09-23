# setWebItemSecurity

Referenced types are defined in the [full reference](../api.md).

> SecurityArrayWrapper setWebItemSecurity(WebItemSecurityRequestsDto)

`PUT /api/2.0/settings/security`

Set module access

Replaces the access rules of one portal module: `id` names the module, `enabled` says whether it may be opened, and `subjects` lists the users and groups the rule is stored for. The caller needs the portal-settings right of a DocSpace administrator, and the call is answered with 403 on an open portal, where everyone is admitted and per-module rules would mean nothing. `id` has to be a GUID; anything else is rejected as an invalid request. The rules stored before are dropped rather than extended, so send the full list of subjects every time. Watch the empty cases: leaving `subjects` out applies `enabled` to everyone, while an empty `subjects` array is stored as access for everyone whatever `enabled` says. The change is recorded in the audit trail unless `subjects` was left out entirely. The answer is the module's resulting configuration as a single-entry list, in the shape `GET api/2.0/settings/security` returns. To switch several modules at once use `PUT api/2.0/settings/security/access`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WebItemSecurityRequestsDto** | body | [**WebItemSecurityRequestsDto**](../api.md#model-webitemsecurityrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The resulting access configuration of the module, as a single-entry list | [**SecurityArrayWrapper**](../api.md#model-securityarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
