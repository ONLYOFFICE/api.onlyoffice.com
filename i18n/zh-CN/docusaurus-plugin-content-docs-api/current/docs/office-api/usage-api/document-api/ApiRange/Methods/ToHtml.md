# ToHtml

将范围转换为 HTML。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.ToHtml(options);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | &#123;&#125; | HTML 转换选项。 |

## 返回值

string

## 示例

将文档中选定的文本部分导出为 HTML 字符串。

```javascript editor-docx
// How do I turn a range of words into HTML markup so it can be used outside the document?

// Capture the content of a text range in HTML format for embedding or further processing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This range will be converted to HTML.");
let range = paragraph.GetRange(0, 36);
let html = range.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);
```
