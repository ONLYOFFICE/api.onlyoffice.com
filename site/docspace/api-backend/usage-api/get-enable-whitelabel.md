# getEnableWhitelabel

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper getEnableWhitelabel()

`GET /api/2.0/settings/enablewhitelabel`

Check the white label availability

Reports whether branding may be configured for the current portal at all, which is the check to make before offering the rebranding interface or calling any of the save operations under `api/2.0/settings/whitelabel`. Requires a DocSpace administrator. The call is read-only and idempotent. The answer is `true` only when both conditions hold: the branding section is not switched off in the installation configuration, and the portal's current plan includes customization. It comes back as `false` on a plan without branding, which is exactly the case in which `POST api/2.0/settings/whitelabel/logos/save`, `POST api/2.0/settings/whitelabel/logos/savefromfiles` and `POST api/2.0/settings/whitelabel/logotext/save` are refused as payment required. The restore operations do not depend on this flag and stay available, so a portal that loses branding can still be reset to the built-in logos and wordmark. The flag says nothing about the installation-wide default branding, which additionally needs a server installation with unrestricted space access, and nothing about the company details and help links under `api/2.0/settings/rebranding`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when branding is enabled in this installation and included in the portal's plan | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
