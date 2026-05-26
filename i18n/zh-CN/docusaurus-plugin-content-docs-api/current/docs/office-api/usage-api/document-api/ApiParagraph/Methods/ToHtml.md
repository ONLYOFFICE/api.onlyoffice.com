# ToHtml

将段落转换为 HTML。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.ToHtml(options);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | &#123;&#125; | HTML 转换选项。 |

## 返回值

string

## 示例

将段落内容导出为 HTML 字符串以便在编辑器外使用。

```javascript editor-docx
// How do I get the HTML representation of a paragraph's text and formatting in a document?

// Capture paragraph content as markup so it can be embedded or transferred to a web page from a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This paragraph will be converted to HTML.");
let html = paragraph.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);
```
