# SetParaId

Specifies a unique ID for the current paragraph.

## Syntax

```javascript
expression.SetParaId(paraId);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraId | Required | number |  | The numerical ID which will be specified for the current paragraph. Value MUST be greater than 0 and less than 0x80000000. |

## Returns

boolean