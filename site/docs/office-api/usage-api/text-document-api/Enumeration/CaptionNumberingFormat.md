# CaptionNumberingFormat

Possible values for the caption numbering format.\
-**"ALPHABETIC"** - upper letter.\
-**"alphabetic"** - lower letter.\
-**"Roman"** - upper Roman.\
-**"roman"** - lower Roman.\
-**"Arabic"** - arabic.

## Type

Enumeration

## Values

- "ALPHABETIC"
- "alphabetic"
- "Roman"
- "roman"
- "Arabic"


## Example

This example add a caption with the Arabic numbering format to the paragraph.

```javascript editor-docx
// How to add a caption to the paragraph specifying numbering format.

// Add a text caption with parameters to the ApiParagraph object and indicate its numbering format.

paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
