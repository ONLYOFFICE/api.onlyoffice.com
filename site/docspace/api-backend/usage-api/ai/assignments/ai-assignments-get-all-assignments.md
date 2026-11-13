# aiAssignmentsGetAllAssignments

> aiAssignmentsGetAllAssignments_200_response aiAssignmentsGetAllAssignments(entityId, expand)

`GET /api/2.0/ai/assignments/get-all-assignments`

Get all assignments

Returns every action-to-profile binding of a scope as one map, which is what a settings screen loads. `entityId`, when sent, has to name a room the caller can open; the bindings are portal-wide, so the answer is the same set with or without it. Actions with no binding are simply absent from the map. The `Default` slot is reported as an entry of its own rather than being folded into the others. With `expand=profile` the answer is `{ assignments, profilesTotal, chatProfilesTotal }`: the assigned profiles themselves (as `GET api/2.0/ai/profiles/list` describes them) keyed by action, a binding whose profile no longer exists left out, plus how many profiles the portal has and how many of them can chat; this is the one read a chat needs to start.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace folder the request names. For a chat it is the AI project the chat runs in, and is omitted outside a project; the settings operations accept it for the room the client is in, which has to be one the caller can open, but their data is kept per user and portal, not per room. | [optional] [example: `1234`] |
| **expand** | query | **String** | Set to profile to answer the assigned profiles themselves instead of their IDs: `{ assignments, profilesTotal, chatProfilesTotal }`. Omit for the plain ID map. | [optional] [example: `profile`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The scope's bindings as a map of action type to profile ID, or with `expand=profile` the envelope of the assigned profiles and the catalogue's counts. An action with no binding is absent. | [**aiAssignmentsGetAllAssignments_200_response**](../../models/ai-assignments-get-all-assignments-200-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The referenced object does not exist: an unknown or deleted room named by `entityId`, or an object the caller cannot read - for those the two cases are deliberately indistinguishable. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**aiAssignmentsGetAllAssignments_200_response**](../../models/ai-assignments-get-all-assignments-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
