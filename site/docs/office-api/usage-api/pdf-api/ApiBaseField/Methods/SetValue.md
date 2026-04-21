# SetValue

Sets field value

## Syntax

```javascript
expression.SetValue(sValue);
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sValue | Required | string |  | No description provided. |

## Returns

boolean

## Example

Set value to text field in a PDF document.

```javascript editor-pdf
// How can I set value using a base field in a PDF document?

// Set value for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');
```
