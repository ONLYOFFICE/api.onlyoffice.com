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

Add a date picker content control in a document.

```javascript editor-docx
// How do I insert a date picker field into a document?

// Let readers select a date from a calendar picker embedded in the document.

let doc = Api.GetDocument();
doc.AddDatePickerContentControl();
```
