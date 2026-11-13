# deleteBackup

> BooleanWrapper deleteBackup(id)

`DELETE /api/2.0/backup/deletebackup/{id}`

Delete the backup

Deletes a backup. The call first deletes its history record, then its archive in the storage. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. For a server-wide backup, a caller without the space access permission also gets 403. The call changes data and cannot be undone. It returns `true` even if it deletes nothing, for example for a backup of another portal or a repeated call. If the call cannot reach the storage, the archive stays there without a record. To check what is left, use `GET api/2.0/backup/getbackuphistory`. If no backup ever had this ID, the call returns 404. If the portal subscription has expired or is not paid, the call returns 402.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the backup to delete, taken from the route. It is the `id` of a record listed by `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the backup was started with. | [required] [example: `11111111-1111-1111-1111-111111111111`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True once the request has been accepted, whether or not a backup was deleted | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal subscription has expired or has not been paid | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | There is no backup record with this ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
