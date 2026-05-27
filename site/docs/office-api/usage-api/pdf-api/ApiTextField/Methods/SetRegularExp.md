# SetRegularExp

Sets regular expression validate string for field.

## Syntax

```javascript
expression.SetRegularExp(regularExpression);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| regularExpression | Required | string |  | The validation regular expression (e.g. "\\S+@\\S+\\.\\S+") |

## Returns

boolean

## Example

Validate text entries using pattern matching rules in a PDF text field.

```javascript editor-pdf
// How do I check that users enter valid email addresses or specific formats in a PDF?

// Apply validation rules to ensure text matches a required pattern in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRegularExp("\\S+@\\S+\\.\\S+");
textField.SetValue("example@gmail.com");
```
