# AddElement

使用在文档内容中的位置添加段落、表格或块级内容控件。

## 语法

```javascript
expression.AddElement(nPos, oElement);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 将添加当前元素的位置。 |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将在当前位置添加的文档元素。 |

## 返回值

boolean

## 示例

此示例在文档内容中添加段落。

```javascript editor-xlsx
// How to add text to the document using ApiParagraph.

// Update the document content adding a paragraph to it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
content.AddElement(paragraph);
content.Push(paragraph);
```
