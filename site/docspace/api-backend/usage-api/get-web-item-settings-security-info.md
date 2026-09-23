# getWebItemSettingsSecurityInfo

Referenced types are defined in the [full reference](../api.md).

> SecurityArrayWrapper getWebItemSettingsSecurityInfo(ids)

`GET /api/2.0/settings/security`

Get module access settings

Reports how access to the portal's own modules is configured: for every module identifier sent in `ids`, whether access is restricted at all and which users and groups are allowed to open the module. Send the identifiers as repeated `ids` query values; each one has to be a GUID, and anything else is rejected as an invalid request. Omitting `ids` asks about every module registered in the portal, which on a DocSpace installation is none, so the answer is then an empty list rather than a failure. Any signed-in member may call this; anonymous callers are not admitted. The operation is read-only and answers one entry per identifier, in the order the identifiers were sent. `enabled` is `false` for a module nobody has ever configured, `groups` and `users` name the subjects the rule was stored for, and `isSubItem` marks a module that hangs under another one. Users the caller is not allowed to see are left out of `users`, so the same module can come back with different lists for different callers. Change any of this with `PUT api/2.0/settings/security`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ids** | query | **List** | The modules to report on, each given as a GUID and sent as a repeated query value. An entry that is not a GUID fails the whole request as invalid. Leaving the list out asks about every module registered in the portal, which on a DocSpace installation is none, so the answer is then empty rather than complete. | [optional] [example: `["00000000-0000-0000-0000-000000000000"]`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The access configuration of every module identifier asked about: the enabled flag, the allowed groups, the allowed users the caller may see, and the sub-module flag | [**SecurityArrayWrapper**](../api.md#model-securityarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
