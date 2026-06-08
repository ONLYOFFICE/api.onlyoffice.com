# GetText

返回段落文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.Numbering | 可选 | boolean | false | 定义结果字符串是否包含编号。 |
| options.Math | 可选 | boolean | false | 定义结果字符串是否包含数学表达式。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何字符串。默认分隔符为 “\r”。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符（不适用于编号）。可以使用任何字符串。默认符号为 “\t”。 |

## 返回值

string

## 示例

```javascript editor-xlsx
// How do I retrieve the plain text from a paragraph inside a shape in a spreadsheet?

// Extract the paragraph text and write it to a cell to verify the content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText("Sample paragraph text.");
const text = paragraph.GetText();
worksheet.GetRange("A1").SetValue("Paragraph text: " + text);
```
