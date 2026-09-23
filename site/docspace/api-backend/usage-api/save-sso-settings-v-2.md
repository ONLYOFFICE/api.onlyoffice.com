# saveSsoSettingsV2

Referenced types are defined in the [full reference](../api.md).

> SsoSettingsV2Wrapper saveSsoSettingsV2(SsoSettingsRequestsDto)

`POST /api/2.0/settings/ssov2`

Save the SSO settings

Replaces the whole SAML Single Sign-On configuration of the current portal with the one passed as a JSON object in `serializeSettings`, and returns the configuration as it was stored. The payload is a complete configuration rather than a patch: fields left out are stored empty, so send back a changed copy of `GET api/2.0/settings/ssov2`, or start from `GET api/2.0/settings/ssov2/default`. The identity provider entity ID and sign-in URL are required, the sign-in and sign-out URLs have to be absolute http or https addresses, and the attribute mapping has to name the fields for first name, last name and email; otherwise nothing is saved. The caller has to be allowed to edit portal settings (portal owner or DocSpace admin), and the portal plan has to include Single Sign-On. Some values are normalised on the way in: a `usersType` other than 1 (room admin), 3 (DocSpace admin) or 4 (user) becomes 4, an empty login label becomes `Single Sign-on`, and a longer one is cut to 100 characters. Saving with SSO switched off unlinks every existing SSO account and turns it into an ordinary one; switching SSO back on later does not restore those links. The change is recorded in the audit trail.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SsoSettingsRequestsDto** | body | [**SsoSettingsRequestsDto**](../api.md#model-ssosettingsrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The SSO settings as they were stored, with the login label and the user type normalised | [**SsoSettingsV2Wrapper**](../api.md#model-ssosettingsv2wrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The serialized settings are empty or do not contain an SSO configuration object | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SsoSettingsV2Wrapper**](../api.md#model-ssosettingsv2wrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsSecurityApi
