# AiCreatePromptInput
Input for creating a prompt — the engine generates `id`/`createdAt`/`updatedAt`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The prompt name. | [required] [example: `Contract summary`] |
| **text** | **String** | The prompt body. | [required] [example: `Summarise the key obligations and dates in the attached contract.`] |
| **folderId** | **String** | The folder to file the prompt under. Omit or send null to leave it outside any folder. | [optional] [example: `44444444-4444-4444-4444-444444444444`] [nullable] |
