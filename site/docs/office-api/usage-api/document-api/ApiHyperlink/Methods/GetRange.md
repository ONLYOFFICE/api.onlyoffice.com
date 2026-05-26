# GetRange

Returns a Range object that represents the document part contained in the specified hyperlink.

## Syntax

```javascript
expression.GetRange(Start, End);
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Required | Number |  | Start position index in the current element. |
| End | Required | Number |  | End position index in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Obtain a text range that spans part of a hyperlink in a document.

```javascript editor-docx
// How do I select a portion of a hyperlink as a range in a document?

// Apply bold formatting to a subset of hyperlink characters using a range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let range = hyperlink.GetRange(0, 2);
range.SetBold(true);
```
