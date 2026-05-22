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

Enable or disable toggle-off behavior for a checkbox in a PDF.

```javascript editor-pdf
// How do I make a checkbox uncheck when clicked if already checked in a PDF?

// Control whether a checked checkbox deselects on a second click in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```
