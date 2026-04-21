# SetFullName

Sets new field name if possible.

## Syntax

```javascript
expression.SetFullName(sName);
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | No description provided. |

## Returns

boolean

## Example

Set field full name and display it in a PDF document.

```javascript editor-pdf
// How do I set full name in a PDF document?

// Set full name using a base field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('EXAMPLE');
textField.SetValue('Field full name is: ' + textField.GetFullName());
```
