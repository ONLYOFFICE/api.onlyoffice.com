# CreateCheckBoxContentControl

Creates a checkbox content control.

## Syntax

```javascript
expression.CreateCheckBoxContentControl(checkBoxPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkBoxPr | Required | [ContentControlCheckBoxPr](../../Enumeration/ContentControlCheckBoxPr.md) |  | The configuration object with the checkbox properties. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Create a checkbox content control in a document.

```javascript editor-docx
// How can I create the check box content control in a document?

// Create the check box content control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateCheckBoxContentControl({checked: true});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
