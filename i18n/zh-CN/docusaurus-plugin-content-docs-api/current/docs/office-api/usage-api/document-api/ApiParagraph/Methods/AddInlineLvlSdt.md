# AddInlineLvlSdt

添加行内容器。

## 语法

```javascript
expression.AddInlineLvlSdt(oSdt);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSdt | 必需 | [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) |  | 行内容器。如果为 undefined 或 null，则将创建新的 ApiInlineLvlSdt 类并添加到段落中。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

在文档的段落中插入内联内容控件。

```javascript editor-docx
// How do I place a structured text field inside a paragraph in a document?

// Wrap a run of text in a bounded inline control so it can be managed or restricted separately within the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
