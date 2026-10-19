# RoomInvitationRequest
One batch of membership changes for a room.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **invitations** | [**List**](room-invitation.md) | Who is added, changed or removed, one entry per subject. The same subject named twice keeps the level of the last entry, and an empty list is accepted and changes nothing. | [optional] [example: `[{id=e9a7b4c1-2d3f-4a56-8b90-1c2d3e4f5a6b, access=10}]`] [nullable] |
| **notify** | **Boolean** | Whether the subjects that gained access are told about it by email. With it off the change is silent, which is the usual choice when membership is synchronised from another system. | [optional] [example: `true`] |
| **message** | **String** | The line added to the invitation email. It is used only while the notification is on, and it reaches nobody whose access was removed. | [optional] [example: `Please review the contract by Friday`] [nullable] |
| **culture** | **String** | The language of the invitation email, as a portal culture name such as en-US. Leaving it out sends each message in the language of its recipient. | [optional] [example: `en-US`] [nullable] |
| **force** | **Boolean** | Whether a member who still holds a role in an unfinished form is removed anyway. With it off such a removal is refused and reported through the error of the answer, so the form can be reassigned first. | [optional] [example: `false`] |
