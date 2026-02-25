# SetAxieNumFormat

Sets the specified numeric format to the axis values.

## Syntax

```javascript
expression.SetAxieNumFormat(sFormat, sAxiePos);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | Numeric format (can be custom format). |
| sAxiePos | Required | [AxisPos](../../Enumeration/AxisPos.md) |  | Axis position in the chart. |

## Returns

boolean