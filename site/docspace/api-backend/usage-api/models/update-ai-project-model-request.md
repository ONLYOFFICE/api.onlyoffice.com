# UpdateAiProjectModelRequest
The AI model to set for the AI project.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **UUID** (uuid) | ID of the AI model profile that answers in the project's chat; take it from the `id` of a profile that `GET api/2.0/ai/profiles/list` returns. | [required] [example: `0198c3f4-6a2e-7c41-9b8d-2f5e7a1c3d90`] |
