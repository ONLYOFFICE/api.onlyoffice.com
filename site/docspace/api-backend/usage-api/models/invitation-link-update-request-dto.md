# InvitationLinkUpdateRequestDto
The invitation link being changed, with the deadline and use limit it is to have afterwards.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The link to change, by the `id` that creating or reading it returned. The role behind that id cannot be changed here. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **expiration** | **Date** (date-time) | The new deadline, read in the portal time zone. The body is applied as a whole, so leaving it out clears the deadline rather than keeping the current one; a moment in the past is refused. | [optional] [example: `2024-01-15T10:30:00Z`] [nullable] |
| **maxUseCount** | **Integer** (int32) | The new total number of accounts that may join through the link. It may not be lower than the uses already spent, which the link reports as `currentUseCount`, and leaving it out removes the limit rather than keeping the current one. | [optional] [example: `1`] [min: 1] [max: 1000] [nullable] |
