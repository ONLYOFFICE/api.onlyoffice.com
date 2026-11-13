# finishMigration

> finishMigration(FinishDto)

`POST /api/2.0/migration/finish`

Finish migration

Closes a finished import and can email the imported users their activation links. Call it after `GET api/2.0/migration/status` reports `isCompleted` for the import. Requires a DocSpace admin. Other callers get 403. If `isSendWelcomeEmail` is true, the call emails each imported user who is not active yet. With `false`, it sends nothing, and you can invite these users later. Then it queues the same clean-up as `POST api/2.0/migration/clear`. The clean-up deletes the job and the uploaded backup, and the imported data stays. The call returns an empty body. After it, `GET api/2.0/migration/status` returns an empty result. Also, `GET api/2.0/migration/logs` returns 404, so download the log first. You can repeat the call with `false`. With `true`, do not repeat it. A repeat can send the emails again. It returns 400 if the body has no `isSendWelcomeEmail`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **FinishDto** | body | [**FinishDto**](../models/finish-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The activation emails have been sent if they were asked for and the clean-up has been queued. The response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `isSendWelcomeEmail` | - | - |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](migration.md#basic), [OAuth2](migration.md#oauth2) (scopes: read, write), [ApiKeyBearer](migration.md#apikeybearer), [asc_auth_key](migration.md#asc_auth_key), [Bearer](migration.md#bearer), [OpenId](migration.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
