# GetClassType

Returns a type of the ApiPage class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"page"

## Example

This example gets page object class type and displays it in text field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());
```
