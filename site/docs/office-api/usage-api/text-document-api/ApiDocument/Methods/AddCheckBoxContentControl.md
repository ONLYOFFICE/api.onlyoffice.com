# AddCheckBoxContentControl

Adds a new checkbox content control to the document.

## Syntax

```javascript
expression.AddCheckBoxContentControl(checkBoxPr);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkBoxPr | Required | [ContentControlCheckBoxPr](../../Enumeration/ContentControlCheckBoxPr.md) |  | The configuration object for the checkbox. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to add a checkbox content control to a document:

```javascript editor-docx playground
let doc = Api.GetDocument();
doc.AddCheckBoxContentControl({checked : true});
```
