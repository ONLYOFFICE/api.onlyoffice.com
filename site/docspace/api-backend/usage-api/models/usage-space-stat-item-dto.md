# UsageSpaceStatItemDto
The storage one category of a portal module occupies, in the form a statistics page prints it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The category name in the portal language, HTML-escaped and ready to be rendered as text. What a category stands for depends on the module asked about - for the Documents module it is a room type. | [optional] [example: `Collaboration rooms`] [nullable] |
| **icon** | **String** | The path of the icon to render beside the name, relative to the portal address. It is empty for a category that ships no icon. | [optional] [example: `/images/icons/rooms.svg`] [nullable] |
| **disabled** | **Boolean** | Whether the category is switched off for this portal. A disabled category still reports the space it occupies, so it is worth showing greyed out rather than dropping. | [optional] [example: `true`] |
| **size** | **String** | The occupied space already formatted for display, with its unit and in the portal language - `0 Byte` for an empty category. It is not a byte count and must not be parsed; the raw numbers live in the quota reported by `GET api/2.0/portal/quota`. | [optional] [example: `1.5 GB`] [nullable] |
| **url** | **String** | The portal page that lists the contents of this category, relative to the portal address, so a statistics page can link through to it. It is empty for a category with no page of its own. | [optional] [example: `/rooms/shared`] [nullable] |
