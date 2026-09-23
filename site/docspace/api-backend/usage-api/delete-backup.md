# deleteBackup

Referenced types are defined in the [full reference](../backup.md).

> BooleanWrapper deleteBackup(id)

`DELETE /api/2.0/backup/deletebackup/{id}`

Delete the backup

Deletes one backup: first its history record, then the archive in the storage the record points at. The ID is the one listed by `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the backup was started with. Deleting a backup of the whole server rather than of one portal additionally requires the space access permission. A record that belongs to another portal is left untouched and the call still answers true, so the result confirms that the request was accepted rather than that anything was deleted - check with `GET api/2.0/backup/getbackuphistory` if it matters. The record is removed before the archive, so when the storage can no longer be reached the archive stays behind with nothing pointing at it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the backup to delete, taken from the route. It is the `id` of a record listed by `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the backup was started with. | [required] [example: `11111111-1111-1111-1111-111111111111`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True once the request has been accepted, whether or not a backup was deleted | [**BooleanWrapper**](../backup.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal subscription has expired or has not been paid | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../backup.md#model-booleanwrapper)

## Authorization

[Basic](../backup.md#basic), [OAuth2](../backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](../backup.md#apikeybearer), [asc_auth_key](../backup.md#asc_auth_key), [Bearer](../backup.md#bearer), [OpenId](../backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
