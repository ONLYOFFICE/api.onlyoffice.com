# SettingsRequestDto
The body of a file settings switch: a single flag carrying the state to store.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **set** | **Boolean** | The state to store for the setting the operation addresses: true switches it on, false switches it off. The flag carries no meaning of its own - what is switched, who is allowed to switch it, and whether the value belongs to the calling account or to the whole portal are stated by the operation that binds this body. The answer repeats the value the portal read back afterwards, which is not always the one that was sent. | [optional] [example: `true`] |
