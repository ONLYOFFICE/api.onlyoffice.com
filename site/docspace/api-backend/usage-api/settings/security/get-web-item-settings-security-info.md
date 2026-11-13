# getWebItemSettingsSecurityInfo

> SecurityArrayWrapper getWebItemSettingsSecurityInfo(ids)

`GET /api/2.0/settings/security`

Get module access settings

Returns the access rules of portal modules, one entry per GUID in `ids`. Entries follow the order of `ids`. Each entry says whether the module is enabled and which groups and users may open it. Without `ids`, the call reports every module the portal registers. DocSpace registers none, so the list is then empty. Any signed-in user can call it. The call is read-only. If an `ids` value is not a GUID, the call returns 400. A module that nobody configured has `enabled` set to `false`. The `users` list leaves out users the caller cannot see. So two callers can get different lists for one module. The `isSubItem` flag is `true` for a module nested under another module. To change the rules, use `PUT api/2.0/settings/security`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ids** | query | **List** | The modules to report on, each given as a GUID and sent as a repeated query value. An entry that is not a GUID fails the whole request as invalid. Leaving the list out asks about every module registered in the portal, which on a DocSpace installation is none, so the answer is then empty rather than complete. | [optional] [example: `["00000000-0000-0000-0000-000000000000"]`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The access configuration of every module identifier asked about: the enabled flag, the allowed groups, the allowed users the caller may see, and the sub-module flag | [**SecurityArrayWrapper**](../../models/security-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | An `ids` value is not a GUID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SecurityArrayWrapper**](../../models/security-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
