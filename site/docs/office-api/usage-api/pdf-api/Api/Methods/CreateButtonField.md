# CreateButtonField

Creates a button field.

## Syntax

```javascript
expression.CreateButtonField(rect);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiButtonField](../../ApiButtonField/ApiButtonField.md)

## Example

How to create and add a button field to document.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLabel("Click me");
```
