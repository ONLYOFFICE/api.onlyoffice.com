# GetText

返回书签文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.Numbering | 可选 | boolean | true | 定义结果字符串是否包含编号。 |
| options.Math | 可选 | boolean | true | 定义结果字符串是否包含数学表达式。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何符号。默认分隔符为 "\r"。 |
| options.TableCellSeparator | 可选 | string | '\t' | 定义在结果字符串中如何指定表格单元格分隔符。可以使用任何符号。默认分隔符为 "\t"。 |
| options.TableRowSeparator | 可选 | string | '\r\n' | 定义在结果字符串中如何指定表格行分隔符。可以使用任何符号。默认分隔符为 "\r\n"。 |
| options.ParaSeparator | 可选 | string | '\r\n' | 定义在结果字符串中如何指定段落分隔符。可以使用任何符号。默认分隔符为 "\r\n"。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符（不适用于编号）。可以使用任何符号。默认符号为 "\t"。 |

## 返回值

string

## 示例

此示例展示如何获取书签文本。

```javascript editor-docx
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
