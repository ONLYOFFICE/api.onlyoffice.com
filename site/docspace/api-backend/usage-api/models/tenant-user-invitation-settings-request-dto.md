# TenantUserInvitationSettingsRequestDto
Whether the portal still lets its members invite new members and new guests.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **allowInvitingMembers** | **Boolean** | Whether new DocSpace members may be invited through the Contacts section. Switching it off only stops new invitations being created; links already issued keep working and members already invited stay. | [optional] [example: `true`] |
| **allowInvitingGuests** | **Boolean** | Whether every DocSpace member, and not only an administrator, may invite external guests into rooms. Switching it off leaves the guests already invited in place. | [optional] [example: `false`] |
