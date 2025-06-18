# AddDatePickerContentControl

Adds a new date picker content control to the document.

## Syntax

```javascript
expression.AddDatePickerContentControl(datePickerPr);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| datePickerPr | Optional | [ContentControlDatePr](../../Enumeration/ContentControlDatePr.md) |  | The optional date picker properties. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to add a date picker content control to a document:

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddDatePickerContentControl();
```
