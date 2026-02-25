# CreateComboboxField

Creates a combobox field.

## Syntax

```javascript
expression.CreateComboboxField(aRect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aRect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiComboboxField](../../ApiComboboxField/ApiComboboxField.md)

## Example

How to create and add a combobox field to document.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let comboboxField = Api.CreateComboboxField([10, 10, 160, 32]);
page.AddObject(comboboxField);
comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
```
