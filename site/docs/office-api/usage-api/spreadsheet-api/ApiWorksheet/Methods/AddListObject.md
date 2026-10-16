# AddListObject

Adds a formatted table to the worksheet and returns the ApiListObject object. Built-in table style names: TableStyleLight1-21, TableStyleMedium1-28, TableStyleDark1-11.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.AddListObject(sSourceType, sSource, bLinkSource, sHasHeaders, sDestination, sTableStyleName);
```

`expression` - A variable that represents an [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSourceType | Optional | [XlListObjectSourceType](../../Enumeration/XlListObjectSourceType.md) | "xlSrcRange" | The source type for the table. Currently only **"xlSrcRange"** is supported. |
| sSource | Optional | string |  | The range to which the table will be applied, e.g. **"A1:D10"**. Required when *sSourceType* is **"xlSrcRange"**. |
| bLinkSource | Optional | boolean | false | Not supported. |
| sHasHeaders | Optional | [XlYesNoGuess](../../Enumeration/XlYesNoGuess.md) | "xlGuess" | Specifies whether the source range has column labels. |
| sDestination | Optional | string |  | Not supported. |
| sTableStyleName | Optional | string | "TableStyleLight9" | The name of a built-in table style (for example, "TableStyleMedium9"), or a custom style defined in the workbook. |

## Returns

[ApiListObject](../../ApiListObject/ApiListObject.md) \| null
