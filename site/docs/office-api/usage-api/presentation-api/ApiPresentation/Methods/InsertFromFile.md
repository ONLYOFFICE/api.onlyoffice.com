# InsertFromFile

Inserts slides from the specified file into the current presentation.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.InsertFromFile(file, index, slideStart, slideEnd, keepSourceFormatting);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| file | Required | object |  | An object containing the information about the presentation to insert slides from. |
| index | Optional | number | ApiPresentation.GetSlidesCount() | The 0-based position at which the new slides are inserted. |
| slideStart | Optional | number | 0 | The 0-based index of the first slide to insert from the source file. |
| slideEnd | Optional | number | -1 | The 0-based index of the last slide to insert from the source file. |
| keepSourceFormatting | Optional | boolean | false | Specifies whether to keep the source formatting of the inserted slides. |

## Returns

number
