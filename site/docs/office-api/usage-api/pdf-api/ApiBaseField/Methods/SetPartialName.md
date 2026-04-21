# SetPartialName

Sets new field partial name.

## Syntax

```javascript
expression.SetPartialName(sName);
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | No description provided. |

## Returns

boolean

## Example

Set field partial name and display it in a PDF document.

```javascript editor-pdf
// How can I set partial name using a base field in a PDF document?

// Set partial name for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
