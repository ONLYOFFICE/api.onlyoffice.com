# SetValue

Sets field value

Inherited from [ApiBaseField.SetValue](../../ApiBaseField/Methods/SetValue.md).

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents an [ApiCheckboxField](../ApiCheckboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string |  | The new value for the field. |

## Returns

boolean

## Example

Enter text into a form field in a PDF.

```javascript editor-pdf
// How do I fill in a form field in a PDF?

// Set a text value for a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');
```
