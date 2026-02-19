# SetMask

Sets mask for entered text for field.

## Syntax

```javascript
expression.SetMask(sMask);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sMask | Required | string |  | field mask (e.g. "(999)999-9999") |

## Returns

boolean

## Example

This example gets text field and sets mask for entered text for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMask("(999)999-9999");
textField.SetValue("(123)456-7890");

```
