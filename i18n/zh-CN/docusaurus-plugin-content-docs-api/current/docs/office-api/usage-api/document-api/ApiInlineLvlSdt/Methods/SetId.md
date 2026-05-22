# SetId

指定当前内容控件的唯一 ID。

## 语法

```javascript
expression.SetId(id);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必需 | number |  | 将为当前内容控件指定的数字 ID。 |

## 返回值

boolean

## 示例

为文档中的内联内容控件分配唯一标识符。

```javascript editor-docx
// How do I give an inline content control a specific ID in a document?

// Tag a content control with a known ID so it can be retrieved by reference later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with an ID set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetId("4815162342");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let contentControlId = inlineLvlSdt.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Id: " + contentControlId);
doc.Push(paragraph);
```
