# CreateTextField

Creates a text field.

## Syntax

```javascript
expression.CreateTextField(aRect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aRect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiTextField](../../ApiTextField/ApiTextField.md)

## Example

How to create and add a text field to document.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('This is the text field');
```
