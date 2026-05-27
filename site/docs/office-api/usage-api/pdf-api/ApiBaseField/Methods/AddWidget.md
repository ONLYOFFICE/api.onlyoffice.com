# AddWidget

Adds new widget - visual representation for field

## Syntax

```javascript
expression.AddWidget(pageIndex, rect);
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pageIndex | Required | number |  | page index to add widget |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | field rect |

## Returns

[ApiWidget](../../Enumeration/ApiWidget.md)

## Example

Add a visual representation for a form field in a PDF.

```javascript editor-pdf
// How do I create a visual instance of a form field in a PDF?

// Display a form field's widget at a specific location in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
```
