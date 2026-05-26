# SetId

指定当前内容控件的唯一 ID。

## 语法

```javascript
expression.SetId(id);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必需 | number |  | 将为当前内容控件指定的数字 ID。 |

## 返回值

此方法不返回任何数据。

## 示例

为文档中的内容控件分配唯一标识符。

```javascript editor-docx
// How do I give a content control a specific ID in a document?

// Label a content control with a custom ID and verify it was applied in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetId("4815162342");
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with an ID set to it.");
doc.AddElement(0, blockLvlSdt);

let contentControlId = blockLvlSdt.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Id: " + contentControlId);
doc.Push(paragraph);
```
