# WhiteLabelItemPathDto
The image URLs of one logo slot, per interface theme.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **light** | **String** | The absolute URL of the image to render on a light background. It is filled in unless the request asked for the dark theme alone with `isDark=true`, in which case only `dark` comes back. | [optional] [example: `/images/logo-light.png`] [nullable] |
| **dark** | **String** | The absolute URL of the image to render on a dark background. When both themes are asked for it comes back empty for a slot that has no separate dark image, meaning the light one is to be used for both; when `isDark=false` was passed it is left out entirely. | [optional] [example: `/images/logo-dark.png`] [nullable] |
