# MentionMessageWrapper
The mention notification to send: what to say, whom to tell and where in the document the mention sits.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actionLink** | [**ActionLinkConfig**](action-link-config.md) | The place in the document the notification link should open at, as the editor reports it when the mention is made. Left out, the link opens the file at its beginning. | [optional] |
| **emails** | **List** | The addresses to notify. Only an address that belongs to a portal account receives a mail; an unknown address is skipped, and the answer then carries the access list of the file so that the client can invite its owner. | [optional] [example: `[user1@example.com, user2@example.com]`] [nullable] |
| **message** | **String** | The note shown next to the link in the mail. Only its first 200 characters are sent, and a value longer than the field allows is refused. | [optional] [example: `Please take a look at the second paragraph`] [minLength: 0] [maxLength: 255] [nullable] |
