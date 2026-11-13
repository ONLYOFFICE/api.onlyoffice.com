# resetCdnToDefault

> resetCdnToDefault()

`DELETE /api/2.0/settings/storage/cdn`

Reset the CDN storage settings

Clears the CDN settings of the portal, so the portal serves its static content itself again. The call does not upload, move, or delete files. Files on the CDN stay there until you delete them in the provider console. After the change reaches all services, the links that the portal builds no longer use the CDN. An open page may use the CDN until you reload it. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 if the installation is not self-hosted or limits the access space. The call changes data and returns no body. You can repeat it. To see the current CDN, use `GET api/2.0/settings/storage/cdn`. To select a CDN again, use `PUT api/2.0/settings/storage/cdn`. To reset the document storage, use `DELETE api/2.0/settings/storage`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The CDN configuration has been cleared and static content is served by the portal again | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit portal settings, or this installation does not allow changing the storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
