# aiAssignmentsAssign request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actionType** | [**AiActionType**](ai-action-type.md) | Action the assignment applies to. | [required] [enum: `Default`, `Chat`, `Code`, `Summarization`, `Translation`, `TextAnalyze`, `ImageGeneration`, `OCR`, `Vision`] |
| **profileId** | **String** | Profile id to bind. | [required] |
