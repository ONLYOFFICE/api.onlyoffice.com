# CreateTextField

Creates a text field.

## Syntax

```javascript
expression.CreateTextField(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiTextField](../../ApiTextField/ApiTextField.md)

## Example

Add a text field to a page in a PDF.

```javascript editor-pdf
// How do I add a text field to a PDF?

// Create a text field, insert it into a page, and set its value in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('This is the text field');
```
