# CreateColorFromRGB

Creates an RGB color setting the appropriate values for the red, green and blue color components.

## Syntax

```javascript
expression.CreateColorFromRGB(r, g, b);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Define a custom color from red, green, and blue values to apply to elements in a spreadsheet.

```javascript editor-xlsx
// How do I build a specific color using red, green, and blue numbers in a spreadsheet?

// Color text or shapes with a precise tone by mixing three numeric channel values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
```
