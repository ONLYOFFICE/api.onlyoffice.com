# getRestoreProgress

Referenced types are defined in the [full reference](../backup.md).

> BackupProgressWrapper getRestoreProgress(Dump)

`GET /api/2.0/backup/getrestoreprogress`

Get the restoring progress

Reports the state of the restoring job, and is the operation to poll after `POST api/2.0/backup/startrestore`. It is the only operation of this service that needs no authorization and the only one that stays reachable while the portal is being restored, which is exactly the state a client polls it in - every other operation of the service answers 403 then. `dump` is read as three states rather than as a flag: omit it to get whichever restoring job concerns this portal, including a server-wide one, pass false to get the job of this portal only, and pass true to get the server-wide job; on a portal that is not a standalone installation the value is forced to false. When there is no matching job the call still answers 200, but the body carries no `response` member at all. `isCompleted` is the field to poll, a non-empty `error` is the only report of a failure, and neither `link` nor `warning` is ever filled in for a restoring job.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Dump** | query | **Boolean** | Which restoring job to look for, read as three states rather than as a flag: leave it out for whichever job concerns this portal, including a server-wide one, send false for the job of this portal alone, and send true for the server-wide job. On a portal that is not a standalone installation the value is forced to false. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the restoring job, or an empty payload when there is no such job | [**BackupProgressWrapper**](../backup.md#model-backupprogresswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BackupProgressWrapper**](../backup.md#model-backupprogresswrapper)

## Authorization

[cookieAuth](../backup.md#cookieauth), [bearerAuth](../backup.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
