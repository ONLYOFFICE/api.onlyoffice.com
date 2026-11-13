# aiMetaFill

> aiMetaFill_200_response aiMetaFill(AiMetaFillRequest)

`POST /api/2.0/ai/meta/fill`

Fill metadata values

Fills the metadata of one file from its text and writes the result. `kind` names the entry's table and `id` its integer identifier; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note for the model on what to pay attention to, passed as a hint, never as an instruction; `overwrite` (default false) also replaces the fields that already carry a value, otherwise only the empty ones are filled and the rest are reported as `already_set`; `dryRun` (default true) resolves the values but writes nothing, so the caller shows them for confirmation and saves the accepted ones itself; only an explicit `dryRun: false` writes, and it is meant for a caller that has already collected the user's confirmation. The fields are the entry's own: every field of the visible templates it carries, assigned or inherited through a cascade - a hidden template is skipped as the UI and the search skip it - and its existing custom fields - no field is created here, use `POST api/2.0/ai/meta/generate` and the Files metadata API for that. The text is the file itself, converted to plain text under the caller's rights and cut to the same budgets as the generate route. The model bound to `GenerateMeta` (`Default` when that slot is empty) runs once, without tools, and is told to answer null for a value the text does not state. Each value is then checked the way the client's info panel checks a typed value - an integer for a number, a calendar date for a date, one of the field's own options for a choice - and the ones that pass are written with `PUT api/2.0/files/metadata/{kind}/{id}/values` and `.../customFields`, so the caller needs the rights those routes need; a write the portal refuses is reported per field as `write_failed`, and the call fails with the portal's status only when nothing was written at all. The answer carries `dryRun` as it was applied, the entry's metadata after the write (or as it stands, with `dryRun`), the values written or proposed, the fields left empty with the reason for each, and the documents that were read.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiMetaFillRequest** | body | [**AiMetaFillRequest**](../../models/ai-meta-fill-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether it was a dry run, the entry's metadata, the values written or proposed, the fields left empty with the reason for each, and the documents the values were read from. | [**aiMetaFill_200_response**](../../models/ai-meta-fill-200-response.md) | - |
| **400** | `kind` is not `file` (folders and rooms are not accepted for now), `id` is not an integer id, `prompt` is not a string, or `overwrite` / `dryRun` is not a boolean. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **402** | The model provider refused the request for lack of credit; `code` and `providerMessage` carry its own words. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **403** | The caller cannot read the entry, or cannot edit it when the values are written. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The entry does not exist. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **422** | The entry has no metadata fields to fill, or none of its content could be read as text. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **429** | The model provider is rate-limiting requests; `code` and `providerMessage` carry its own words. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **502** | The model request failed; `code` says how and `providerMessage` carries the provider's own words when it gave any. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **503** | No profile is bound to `GenerateMeta` and the `Default` slot is empty too. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **504** | Reading the files or the model round did not finish within the time budget. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |

## Return type

[**aiMetaFill_200_response**](../../models/ai-meta-fill-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
