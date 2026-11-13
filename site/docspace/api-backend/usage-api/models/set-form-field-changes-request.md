# SetFormFieldChangesRequest
The field keys the user changed in the editor.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **version** | **Integer** (int32) | The version of the form the editor opened; the old keys are the keys of that version. | [optional] [example: `3`] [min: 1] [max: 2147483647] |
| **sequence** | **Long** (int64) | The number of this report within the editor session, growing with each one, such as the time it was taken in milliseconds. | [optional] [example: `1762250000000`] [min: 0] [max: 9223372036854776000] |
| **sessionId** | **String** | The editor session the report comes from: an id the editor makes up once each time it opens the form, such as a GUID, of letters, digits, hyphens and underscores. | [optional] [example: `8f14e45f-ceea-4e7a-9a3b-1c2d3e4f5a6b`] [minLength: 0] [maxLength: 64] [pattern: `/^[A-Za-z0-9_-]+$/`] [nullable] |
| **renames** | [**List**](form-field-key-change-request.md) | Every field whose key the user changed since the editor opened the form, told apart by the field id the editor keeps, with the key it had in the opened version and the key it has now; empty when no key changed. | [required] [example: `[{oldKey=fromWhom, newKey=applicantName}]`] |
