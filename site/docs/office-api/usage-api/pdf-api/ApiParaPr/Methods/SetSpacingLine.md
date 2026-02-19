# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either \
"atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If \
the value of the sLineRule parameter is "auto", then the value of the \
nLine parameter will be interpreted as 240ths of a line.

## Syntax

```javascript
expression.SetSpacingLine(nLine, sLineRule);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLine | Required | [twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) |  | The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line. |
| sLineRule | Required | "auto" \| "atLeast" \| "exact" |  | The rule that determines the measuring units of the line spacing. |

## Returns

boolean