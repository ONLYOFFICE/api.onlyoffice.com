# GetLayoutByType

Returns the layout corresponding to the specified layout type of the slide master.

## Syntax

```javascript
expression.GetLayoutByType(sType);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [LayoutType](../../Enumeration/LayoutType.md) |  | The layout type. |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null