# TerminateRequestDto
The request parameters that address the queued job of a single user - a data reassignment, a data deletion or a user type change.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **UUID** (uuid) | The ID of the user whose job is addressed. For a terminate operation it has to be the same ID that was passed when the job was started. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
