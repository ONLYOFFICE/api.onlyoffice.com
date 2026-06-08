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
| options.TableCellSeparator | 可选 | string | '\t' | 定义在结果字符串中如何指定表格单元格分隔符。可以使用任何符号。默认分隔符为 “\t”。 |
| options.TableRowSeparator | 可选 | string | '\r\n' | 定义在结果字符串中如何指定表格行分隔符。可以使用任何符号。默认分隔符为 “\r\n”。 |
| options.ParaSeparator | 可选 | string | '\r\n' | 定义在结果字符串中如何指定段落分隔符。可以使用任何符号。默认分隔符为 “\r\n”。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符。可以使用任何符号。默认符号为 “\t”。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何符号。默认分隔符为 “\r”。 |

## 返回值

string

## 示例

从文档内容容器中提取所有文本作为纯字符串。

```javascript editor-docx
// How do I read the full text stored inside a document content object in a document?

// Verify the text inside a content control by reading it back as a single string.

const doc = Api.GetDocument();

const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("This is a block text content control.");

const para = Api.CreateParagraph();
para.AddText("This text from DocContent element: " + content.GetText());
doc.Push(para);
```
