# SetRegularExp

Sets regular expression validate string for field.

## Syntax

```javascript
expression.SetRegularExp(sReg);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReg | Required | string |  | field regular expression (e.g. "\\S+@\\S+\\.\\S+") |

## Returns

boolean

## Example

Get text field and set regular expression validate for it in a PDF document.

```javascript editor-pdf
// How can I set regular exp using a text field in a PDF document?

// Set regular exp for a text field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRegularExp("\\S+@\\S+\\.\\S+");
textField.SetValue("example@gmail.com");
```
