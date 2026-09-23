# getIsProductAdministrator

Referenced types are defined in the [full reference](../api.md).

> ProductAdministratorWrapper getIsProductAdministrator(productid, userid)

`GET /api/2.0/settings/security/administrator`

Check product administrator

Reports whether one user administers one portal module, as the identifiers asked about plus an `administrator` flag. Both `productid` and `userid` are query parameters and both are required; the all-zero product GUID asks about the portal itself rather than about a single module. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. The operation is read-only. The flag is `true` when the user belongs to the DocSpace administrator group or to the module's own group, so a portal-wide administrator is reported as an administrator of every module, whatever the module identifier says. Identifiers that name no user and no group are answered with `false` instead of a failure, so a `false` does not prove the user exists. The verdict is read out of group membership alone and says nothing about whether the module is enabled for this portal, which `GET api/2.0/settings/security/{id}` reports. Use `GET api/2.0/settings/security/administrator/{productid}` to list everyone who administers a module, and `PUT api/2.0/settings/security/administrator` to change the membership.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **productid** | query | **UUID** (uuid) | The module being asked about, by module GUID. The all-zero GUID asks about the portal itself rather than a single module. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **userid** | query | **UUID** (uuid) | The account being asked about, by portal user ID. An ID that names no account is answered as a plain negative rather than a failure, so a negative answer does not prove the account exists. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The module and the user asked about together with the flag that says whether that user administers the module | [**ProductAdministratorWrapper**](../api.md#model-productadministratorwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ProductAdministratorWrapper**](../api.md#model-productadministratorwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
