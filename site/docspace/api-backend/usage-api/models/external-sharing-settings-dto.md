# ExternalSharingSettingsDto
The external sharing policy of the portal as it now stands.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **externalShare** | **Boolean** | Whether links that open a file or a room without a portal account may be created. While it is false the portal also reports sharing on social networks as off and the default link type as internal, whatever was asked for. | [optional] [example: `true`] |
| **defaultShareLinkInternal** | **Boolean** | The kind of link the portal offers first: true means a link only accounts of this portal can open, false one that anyone holding it can open. | [optional] [example: `false`] |
| **externalShareApplyToDocuments** | **Boolean** | Whether the restriction covers personal documents. It only has an effect while external sharing is off, so a true here with sharing allowed restricts nothing. | [optional] [example: `true`] |
| **externalShareApplyToRooms** | **Boolean** | Whether the restriction covers rooms, including the creation of new public ones. It only has an effect while external sharing is off. | [optional] [example: `true`] |
| **blockExistingLinksOnRestrict** | **Boolean** | Whether links created before the restriction stop opening as well. With false they keep working and only new ones are refused. | [optional] [example: `true`] |
