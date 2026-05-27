# GetText

返回当前表格单元格的内部文本。

## 语法

```javascript
expression.GetText(pr);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pr | 可选 | object |  | 返回文本的格式选项。 |
| pr.Numbering | 可选 | boolean | true | 定义结果字符串是否包含编号。 |
| pr.Math | 可选 | boolean | true | 定义结果字符串是否包含数学表达式。 |
| pr.TableCellSeparator | 可选 | string | '\t' | 定义表格单元格分隔符在结果字符串中的指定方式。 |
| pr.TableRowSeparator | 可选 | string | '\r\n' | 定义表格行分隔符在结果字符串中的指定方式。 |
| pr.ParaSeparator | 可选 | string | '\r\n' | 定义段落分隔符在结果字符串中的指定方式。 |
| pr.TabSymbol | 可选 | string | '\t' | 定义制表符在结果字符串中的指定方式。 |
| pr.NewLineSeparator | 可选 | string | '\r' | 定义行分隔符在结果字符串中的指定方式。 |

## 返回值

string

## 示例

```javascript editor-pdf
// How do I retrieve the plain text from a table cell in a PDF?

// Extract text from a cell and display it in a separate text box on the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Cell content.");
const text = cell.GetText({TableCellSeparator : ""});

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(100), Api.MillimetersToEmus(20), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(120));
shape.GetContent().GetElement(0).AddText("Cell text: " + text);

page.AddObject(table);
page.AddObject(shape);
```
