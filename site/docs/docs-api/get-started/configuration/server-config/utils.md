---
sidebar_position: 38
---

# Utils

These parameters define the utils configuration.

## services.CoAuthoring.utils.limits_image_types_upload

`Type: string`   `Default: "jpg;jpeg;jpe;png;gif;bmp;svg;tiff;tif;webp;heic;heif;avif"`

Defines the supported image formats for uploading.

## services.CoAuthoring.utils.utils_common_fontdir

`Type: string`   `Default: "null"`

Defines a directory where all the fonts are stored.

## services.CoAuthoring.utils.utils_fonts_search_patterns

`Type: string`   `Default: "*.ttf;*.ttc;*.otf"`

Defines the patterns for searching font files of the corresponding extensions.

## services.CoAuthoring.utils.limits_document_types_upload

`Type: string`   `Default: "xlsx"`

Semicolon-separated list of document file extensions allowed for upload. Only files matching these extensions are accepted.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "utils": {
        "utils_common_fontdir": "null",
        "utils_fonts_search_patterns": "*.ttf;*.ttc;*.otf",
        "limits_image_types_upload": "jpg;jpeg;jpe;png;gif;bmp;svg;tiff;tif;webp;heic;heif;avif",
        "limits_document_types_upload": "xlsx"
      }
    }
  }
}
```

