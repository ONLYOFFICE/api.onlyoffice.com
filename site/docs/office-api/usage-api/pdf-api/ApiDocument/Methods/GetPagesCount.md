# GetPagesCount

Gets document pages count

## Syntax

```javascript
expression.GetPagesCount();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets document pages count and displays it in text field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetPagesCount());
```
