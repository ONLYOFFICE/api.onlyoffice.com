# SetPartialName

Sets new field partial name.

Inherited from [ApiBaseField.SetPartialName](../../ApiBaseField/Methods/SetPartialName.md).

## Syntax

```javascript
expression.SetPartialName(name);
```

`expression` - A variable that represents an [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The new partial name for the field. |

## Returns

boolean

## Example

Assign a local name to a form field in a PDF.

```javascript editor-pdf
// How do I set the local name for a form field in a PDF?

// Define the partial name property of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
