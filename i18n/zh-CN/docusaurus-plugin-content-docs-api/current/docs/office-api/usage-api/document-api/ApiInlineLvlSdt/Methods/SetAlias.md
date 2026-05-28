# SetAlias

设置当前容器的别名属性。

## 语法

```javascript
expression.SetAlias(sAlias);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAlias | 必需 | string |  | 将添加到当前内联文本内容控件的别名。 |

## 返回值

boolean

## 示例

为文档中的内联内容控件分配人类可读的别名。

```javascript editor-docx
// How do I label an inline content control with an alias in a document?

// Give a content control a friendly name so it can be identified easily by alias in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with alias '№1'.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetAlias("№1");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let alias = inlineLvlSdt.GetAlias();
paragraph = Api.CreateParagraph();
paragraph.AddText("Alias: " + alias);
doc.Push(paragraph);
```
