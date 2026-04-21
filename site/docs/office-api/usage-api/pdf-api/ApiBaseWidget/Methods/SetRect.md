# SetRect

Sets field rect.

## Syntax

```javascript
expression.SetRect(rect);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | No description provided. |

## Returns

boolean

## Example

Create a new field and set new rect to its widget in a PDF document.

```javascript editor-pdf
// How do I set rect in a PDF document?

// Set rect using a widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetRect([30, 30, 160, 60]);
```
