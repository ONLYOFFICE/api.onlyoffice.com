# SetManagerRequest
The request for setting a group manager.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **UUID** (uuid) | The account to make the manager. It has to exist, otherwise the operation answers 404, and it is added to the group at the same time, so it does not have to be a member beforehand. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
