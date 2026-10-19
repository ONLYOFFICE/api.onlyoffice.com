# FileShareLink
A sharing link of a file, a folder or a room, with everything set on it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The identifier of the link, the one to send back as `linkId` to change or delete it. | [optional] [example: `9a2c1b3e-6d47-4f10-9b52-ac7d3e5f0812`] |
| **title** | **String** | The name the link is listed under, which its author is free to choose and to leave empty. | [optional] [example: `Shared document`] [nullable] |
| **shareLink** | **String** | The shortened address to hand out. Opening it is what turns the link into access; the address stays the same while the link exists. | [optional] [example: `https://portal.example.com/s/a1b2c3d4`] [nullable] |
| **expirationDate** | [**ApiDateTime**](api-date-time.md) | The moment the link stops working, written with the offset of the portal time zone. Null when the link was left without an end. | [optional] |
| **linkType** | [**LinkType**](link-type.md) | Which of the two jobs the link does: letting somebody into the room as a member, or handing out the entry itself. The counters of uses are filled in for the first kind only. | [optional] [enum: `0`, `1`] |
| **password** | **String** | The password a visitor has to send before the link resolves, readable only by those who may manage the link. Empty when the link asks for none. | [optional] [example: `S3cretPhrase`] [nullable] |
| **denyDownload** | **Boolean** | Whether visitors coming through this link may only read the entry in the editor and not download or print it. | [optional] [example: `false`] [nullable] |
| **isExpired** | **Boolean** | Whether the moment in `expirationDate` has already passed, which leaves the link in place but refuses everybody who opens it. | [optional] [example: `false`] [nullable] |
| **primary** | **Boolean** | Whether this is the one link the entry always keeps: a public or a form-filling room is given it at creation, and deleting it there only makes a new one. | [optional] [example: `true`] |
| **internal** | **Boolean** | Whether the visitor has to sign in to the portal before the link resolves, as opposed to it being open to anybody who has the address. | [optional] [example: `false`] [nullable] |
| **requestToken** | **String** | The key that stands for this link in the calls that resolve it, such as `GET api/2.0/files/share/{key}`. It is filled in for links that hand out the entry, and empty for the ones that invite into a room. | [optional] [example: `gg9J4mBW7pW9Wk0HqQoQ9L2mS1x6bK8vTnQ0aZ3`] [nullable] |
| **maxUseCount** | **Integer** (int32) | How many accounts may still join the room through this invitation link in total. Null on a link that hands out the entry, where nothing is counted. | [optional] [example: `10`] [nullable] |
| **currentUseCount** | **Integer** (int32) | How many accounts have already joined through this invitation link. Once it reaches `maxUseCount` the link stops letting anybody else in. Null on a link that hands out the entry. | [optional] [example: `5`] [nullable] |
