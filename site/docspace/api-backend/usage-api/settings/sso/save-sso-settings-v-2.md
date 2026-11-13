# saveSsoSettingsV2

> SsoSettingsWrapper saveSsoSettingsV2(SsoSettingsRequestDto)

`POST /api/2.0/settings/ssov2`

Save the SSO settings

Replaces the SAML SSO configuration of the portal with the JSON object in `serializeSettings`. It returns the saved configuration. The object is a full configuration, not a patch. Left-out fields become empty. Start from `GET api/2.0/settings/ssov2` or `GET api/2.0/settings/ssov2/default`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If a cloud plan lacks SSO or SSO settings are hidden, the call returns 402. The call changes data, and you can repeat it with the same body. It changes a `usersType` other than room admin (1), DocSpace admin (3), or user (4) to 4. It saves an empty login label as `Single Sign-on` and cuts a longer one to 100 characters. If `enableSso` is false or missing, the call unlinks every SSO account from the identity provider. These accounts become ordinary portal accounts. Turning SSO back on does not link them again. The call returns 400 if `serializeSettings` is empty, the JSON `null`, or not valid JSON. A value of the wrong type also returns 400. It also returns 400 if the JSON lacks `idpSettings` or `fieldMapping`. An empty entity ID, sign-in URL, first name, last name, or email mapping also returns 400. A sign-in or sign-out URL that is not an absolute http or https address also returns 400. Then the call saves nothing. For the values of the SAML fields, use `GET api/2.0/settings/ssov2/constants`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SsoSettingsRequestDto** | body | [**SsoSettingsRequestDto**](../../models/sso-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The SSO settings as they were stored, with the login label and the user type normalised | [**SsoSettingsWrapper**](../../models/sso-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The serialized settings are empty, not valid JSON, have a value of the wrong type or do not contain an SSO configuration object, the `idpSettings` object is missing or its entity ID is empty, the SSO URL is missing or the SSO or SLO URL is not an absolute HTTP or HTTPS address, or the `fieldMapping` object is missing or its first name, last name or email attribute is empty | - | - |
| **402** | The portal is a cloud one, and its pricing plan has no single sign-on option or the SSO section is not enabled for it | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SsoSettingsWrapper**](../../models/sso-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
