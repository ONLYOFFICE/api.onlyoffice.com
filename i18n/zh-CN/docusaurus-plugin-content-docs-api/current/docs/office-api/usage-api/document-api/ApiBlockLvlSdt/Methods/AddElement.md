# AddElement

向当前容器添加段落、表格或块级内容控件。

## 语法

```javascript
expression.AddElement(element, pos);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将添加到当前容器的元素类型。 |
| pos | 必需 | Number |  | 指定的位置。 |

## 返回值

boolean

## 示例

在文档中将段落插入到内容控件的特定位置。

```javascript editor-docx
// How do I place a paragraph inside a content control in a document?

// Populate a content control with a text paragraph and add the whole block to the page in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
```
