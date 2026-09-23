# saveRoomQuotaSettings

Referenced types are defined in the [full reference](../api.md).

> TenantRoomQuotaSettingsWrapper saveRoomQuotaSettings(QuotaSettingsRequestsDto)

`POST /api/2.0/settings/roomquotasettings`

Save the room quota settings

Sets the portal's default per-room storage quota, applied to newly created rooms as their starting limit. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal's plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested size cannot exceed the portal's own total storage quota, nor, on a Standalone install with a portal-wide quota enabled, that quota's size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for new rooms. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It returns the saved settings, not the individual rooms' current usage.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **QuotaSettingsRequestsDto** | body | [**QuotaSettingsRequestsDto**](../api.md#model-quotasettingsrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved default per-room storage quota settings | [**TenantRoomQuotaSettingsWrapper**](../api.md#model-tenantroomquotasettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal's pricing plan does not include the statistics feature required for room quotas | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantRoomQuotaSettingsWrapper**](../api.md#model-tenantroomquotasettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
