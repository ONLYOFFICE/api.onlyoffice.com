# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.\
-**Warning**: The lengths of aPos array and aVal array -**MUST BE** equal to each other.

## Syntax

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | Required | [twips](../../Enumeration/twips.md)[] |  | An array of the positions of custom tab stops with respect to the current page margins measured in twentieths of a point (1/1440 of an inch). |
| aVal | Required | [TabJc](../../Enumeration/TabJc.md)[] |  | An array of the styles of custom tab stops, which determines the behavior of the tab stop and the alignment which will be applied to text entered at the current custom tab stop. |

## Returns

boolean