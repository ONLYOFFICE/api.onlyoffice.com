# OrderRequestDto
The position an entry is to take inside its folder.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **order** | **Integer** (int32) | The position the entry is to take, counting from 1. The entry that held it, and everything after it, is shifted to make room. A dotted path such as 1.2.3 is accepted as well, of which only the last segment is read. | [optional] [example: `1`] [min: 1] [max: 2147483647] |
