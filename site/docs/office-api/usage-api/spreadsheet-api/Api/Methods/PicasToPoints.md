# PicasToPoints

Converts picas to points.

## Syntax

```javascript
expression.PicasToPoints(pc);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pc | Required | number |  | The number of picas to convert to points. |

## Returns

number

## Example

This example shows how to convert picas to points.

```javascript editor-xlsx
const picas = 100;
const points = Api.PicasToPoints(picas);
const text = picas + ' picas are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
