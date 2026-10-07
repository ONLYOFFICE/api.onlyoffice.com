# MentionDto
A portal member the editor can offer when the author types a mention: who they are, where the notification goes and how to show them in the suggestion list.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **user** | [**PortalUserDto**](portal-user-dto.md) | The account itself, as the portal stores it. | [optional] |
| **email** | **String** (email) | Where a mention notification for this user is delivered. | [optional] [example: `user@example.com`] [nullable] |
| **id** | **String** | The account id as text, the same value the account object carries; it is what identifies the user in a sharing request built from this list. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **image** | **String** | An absolute address of the medium-sized avatar. A generated default avatar is reported when the user never uploaded one, so the field is never empty. | [optional] [example: `https://portal.example.com/avatar/user_0001.png`] [nullable] |
| **hasAccess** | **Boolean** | Not filled in by the operations that return this list: it always comes back false. Whether a user can already open the document has to be read from the sharing settings of the file. | [optional] [example: `false`] |
| **name** | **String** | The name to display, assembled the way the portal is configured to show names. | [optional] [example: `John Doe`] [nullable] |
