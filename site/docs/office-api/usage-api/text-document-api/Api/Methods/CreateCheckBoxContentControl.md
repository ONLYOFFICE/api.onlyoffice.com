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

This example shows how to create a checkbox content control.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateCheckBoxContentControl({checked: true});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
