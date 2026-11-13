# aiSkillsGenerate

> aiSkillsGenerate_200_response aiSkillsGenerate(AiSkillsGenerateRequest)

`POST /api/2.0/ai/skills/generate`

Generate a skill

Writes the text of one skill from a title and the caller's description of the skill they need, for an Instructions room, without saving it: the caller shows the text for review and saves the version the user accepts as `<name>.md` through `POST api/2.0/files/{folderId}/insert`, where the Files service validates the frontmatter. `destId` is the integer id of the Instructions room, checked before the model runs: the caller has to be able to create files in it, and any other folder answers 400. `title` becomes the skill's `name`: it is lower-cased and every run of characters other than letters and digits is folded into one hyphen, so `Sales report` becomes `sales-report`. `description` is a specification of the skill, passed to the model as data, never as an instruction. The model bound to the `Chat` action - the `Default` slot when that action has no profile of its own - runs once, without tools, and writes the description and the body; the frontmatter is then rebuilt here, with the description flattened to one line, stripped of tags and cut to 1 024 characters, so the text as returned always passes the Files service's skill validation. The answer carries the skill's name and the whole file, frontmatter included.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiSkillsGenerateRequest** | body | [**AiSkillsGenerateRequest**](../../models/ai-skills-generate-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The skill's name and the whole Markdown file, frontmatter included; nothing is saved. | [**aiSkillsGenerate_200_response**](../../models/ai-skills-generate-200-response.md) | - |
| **400** | `destId` is not an integer id, `title` or `description` is missing or too long, `title` has no letter or digit, or the folder is not an Instructions room. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **402** | The model provider refused the request for lack of credit; `code` and `providerMessage` carry its own words. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **403** | The caller cannot create files in the room. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The room does not exist. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **429** | The model provider is rate-limiting requests; `code` and `providerMessage` carry its own words. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **502** | The model request failed or returned an empty skill; `code` says how. `providerMessage` carries the provider's own words only for the portal's spending limit; other failures, an authentication one among them, leave it out. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **503** | No profile is bound to `Chat` and the `Default` slot is empty too. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **504** | The model round did not finish within the time budget. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |

## Return type

[**aiSkillsGenerate_200_response**](../../models/ai-skills-generate-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
