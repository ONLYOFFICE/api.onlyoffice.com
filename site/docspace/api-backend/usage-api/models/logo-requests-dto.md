# LogoRequestsDto
The two theme variants of one branding logo.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **light** | **String** | The image used on a light background, either as a `data:image/png;base64,...` payload - `png`, `jpg` and `svg` are accepted - or as the name of a file already put in the temporary store. | [optional] [example: `data:image/png;base64,iVBORw0KGgoAAAANS...`] [nullable] |
| **dark** | **String** | The image used on a dark background, in the same two forms as `light`. It is only stored for the slots that have a dark variant and is ignored for the favicon and the editor logos. | [optional] [example: `data:image/png;base64,iVBORw0KGgoAAAANS...`] [nullable] |
