# SetDashPattern

Sets annotation dash pattern.
💡  The border style property must be set to "dashed". 

## Syntax

```javascript
expression.SetDashPattern(pattern);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pattern | Required | number[] |  | A dash array defining a pattern of dashes and gaps to be used in drawing a dashed border. For example, a value of [3, 2] specifies a border drawn with 3-point dashes alternating with 2-point gaps. |

## Returns

boolean