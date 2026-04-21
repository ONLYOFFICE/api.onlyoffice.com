# GetRect

Sets field rect.

## Syntax

```javascript
expression.GetRect();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Rect](../../Enumeration/Rect.md)

## Example

Create a new field and get rect of its widget in a PDF document.

```javascript editor-pdf
// How to get the rect for a widget in a PDF document?

// Get the rect and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Annotation rect is: ${widgets[0].GetRect()}`);
```
