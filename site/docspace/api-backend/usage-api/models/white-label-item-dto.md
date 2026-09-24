# WhiteLabelItemDto
One branding logo slot of the portal: the size it is drawn at, and where its images are served from.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**WhiteLabelLogoType**](white-label-logo-type.md) | Which branding slot this entry describes. `Notification` is part of the type but never appears here: that logo is derived from the login-page one and used only in letters. | [optional] [enum: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`] |
| **name** | **String** | The stable name of the same slot, which is what `GET api/2.0/settings/whitelabel/logos/isdefault` keys its entries by. It is a name to match on, not a file name. | [optional] [example: `LightSmall`] [nullable] |
| **size** | [**WhiteLabelItemSizeDto**](white-label-item-size-dto.md) | The pixel box the slot is drawn in. Only `width` and `height` carry information here; the resize flags and offsets alongside them are left at their defaults and say nothing about how an uploaded image is treated. | [optional] |
| **path** | [**WhiteLabelItemPathDto**](white-label-item-path-dto.md) | The absolute URLs to render the slot from, one per theme. | [optional] |
