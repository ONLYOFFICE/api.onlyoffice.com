# ATAN

Returns the arctangent of a number in radians, in the range from &lt;em&gt;-Pi/2&lt;/em&gt; to &lt;em&gt;Pi/2&lt;/em&gt;.

## Syntax

```javascript
expression.ATAN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle tangent. |

## Returns

number

## Example

This example shows how to return the arctangent of a number.

```javascript editor-xlsx
// How to get an arctangent of a number.

// Use function to get an arctangent of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ATAN(0.25));
```
