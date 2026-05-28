# CreateColorByName

Creates a color selecting it from one of the available color presets.

## Syntax

```javascript
expression.CreateColorByName(sPresetColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPresetColor | Required | [PresetColor](../../Enumeration/PresetColor.md) |  | A preset selected from the list of the available color preset names. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Pick a color from a built-in preset list to use on text or objects in a spreadsheet.

```javascript editor-xlsx
// How do I select a named color preset to apply to an element in a spreadsheet?

// Style text with a predefined color chosen by its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorByName("peachPuff");
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
```
