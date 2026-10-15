# UserInvitation
Which pending room invitations are to be sent again.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **usersIds** | **List** (uuid) | The accounts to write to, taken from `GET api/2.0/files/rooms/{id}/share`. Anyone who has already joined, is not in the room, or is invisible to the caller is skipped without an error, and the field is ignored once every pending invitation is being resent. | [optional] [example: `[e9a7b4c1-2d3f-4a56-8b90-1c2d3e4f5a6b]`] [nullable] |
| **resendAll** | **Boolean** | Whether every invitation of the room that is still waiting is sent again. With it on the list of accounts is ignored, and with it off an empty list means that nothing is sent at all. | [optional] [example: `false`] |
