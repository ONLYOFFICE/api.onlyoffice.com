# SetFreezePanesType

Sets a type to the freeze panes.

## Syntax

```javascript
expression.SetFreezePanesType(FreezePaneType);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FreezePaneType | Required | [FreezePaneType](../../Enumeration/FreezePaneType.md) |  | The freeze panes type ("null" to unfreeze). |

## Returns

This method doesn't return any data.

## Example

Lock the first column in place so it stays visible while scrolling in a spreadsheet.

```javascript editor-xlsx
// How do I freeze a column so it remains visible when navigating across many columns in a spreadsheet?

// Pin the leading column and record its address for reference in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
