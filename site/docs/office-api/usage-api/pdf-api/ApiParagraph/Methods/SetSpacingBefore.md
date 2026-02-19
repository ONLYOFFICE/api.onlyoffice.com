# SetSpacingBefore

Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then \
any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then \
it will be interpreted as false.

## Syntax

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isBeforeAuto | Optional | boolean | false | The true value disables the spacing before the current paragraph. |

## Returns

boolean