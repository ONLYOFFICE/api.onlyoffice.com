# Push

推送段落、表格或块级内容控件以将其实际添加到当前容器。

## 语法

```javascript
expression.Push(element);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将推送到当前容器的元素类型。 |

## 返回值

boolean

## 示例

此示例推送段落以将其实际添加到容器。

```javascript editor-docx
// Creates a block content control and pushes a paragraph to it.

// How to add a document element (paragraph, table, or block content control) to the ApiBlockLvlSdt object.

// Creates the ApiParagraph object, adds a text to it, and pushes it to the block container.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.Push(paragraph);
doc.AddElement(0, blockLvlSdt);
```
