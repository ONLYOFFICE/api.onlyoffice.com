# MentionWrapper
A user the editor may offer: to be mentioned in a comment, or to be picked when protecting a document.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **user** | [**UserInfo**](user-info.md) | The account itself, in the shape the people listings use. | [optional] |
| **email** | **String** (email) | Where a mention notification for this user is delivered. | [optional] [example: `user@example.com`] [nullable] |
| **id** | **String** | The account id as text, the same value the account object carries; it is what identifies the user in a sharing request built from this list. | [optional] [example: `user_0001`] [nullable] |
| **image** | **String** | An absolute address of the medium-sized avatar. A generated default avatar is reported when the user never uploaded one, so the field is never empty. | [optional] [example: `https://portal.example.com/avatar/user_0001.png`] [nullable] |
| **hasAccess** | **Boolean** | Not filled in by the operations that return this list: it always comes back false. Whether a user can already open the document has to be read from the sharing settings of the file. | [optional] [example: `true`] |
| **name** | **String** | The name to display, assembled the way the portal is configured to show names. | [optional] [example: `John Doe`] [nullable] |
