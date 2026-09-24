# DisplayRequestDto
The body of a file settings switch that turns something on or makes it visible.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **set** | **Boolean** | The state to store for the setting the operation addresses: true enables it or shows what it governs, false disables or hides it. What exactly is affected, and whether the value belongs to the calling account or to the whole portal, are stated by the operation that binds this body. The portal may store a different value than the one sent when another setting overrides it, so read the answer rather than assuming. | [optional] [example: `true`] |
