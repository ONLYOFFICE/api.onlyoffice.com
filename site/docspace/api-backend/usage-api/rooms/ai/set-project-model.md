# setProjectModel

> AiProjectModelWrapper setProjectModel(id, UpdateAiProjectModelRequest)

`PUT /api/2.0/files/rooms/{id}/model`

Set the AI project model

Selects the AI model that answers in the chat of an AI project. The new choice replaces the previous one for every project member. Requires the right to manage the project. Other callers get 403, including members with read access only. The call changes data, and you can repeat it with the same body. No call clears the selection and returns the project to the portal-wide model. The call returns 400 for an invalid body or an unknown `profileId`. It also returns 400 if the profile serves only other tasks, such as image generation. If the ID is not an AI project, the call returns 404. AI features turned off on the portal also return 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | ID of the project. | [required] [example: `1`] |
| **UpdateAiProjectModelRequest** | body | [**UpdateAiProjectModelRequest**](../../models/update-ai-project-model-request.md) | The model to set. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The AI model profile now selected for the project | [**AiProjectModelWrapper**](../../models/ai-project-model-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `profileId`, the portal has no AI model profile with this id, or the profile cannot be used for chat | - | - |
| **403** | The caller may not edit the project, or the AI features are turned off on the portal | - | - |
| **404** | No AI project has this id | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AiProjectModelWrapper**](../../models/ai-project-model-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
