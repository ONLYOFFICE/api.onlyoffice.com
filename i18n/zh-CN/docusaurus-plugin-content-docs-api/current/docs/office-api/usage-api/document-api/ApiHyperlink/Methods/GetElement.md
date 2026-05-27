# GetElement

使用指定的位置返回超链接元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要获取其内容的元素必须位于的位置。 |

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

通过索引访问文档中超链接内的特定元素。

```javascript editor-docx
// How do I retrieve one element from a hyperlink using its position in a document?

// Extract a run from a hyperlink to reuse its content elsewhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("Api Document Builder.");
paragraph.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers");
paragraph.AddElement(run2, 1);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let element = hyperlink.GetElement(1);
paragraph = Api.CreateParagraph();
paragraph.AddElement(element);
doc.Push(paragraph);
```
