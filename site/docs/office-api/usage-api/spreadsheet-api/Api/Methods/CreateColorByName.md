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

Create a color selecting it from one of the available color presets in a spreadsheet.

```javascript editor-xlsx
// How to use a color from the preset in a spreadsheet.

// Find a color by name and use it to change font color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorByName("peachPuff");
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
```
