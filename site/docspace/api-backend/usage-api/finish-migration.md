# finishMigration

Referenced types are defined in the [full reference](../api.md).

> finishMigration(FinishDto)

`POST /api/2.0/migration/finish`

Finish migration

Closes a completed import: it can send every user the import created the activation email they need before they can sign in, and it then discards the job and the data uploaded for it. Call it once `GET api/2.0/migration/status` reports `isCompleted` for the import; a DocSpace administrator is required, and with `isSendWelcomeEmail` set to true the job must still be in the queue, so do not clear it first. That flag decides what happens to the imported people: true mails the activation link to each of them who has not activated their account yet and skips the ones that are already active, false ends the import quietly and leaves inviting them for later. The call writes to the portal and is not idempotent - the emails go out again on every call - while its second half repeats what `POST api/2.0/migration/clear` does, removing the finished job and the uploaded backup and leaving everything already imported in place. It answers with an empty body, after which `GET api/2.0/migration/status` returns an empty result and `GET api/2.0/migration/logs` answers 404, so download the log first.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **FinishDto** | body | [**FinishDto**](../api.md#model-finishdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The activation emails have been sent if they were asked for and the clean-up has been queued. The response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
