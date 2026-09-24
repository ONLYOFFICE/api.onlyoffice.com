# aiProfilesTestConnection

> aiProfilesTestConnection_200_response aiProfilesTestConnection(body)

`POST /api/2.0/ai/profiles/test-connection`

Test a profile's provider

Probes a stored profile's credentials against its provider and reports the outcome in the answer, writing nothing - this is what a Test button calls so that a failure does not commit anything. `profileId` is required and may be sent in the body or as a query parameter. The result is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload. To validate credentials that are not stored yet, use `POST api/2.0/ai/profiles/list-provider-models`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the profile to probe, as a bare JSON string. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The outcome of the probe. A failed probe is reported here, not as a status. | [**aiProfilesTestConnection_200_response**](../../models/ai-profiles-test-connection-200-response.md) | - |
| **400** | `profileId` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**aiProfilesTestConnection_200_response**](../../models/ai-profiles-test-connection-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
