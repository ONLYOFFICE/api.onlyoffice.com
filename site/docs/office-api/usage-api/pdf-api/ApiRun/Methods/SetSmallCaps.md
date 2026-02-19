# SetSmallCaps

Specifies that all the small letter characters in this text run are formatted for display only as their capital\
letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean |  | Specifies if the contents of the current run are displayed capitalized two points smaller or not. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)