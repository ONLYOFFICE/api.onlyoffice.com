# GetCharLimit

Gets text field chars limit.\
&lt;note&gt; Char limit 0 means field doesn't have char limit

## Syntax

```javascript
expression.GetCharLimit();
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets text field and displays char limit property.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());

```
