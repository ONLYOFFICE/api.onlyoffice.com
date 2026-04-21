# SetToggleToOff

Sets field toggle to off prop.

## Syntax

```javascript
expression.SetToggleToOff(bToggle);
```

`expression` - A variable that represents a [ApiCheckboxField](../ApiCheckboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bToggle | Required | boolean |  | can toggle to off |

## Returns

boolean

## Example

Set toggle to off property for checkbox field in a PDF document.

```javascript editor-pdf
// How can I set toggle to off using a checkbox field in a PDF document?

// Set toggle to off for a checkbox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```
