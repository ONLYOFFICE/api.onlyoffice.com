# deleteAdditionalWhiteLabelSettings

Referenced types are defined in the [full reference](../api.md).

> AdditionalWhiteLabelSettingsResponseWrapper deleteAdditionalWhiteLabelSettings()

`DELETE /api/2.0/settings/rebranding/additional`

Delete the additional white label settings

Discards the resource flags stored for the installation and brings back the built-in set, so the sample documents, the Help Center link, the Feedback and Support link, the user forum, the video guides and the license agreements are offered as they are out of the box. Requires a DocSpace administrator and a server installation with unrestricted space access; on a SaaS portal the call is refused. Unlike `POST api/2.0/settings/rebranding/additional` it does not need a plan that includes branding, so an installation whose subscription no longer covers it can still be reset. The call is destructive for the stored flags, which have to be set again to come back, and it is idempotent. Instead of a flag it answers the set that is now in effect, so no follow-up read is needed. The reset is installation-wide and reaches every portal, and it leaves the visibility of the About page alone. The company details are reset separately by `DELETE api/2.0/settings/rebranding/company`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The built-in resource flags that are now in effect | [**AdditionalWhiteLabelSettingsResponseWrapper**](../api.md#model-additionalwhitelabelsettingsresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow branding to be edited | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AdditionalWhiteLabelSettingsResponseWrapper**](../api.md#model-additionalwhitelabelsettingsresponsewrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
