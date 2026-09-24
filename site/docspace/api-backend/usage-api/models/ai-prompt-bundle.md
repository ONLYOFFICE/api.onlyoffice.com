# AiPromptBundle
Versioned, self-contained bundle of every saved prompt and folder. Stable wire format — `version` lets the import path migrate older shapes if the schema ever changes.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **version** | **BigDecimal** | The bundle format version, so an import can migrate an older export. | [required] [example: `1`] [enum: `1`] |
| **folders** | [**List**](ai-prompt-folder.md) | Every exported prompt folder. | [required] [example: `[]`] |
| **prompts** | [**List**](ai-prompt.md) | Every exported prompt. | [required] [example: `[]`] |
