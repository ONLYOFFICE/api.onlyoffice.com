# CaptionSep

Possible values for the caption separator.\
-**"hyphen"** - the "-" punctuation mark.\
-**"period"** - the "." punctuation mark.\
-**"colon"** - the ":" punctuation mark.\
-**"longDash"** - the "—" punctuation mark.\
-**"dash"** - the "-" punctuation mark.

## Type

Enumeration

## Values

- "hyphen"
- "period"
- "colon"
- "longDash"
- "dash"


## Example

This example add a caption with a hyphen as a numbering separator to the paragraph.

```javascript editor-docx
// How to create a caption indicating the type of a numbering separator.

// Create a caption specifying its bullet type for numbering paragraphs.

paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
