# ChunkedUploadSessionResponseWrapperInteger
The reserved chunked upload wrapped in the envelope the two older session operations answer with.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | Always true in a body that reaches the caller, because a call that does not succeed answers with an error status and no body at all. It cannot be used to tell a refusal from a success. | [optional] [example: `true`] |
| **data** | [**ChunkedUploadSessionResponseInteger**](chunked-upload-session-response-integer.md) | The reserved upload itself, in the same shape the newer session operations answer with directly. | [optional] |
