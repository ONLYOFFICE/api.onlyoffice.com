# GetText

Returns the inner text of the current document content object.

## Syntax

```javascript
expression.GetText(options);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | object |  | Options for formatting the returned text. |
| options.Numbering | Optional | boolean | true | Defines if the resulting string will include numbering or not. |
| options.Math | Optional | boolean | true | Defines if the resulting string will include mathematical expressions or not. |
| options.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. Any symbol can be used. The default separator is "\t". |
| options.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| options.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| options.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string. Any symbol can be used. The default symbol is "\t". |
| options.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r". |

## Returns

string