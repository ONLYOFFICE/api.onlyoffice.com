# saveAdditionalWhiteLabelSettings

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper saveAdditionalWhiteLabelSettings(AdditionalWhiteLabelSettingsWrapper)

`POST /api/2.0/settings/rebranding/additional`

Save the additional white label settings

Stores which of the ONLYOFFICE help and community resources the interface offers: the sample documents, the Help Center link, the Feedback and Support link, the user forum, the video guides and the license agreements. The whole set is replaced by the `settings` object of the request, so send every flag, not only the changed ones - a flag left out is stored as off. A request without that object is rejected as an invalid request. Requires a DocSpace administrator, a server installation with unrestricted space access and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is refused. The flags are installation-wide, so the change reaches every portal of that installation. The call is mutating and idempotent, and answers `true`. Only the visibility of these entries is controlled here, not the addresses behind them. Read the result back with `GET api/2.0/settings/rebranding/additional` and undo it with `DELETE api/2.0/settings/rebranding/additional`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AdditionalWhiteLabelSettingsWrapper** | body | [**AdditionalWhiteLabelSettingsWrapper**](../api.md#model-additionalwhitelabelsettingswrapper) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the resource flags have been stored for the installation | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request carries no settings object | - | - |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow branding to be edited | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
