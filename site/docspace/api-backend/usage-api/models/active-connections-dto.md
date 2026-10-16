# ActiveConnectionsDto
The connections the calling user currently has open, and which of them the request itself was made with.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **loginEvent** | **Integer** (int32) | The `id` of the item in `items` that the current request is authenticated by. It is `0` when the request carried a token in the `Authorization` header instead of the portal cookie, and in that case none of the items is the current connection. | [required] [example: `1`] |
| **items** | [**List**](active-connections-item-dto.md) | One item per sign-in of the caller that is still active, ordered newest sign-in first, with the connection the request itself uses moved to the front. Sign-ins older than a year are left out, and a caller with no stored connection gets a single item describing the current request rather than an empty list. | [optional] [example: `[{id=1234, ip=192.0.2.1}]`] [nullable] |
