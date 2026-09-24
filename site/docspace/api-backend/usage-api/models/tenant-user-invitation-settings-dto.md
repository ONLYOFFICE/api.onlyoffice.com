# TenantUserInvitationSettingsDto
Whether the portal currently lets anyone be invited into it, member and guest kept apart.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **allowInvitingMembers** | **Boolean** | Whether new members may be invited through the Contacts section. Switching it off stops new invitations from being created; links already handed out keep working and members already invited stay. | [required] [example: `true`] |
| **allowInvitingGuests** | **Boolean** | Whether every member, and not only an administrator, may invite an outside guest into a room. It is independent of `allowInvitingMembers`, and switching it off has the same forward-only effect. | [required] [example: `false`] |
