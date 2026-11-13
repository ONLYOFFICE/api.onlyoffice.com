# AiAttachment
Persistent record for a single attachment (file or image) referenced from a user message. Files carry extracted text in `content`; images carry base64 data in `base64`. Metadata (`title`, `path`, `type`) is always present for display purposes regardless of whether the heavy payload is loaded.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Storage-assigned UUID. | [required] [example: `55555555-5555-5555-5555-555555555555`] |
| **kind** | **String** | file \| image. | [required] [example: `file`] [enum: `file`, `image`] |
| **source** | **String** | Where the attachment came from: `user` - attached by the user (also when unset); `tool` - produced by a tool call (for example `generate_image`). | [optional] [example: `user`] [enum: `user`, `tool`] |
| **title** | **String** | Display label (filename or user-visible title). | [required] [example: `contract.docx`] |
| **content** | **String** | Extracted text for files. | [optional] [example: `This agreement is made on 1 January 2026 between …`] |
| **base64** | **String** | Base64 data URL for images. | [optional] |
| **path** | **String** | Original host file path (for files). | [optional] [example: `file_1234`] |
| **type** | **BigDecimal** | ONLYOFFICE file type code (for files). | [optional] [example: `7`] |
| **messageId** | **String** | Owning message id once linked. Unset while the attachment is a draft. | [optional] [example: `22222222-2222-2222-2222-222222222222`] |
| **threadId** | **String** | Owning thread id once linked. Unset while the attachment is a draft. | [optional] [example: `11111111-1111-1111-1111-111111111111`] |
| **entityId** | **String** | The room or folder the attachment was created in, as an opaque token; once the attachment is bound to a message it repeats the thread's own scope. | [optional] [example: `1234`] |
| **createdAt** | **BigDecimal** | Storage-assigned creation timestamp. | [required] [example: `1767225600000`] |
| **canAnalyze** | **Boolean** | Whether the attached form can be analyzed. | [optional] [example: `false`] |
| **formKeys** | [**List**](ai-attachment-form-keys-item.md) | Keys of the fields inside the form. `key` is the field identifier, `text` its human-readable label. | [optional] [example: `[]`] |
