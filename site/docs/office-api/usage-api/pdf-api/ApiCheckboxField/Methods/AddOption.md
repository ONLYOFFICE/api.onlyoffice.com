# AddOption

Adds options to checkbox group.

## Syntax

```javascript
expression.AddOption(nPage, aRect, sExportValue);
```

`expression` - A variable that represents a [ApiCheckboxField](../ApiCheckboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | Required | number |  | page to add option |
| aRect | Required | [Rect](../../Enumeration/Rect.md) |  | rect of new option |
| sExportValue | Optional | string |  | option checked value |

## Returns

[ApiCheckboxWidget](../../ApiCheckboxWidget/ApiCheckboxWidget.md)

## Example

This example adds an option for checkbox field group.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
