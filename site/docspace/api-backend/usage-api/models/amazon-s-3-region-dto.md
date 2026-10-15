# AmazonS3RegionDto
An Amazon S3 region.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **systemName** | **String** | The region code to send as the region value when configuring an Amazon S3 storage or backup target. It is the one field of this object that is an argument elsewhere; a code the server does not list here cannot be reached, so pick one from this list rather than typing it. | [optional] [example: `eu-west-1`] [nullable] |
| **displayName** | **String** | The region name as Amazon writes it, in English regardless of the portal language, for showing in a picker next to `systemName`. | [optional] [example: `Europe (Ireland)`] [nullable] |
| **partitionName** | **String** | The Amazon partition the region sits in - the ordinary commercial cloud, the Chinese one, or a government one. Regions of different partitions are not reachable with the same credentials. | [optional] [example: `aws`] [nullable] |
| **partitionDnsSuffix** | **String** | The domain the partition's service host names end in, which differs from partition to partition. | [optional] [example: `amazonaws.com`] [nullable] |
| **partitionRegionRegex** | **String** | The pattern every region code of this partition matches, for validating a code before sending it. | [optional] [example: `^(us\|eu\|ap\|sa\|ca\|me\|af\|il\|mx)\-\w+\-\d+$`] [nullable] |
| **hostnameTemplate** | **String** | How a service host name of the partition is assembled, with `{service}`, `{region}` and `{dnsSuffix}` to be filled in. It is reference material - the portal builds its own endpoints from `systemName`. | [optional] [example: `{service}.{region}.{dnsSuffix}`] [nullable] |
