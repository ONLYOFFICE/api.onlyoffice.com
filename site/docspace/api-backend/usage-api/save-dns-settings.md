# saveDnsSettings

Referenced types are defined in the [full reference](../api.md).

> StringWrapper saveDnsSettings(DnsSettingsRequestsDto)

`PUT /api/2.0/settings/dns`

Save the DNS settings

Maps a custom domain name onto the current tenant, or clears the mapping, so the portal becomes reachable under the caller's own DNS name instead of only its default alias. Available only on a Standalone (self-hosted) installation; on SaaS the call is always refused. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). Disable the mapping by passing `enable=false`, in which case the domain name in the request is ignored. A domain that collides with the portal's reserved base domain, or otherwise fails validation, is rejected without changing the current mapping. This is a mutating, idempotent call. On success the previous domain also stops answering, and any CSP configuration referencing it is updated to the new one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DnsSettingsRequestsDto** | body | [**DnsSettingsRequestsDto**](../api.md#model-dnssettingsrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirmation that the DNS mapping was updated | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The domain name is invalid, or collides with the portal's reserved base domain | - | - |
| **402** | This option is not available under the portal's current pricing plan | - | - |
| **405** | The portal is not a Standalone installation, so a custom domain cannot be mapped | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
