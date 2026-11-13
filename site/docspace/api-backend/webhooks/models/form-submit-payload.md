# FormSubmitPayload
The pair of files carried by a form.submit webhook.  The only payload that wraps two entries rather than being one, and the only one whose `webhook.target.id` refers to a different entity, the original form, than the file that changed. form.filled.out and form.stopped do not use this shape; they carry a single file.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **originalForm** | [**FilePayload**](file-payload.md) |  | [optional] |
| **submittedForm** | [**FilePayload**](file-payload.md) |  | [optional] |
