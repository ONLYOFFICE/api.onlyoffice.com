# GetElementIndex

返回指定元素在当前内联内容控件中的位置（索引）。

## 语法

```javascript
expression.GetElementIndex(element);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 将返回其索引的内联元素（文本块、内联内容控件、表单等）。 |

## 返回值

Number

## 示例

确定内联内容控件中元素的索引。

```javascript editor-docx
// The index reflects the position of a run within the inline content control.

// Locate a run placed inside an inline content control and report its index.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineSdt);
let run = Api.CreateRun();
run.AddText("nested run");
inlineSdt.AddElement(run);
let index = inlineSdt.GetElementIndex(run);
let report = Api.CreateParagraph();
report.AddText("The nested run is at index " + index + ".");
doc.Push(report);
```
