# GetLayoutByType

Returns a layout of the specified slide master by its position.

## Syntax

```javascript
expression.GetLayoutByType(sType);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [LayoutType](../../Enumeration/LayoutType.md) |  | Layout position. |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null