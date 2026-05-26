# AddListObject

Adds a formatted table to the worksheet and returns the ApiListObject object.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.AddListObject(sSourceType, sSource, bLinkSource, sHasHeaders, sDestination, sTableStyleName);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSourceType | Optional | [XlListObjectSourceType](../../Enumeration/XlListObjectSourceType.md) | "xlSrcRange" | The source type for the table. Currently only **"xlSrcRange"** is supported. |
| sSource | Optional | string |  | The range to which the table will be applied, e.g. **"A1:D10"**. Required when &lt;em&gt;sSourceType&lt;/em&gt; is **"xlSrcRange"**. |
| bLinkSource | Optional | boolean | false | Not supported. |
| sHasHeaders | Optional | [XlYesNoGuess](../../Enumeration/XlYesNoGuess.md) | "xlGuess" | Specifies whether the source range has column labels. |
| sDestination | Optional | string |  | Not supported. |
| sTableStyleName | Optional | string | "TableStyleLight9" | The table style name. |

## Returns

[ApiListObject](../../ApiListObject/ApiListObject.md) \| null
