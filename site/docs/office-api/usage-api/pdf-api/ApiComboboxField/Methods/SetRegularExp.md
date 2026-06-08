# SetRegularExp

Sets regular expression for field.

## Syntax

```javascript
expression.SetRegularExp(regularExpression);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| regularExpression | Required | string |  | The validation regular expression (e.g. "\\S+@\\S+\\.\\S+") |

## Returns

boolean

## Example

Validate field input with a pattern rule in a PDF.

```javascript editor-pdf
// Can I check that data matches a pattern in a PDF?

// Ensure text follows a specific format in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue("example@gmail.com");
```
