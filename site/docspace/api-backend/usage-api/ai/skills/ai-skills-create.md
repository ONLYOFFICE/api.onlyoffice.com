# aiSkillsCreate

> aiSkillsCreate_200_response aiSkillsCreate(AiSkillsCreateRequest)

`POST /api/2.0/ai/skills/create`

Create a skill from the template

Creates a new skill in an Instructions room from the skill template and saves it as `<title>.md`; no model is involved. `destId` is the integer id of the Instructions room, checked before anything is written: the caller has to be able to create files in it, and any other folder answers 400. `title` is the file's title, at most 165 characters, without the extension (a trailing `.md` is dropped), and has to hold a letter or a digit: the skill's `name` is derived from it as in `POST api/2.0/ai/skills/generate`, and its `description` starts as the title itself. The body is a skeleton of the sections a skill is made of, for the user to fill in. The file is saved through `POST api/2.0/files/{folderId}/insert`, so the Files service validates the frontmatter and the room's limits, and a title already taken in the room gets a numbered one. The answer carries the ID and the title of the new file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiSkillsCreateRequest** | body | [**AiSkillsCreateRequest**](../../models/ai-skills-create-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The ID and the title of the new skill file. | [**aiSkillsCreate_200_response**](../../models/ai-skills-create-200-response.md) | - |
| **400** | `destId` is not an integer id, `title` is missing, too long or has no letter or digit, or the folder is not an Instructions room. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | The caller cannot create files in the room. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The room does not exist. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**aiSkillsCreate_200_response**](../../models/ai-skills-create-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
