# SetPlaceholder

Sets text field placeholder.

## Syntax

```javascript
expression.SetPlaceholder(placeholder);
```

`expression` - A variable that represents a [ApiTextWidget](../ApiTextWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| placeholder | Required | string |  | The placeholder text. |

## Returns

boolean

## Example

Add a hint text that appears before you type in a text field in a PDF.

```javascript editor-pdf
// How do I add a hint text to an empty text field in a PDF?

// Configure what example text shows when a text field is empty in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');
```
