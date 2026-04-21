# GetDefaultStyle

Returns the default style parameters for the specified document element.

## Syntax

```javascript
expression.GetDefaultStyle(sStyleType);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleType | Required | [StyleType](../../Enumeration/StyleType.md) |  | The document element which we want to get the style for. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

Get the default style parameters for the specified document element in a document.

```javascript editor-docx
// How to get default style of a document element indicating its name.

// Update the default style of the paragraph element in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
let normalStyle = doc.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
paragraph.AddText("This is just a text.");
```
