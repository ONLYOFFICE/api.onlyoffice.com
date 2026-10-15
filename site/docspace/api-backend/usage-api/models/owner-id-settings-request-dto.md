# OwnerIdSettingsRequestDto
The portal member named as the new owner of the portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **ownerId** | **UUID** (uuid) | The member who is to become the portal owner, by user ID. They have to be an active member of this portal and not a guest; a member who is not a DocSpace administrator yet is promoted to one as part of the transfer, so the portal needs a paid seat for them. | [required] [example: `00000000-0000-0000-0000-000000000001`] |
