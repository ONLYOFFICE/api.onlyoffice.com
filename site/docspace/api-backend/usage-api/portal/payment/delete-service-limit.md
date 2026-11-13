# deleteServiceLimit

> deleteServiceLimit(id)

`DELETE /api/2.0/portal/payment/servicelimit/{id}`

Delete a service limit

Deletes one spending limit on the AI services. This can be the limit of the portal, the limit for every user, or a personal limit. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call cannot be undone. To keep the settings of a limit, turn it off with `PUT api/2.0/portal/payment/servicelimit` instead. To get a deleted limit back, create a new one with `POST api/2.0/portal/payment/servicelimit`. After a personal limit is deleted, the limit for every user applies to that user. The call returns 404 if the portal has no AI service limit with this ID. A repeated call returns 404. The response has no body. If `id` is zero or negative, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits. | [required] [example: `42`] [min: 1] [max: 2147483647] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The service limit has been deleted; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The ID is zero or negative | - | - |
| **403** | The caller may not edit the portal settings or is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer, or the portal has no limit on the AI services with this ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
