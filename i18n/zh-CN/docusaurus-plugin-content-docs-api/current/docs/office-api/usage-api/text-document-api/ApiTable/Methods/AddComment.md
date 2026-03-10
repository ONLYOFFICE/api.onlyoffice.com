# AddComment

向当前表格的所有内容添加批注。
💡 请注意，此表格必须在文档中。

## 语法

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注文本。 |
| sAuthor | 可选 | string |  | 作者姓名。 |
| sUserId | 可选 | string |  | 批注作者的用户 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例向表格的所有内容添加批注。

```javascript editor-docx
// How to add comment to the table indicating its author name.

// Insert a comment into a table.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
table.AddComment("comment", "John Smith");
```
