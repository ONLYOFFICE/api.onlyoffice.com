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

Add a date picker content control to a document: in a document.

```javascript editor-docx
// How to add the date picker content control for a document?

// Add the date picker content control and display the result in a document.

let doc = Api.GetDocument();
doc.AddDatePickerContentControl();
```
