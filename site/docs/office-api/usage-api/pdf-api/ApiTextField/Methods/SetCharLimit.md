# SetCharLimit

Sets text field chars limit.\
&lt;note&gt; Char limit 0 means field doesn't have char limit

## Syntax

```javascript
expression.SetCharLimit(nChars);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nChars | Required | number |  | chars limit number |

## Returns

boolean

## Example

This example adds text field and sets char limit for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());

```
