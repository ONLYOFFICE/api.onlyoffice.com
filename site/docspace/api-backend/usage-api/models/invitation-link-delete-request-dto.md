# InvitationLinkDeleteRequestDto
Which invitation link is withdrawn.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The link to delete, by the `id` that creating or reading it returned. A link recreated for the same role afterwards gets a new id, a new URL and a use count starting from zero. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
