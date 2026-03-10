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

此示例向容器添加段落。

```javascript editor-docx
// Creates a block content control and adds a paragraph with a text to it.

// How to add the ApiParagraph object to the first position of the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
```
