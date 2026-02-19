# SetVertAlign

Specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run:\
-**"baseline"** - the characters in the current text run will be aligned by the default text baseline.\
-**"subscript"** - the characters in the current text run will be aligned below the default text baseline.\
-**"superscript"** - the characters in the current text run will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(sType);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" \| "subscript" \| "superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)