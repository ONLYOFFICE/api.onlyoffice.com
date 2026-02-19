# TwipsToPoints

Converts twips to points.

## Syntax

```javascript
expression.TwipsToPoints(twips);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| twips | Required | number |  | The number of twips to convert to points. |

## Returns

number

## Example

This example shows how to convert twips to points.

```javascript editor-xlsx
const twips = 100;
const points = Api.TwipsToPoints(twips);
const text = twips + ' twips are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
