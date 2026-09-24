# StorageRequestsDto
Which storage provider the portal is pointed at, and the credentials it needs.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **module** | **String** | The storage provider to switch to, by the identifier the matching listing operation reports - `default` for the built-in local storage. The provider has to be available on the server, which that listing reports as `isSet`, otherwise the request is refused with 400; sending the module already in use changes nothing. | [required] [example: `default`] [nullable] |
| **props** | [**List**](item-key-value-pair-string-string.md) | The credentials the provider expects, as the name and value pairs it defines - a bucket, a region and an access key for an Amazon S3 storage, for instance. Read the expected names from the entry of that provider in the listing operation; they differ per provider, so there is no fixed set. | [optional] [example: `[item1, item2]`] [nullable] |
