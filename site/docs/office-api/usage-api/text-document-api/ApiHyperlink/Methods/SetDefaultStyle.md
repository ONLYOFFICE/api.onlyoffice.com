# SetDefaultStyle

Sets the default hyperlink style.

## Syntax

```javascript
expression.SetDefaultStyle();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Set the default hyperlink style in a document.

```javascript editor-docx
// How to set the default style to the hyperlink in a document.

// Create a hyperlink and apply the default properties to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
paragraph.SetColor(Api.HexColor('#FF6F3D'));
let copyParagraph = paragraph.Copy();
doc.Push(copyParagraph);
let hyperlink = paragraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
let copyHyperlink = copyParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
copyHyperlink.SetDefaultStyle();
```
