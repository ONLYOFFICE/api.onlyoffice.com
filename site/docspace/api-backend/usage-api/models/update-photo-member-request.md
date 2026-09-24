# UpdatePhotoMemberRequest
The request parameters for updating a photo.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **files** | **String** | The address the portal downloads the new avatar from. It has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came over HTTP; an address the portal refuses to fetch is rejected. It is required - an empty value is answered with 400 rather than clearing the avatar. | [optional] [example: `https://example.com/avatar.jpg`] [nullable] |
