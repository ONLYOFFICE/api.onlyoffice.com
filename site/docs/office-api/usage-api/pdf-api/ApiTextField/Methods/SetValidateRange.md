# SetValidateRange

Sets validate range for field.
💡  Can only be applied to fields with a percentage or number format. 

## Syntax

```javascript
expression.SetValidateRange(bGreaterThan, nGreaterThan, bLessThan, nLessThan);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bGreaterThan | Optional | boolean | false | If true, enables minimum value check using `nGreaterThan`. |
| nGreaterThan | Required | number |  | Minimum allowed value (inclusive or exclusive based on implementation). |
| bLessThan | Optional | boolean | false | If true, enables maximum value check using `nLessThan`. |
| nLessThan | Required | number |  | Maximum allowed value (inclusive or exclusive based on implementation). |

## Returns

boolean