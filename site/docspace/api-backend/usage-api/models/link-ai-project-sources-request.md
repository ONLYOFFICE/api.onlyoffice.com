# LinkAiProjectSourcesRequest
Rooms to link to the AI project.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomIds** | **Set** (int32) | IDs of the Instructions and Knowledge rooms to link. Each must be an active room the caller can read; rooms already linked are skipped. | [required] [example: `[17001, 17020]`] [nullable] |
