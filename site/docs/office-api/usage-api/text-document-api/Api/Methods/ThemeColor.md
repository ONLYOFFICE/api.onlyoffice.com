# ThemeColor

Creates a theme color.

## Syntax

```javascript
expression.ThemeColor(name);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Optional | [SchemeColorId](../../Enumeration/SchemeColorId.md) | "tx1" | The theme color name. If the provided name is not supported, the 'tx1' color will be used. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example shows how to create a theme-color and use it as a font color.

```javascript editor-docx
const doc = Api.GetDocument();
const color = Api.ThemeColor('accent6');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in theme color.');
paragraph.SetColor(color);

```
