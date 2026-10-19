# ExternalShareRequestParam
The password that unlocks a protected external share link.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **password** | **String** | The password chosen by the member who shared the entry, spelled exactly as they typed it. It is compared against the stored value and never returned back; a mismatch is reported through the answer's status instead of an error. | [optional] [example: `p@ssw0rd`] [nullable] |
