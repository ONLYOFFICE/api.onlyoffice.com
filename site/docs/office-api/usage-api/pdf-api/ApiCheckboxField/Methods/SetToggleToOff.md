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

This example sets toggle to off property for checkbox field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```
