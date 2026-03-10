# GetText

返回当前文档内容对象的内部文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.Numbering | 可选 | boolean | true | 定义结果字符串是否包含编号。 |
| options.Math | 可选 | boolean | true | 定义结果字符串是否包含数学表达式。 |
| options.TableCellSeparator | 可选 | string | '\t' | 定义在结果字符串中如何指定表格单元格分隔符。可以使用任何符号。默认分隔符为 "\t"。 |
| options.TableRowSeparator | 可选 | string | '\r\n' | 定义在结果字符串中如何指定表格行分隔符。可以使用任何符号。默认分隔符为 "\r\n"。 |
| options.ParaSeparator | 可选 | string | '\r\n' | 定义在结果字符串中如何指定段落分隔符。可以使用任何符号。默认分隔符为 "\r\n"。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符。可以使用任何符号。默认符号为 "\t"。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何符号。默认分隔符为 "\r"。 |

## 返回值

string

## 示例

This example returns the text from the document content.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is the shape content text.');
const text = docContent.GetText();
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Text from document content: ' + text);
docContent.Push(infoParagraph);
slide.AddObject(shape);

```
