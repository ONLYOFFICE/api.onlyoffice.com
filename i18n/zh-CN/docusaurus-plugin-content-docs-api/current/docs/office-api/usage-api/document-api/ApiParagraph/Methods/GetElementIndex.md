# GetElementIndex

返回指定元素在当前段落中的位置（索引）。

## 语法

```javascript
expression.GetElementIndex(element);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 将返回其索引的内联元素（文本块、内联内容控件、表单等）。 |

## 返回值

Number

## 示例

确定段落中内联元素的索引。

```javascript editor-docx
// The index reflects the position of a specific run within its paragraph.

// Locate a run inside a paragraph and report its index back into the document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Start ");
let run = Api.CreateRun();
run.AddText("target run");
paragraph.AddElement(run);
paragraph.AddText(" end");
doc.Push(paragraph);
let index = paragraph.GetElementIndex(run);
let report = Api.CreateParagraph();
report.AddText("The target run is at index " + index + ".");
doc.Push(report);
```
