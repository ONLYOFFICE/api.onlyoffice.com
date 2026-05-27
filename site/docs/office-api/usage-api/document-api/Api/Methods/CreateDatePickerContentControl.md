# CreateDatePickerContentControl

Creates a new date picker content control.

## Syntax

```javascript
expression.CreateDatePickerContentControl(datePickerPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| datePickerPr | Optional | [ContentControlDatePr](../../Enumeration/ContentControlDatePr.md) |  | The optional date picker properties. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Add a date picker field to a document.

```javascript editor-docx
// How do I insert a date picker field into a document?

// Let readers pick a date from a calendar by inserting a date picker control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDatePickerContentControl({format: 'yyyy.mm.dd'});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
