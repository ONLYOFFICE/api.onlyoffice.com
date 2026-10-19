# FolderLinkRequest
The external link of a folder, as it is to be created or rewritten.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **linkId** | **UUID** (uuid) | Which link the request addresses: the identifier of an existing link rewrites that link, while an identifier that is not in use, the empty one included, creates a new link. Take an existing identifier from `GET api/2.0/files/folder/{id}/links`. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **access** | [**FileShare**](file-share.md) | The rights a visitor following the link is given. The value that grants nothing revokes the link instead of setting it, and the answer is then empty. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`] |
| **expirationDate** | [**ApiDateTime**](api-date-time.md) | The moment the link stops working, sent as an ISO-8601 stamp. A moment that lies in the past is ignored, and leaving the field out gives the link no expiry. | [optional] |
| **title** | **String** | The name the link is listed under for the people who manage the folder; a visitor following it never sees the name. | [optional] [example: `Public link`] [minLength: 0] [maxLength: 255] [nullable] |
| **password** | **String** | The secret a visitor has to enter before the link opens. Leave it out for a link that opens without one; the secret itself is never given back, only the fact that one is set. | [optional] [example: `p@ssw0rd`] [minLength: 0] [maxLength: 255] [nullable] |
| **denyDownload** | **Boolean** | Whether visitors are left with viewing alone: with true downloading and copying through the link are blocked, with false they are allowed. | [optional] [example: `false`] |
| **internal** | **Boolean** | Whether the link admits signed-in portal members only: with true a visitor has to sign in before the link opens, with false anyone holding the address may follow it. | [optional] [example: `false`] |
| **primary** | **Boolean** | Whether this link becomes the primary link of the folder, the one the Copy link action of a client hands out; a folder has one primary link at a time. | [optional] [example: `true`] |
