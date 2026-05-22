# GetText

Returns the bookmark text.

## Syntax

```javascript
expression.GetText(options);
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | object |  | Options for formatting the returned text. |
| options.Numbering | Optional | boolean | true | Defines if the resulting string will include numbering or not. |
| options.Math | Optional | boolean | true | Defines if the resulting string will include mathematical expressions or not. |
| options.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r". |
| options.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. Any symbol can be used. The default separator is "\t". |
| options.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| options.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| options.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string (does not apply to numbering). Any symbol can be used. The default symbol is "\t". |

## Returns

string

## Example

Read and display the text content stored inside a bookmark in a document.

```javascript editor-docx
// How do I extract the text from a named bookmark in a document?

// Confirm what words are covered by a bookmark by printing its content in a document.

let doc = Api.GetDocument()
let paragraph = doc.GetElement(0)
paragraph.AddText("ONLYOFFICE Document Builder")
let range1 = doc.GetRange(0, 11)
range1.AddBookmark("BookmarkName")
let bookmark = doc.GetBookmark("BookmarkName")
paragraph.AddLineBreak()
paragraph.AddText("Bookmark text is: " + bookmark.GetText())
```
