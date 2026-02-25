# GetText

Returns the bookmark text.

## Syntax

```javascript
expression.GetText(oPr);
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oPr | Required | object |  | The resulting string display properties. |
| oPr.Numbering | Optional | boolean | false | Defines if the resulting string will include numbering or not. |
| oPr.Math | Optional | boolean | false | Defines if the resulting string will include mathematical expressions or not. |
| oPr.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r". |
| oPr.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. Any symbol can be used. The default separator is "\t". |
| oPr.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| oPr.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| oPr.TabSymbol | Optional | string | ' ' | Defines how the tab will be specified in the resulting string (does not apply to numbering). Any symbol can be used. The default symbol is " ". |

## Returns

string

## Example

This example shows how to get bookmark text.

```javascript editor-docx playground
// How to add a bookmark and then display its content's text.

// Show a bookmark text in the document.

let doc = Api.GetDocument()
let paragraph = doc.GetElement(0)
paragraph.AddText("ONLYOFFICE Document Builder")
let range1 = doc.GetRange(0, 11)
range1.AddBookmark("BookmarkName")
let bookmark = doc.GetBookmark("BookmarkName")
paragraph.AddLineBreak()
paragraph.AddText("Bookmark text is: " + bookmark.GetText())

```
