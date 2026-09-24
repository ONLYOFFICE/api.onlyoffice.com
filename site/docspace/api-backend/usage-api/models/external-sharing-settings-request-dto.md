# ExternalSharingSettingsRequestDto
The complete external sharing policy of the portal. Every field is written, so an omitted one is stored as false.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **externalShare** | **Boolean** | Whether links that open a file or a room without a portal account may be created at all. This is the master switch of the policy: while it is false the portal keeps the default link type internal, turns sharing on social networks off, and applies the three restriction fields below. | [optional] [example: `true`] |
| **defaultShareLinkInternal** | **Boolean** | The kind of link offered first when a new one is created: true offers a link only accounts of this portal can open, false one that anyone holding it can open. The portal keeps it at true while external sharing is switched off. | [optional] [example: `false`] |
| **externalShareApplyToDocuments** | **Boolean** | Whether the restriction reaches personal documents: with true, no external link can be created for an entry in the caller's own documents while external sharing is off. It has no effect while external sharing is allowed. | [optional] [example: `true`] |
| **externalShareApplyToRooms** | **Boolean** | Whether the restriction reaches rooms: with true, no external link can be created for a room or its content while external sharing is off, and a new room cannot be made public. It has no effect while external sharing is allowed. | [optional] [example: `true`] |
| **blockExistingLinksOnRestrict** | **Boolean** | What happens to the links that already exist once external sharing is switched off: with true they stop opening for the sections named above, with false they keep working and only new ones are refused. This is the field that changes access to data that is already shared. | [optional] [example: `true`] |
