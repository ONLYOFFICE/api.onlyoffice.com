# SetSpacingAfter

Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then \
any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it \
will be interpreted as false.

## Syntax

```javascript
expression.SetSpacingAfter(nAfter, isAfterAuto);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAfter | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isAfterAuto | Optional | boolean | false | The true value disables the spacing after the current paragraph. |

## Returns

boolean