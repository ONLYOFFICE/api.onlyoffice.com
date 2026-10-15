# AiPrompt
Saved prompt template that users can quickly insert into the chat.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Unique prompt identifier (UUID). | [required] [example: `33333333-3333-3333-3333-333333333333`] |
| **name** | **String** | Prompt display name shown in the prompt picker. | [required] [example: `Contract summary`] |
| **text** | **String** | Prompt template text. May contain placeholder tokens. | [required] [example: `Summarise the key obligations and dates in the attached contract.`] |
| **folderId** | **String** | Optional parent folder ID. `undefined` means the prompt is at the root level. | [optional] [example: `44444444-4444-4444-4444-444444444444`] |
| **createdAt** | **BigDecimal** | Timestamp (ms since epoch) when the prompt was created. | [required] [example: `1767225600000`] |
| **updatedAt** | **BigDecimal** | Timestamp (ms since epoch) of the last prompt modification. | [required] [example: `1767225600000`] |
