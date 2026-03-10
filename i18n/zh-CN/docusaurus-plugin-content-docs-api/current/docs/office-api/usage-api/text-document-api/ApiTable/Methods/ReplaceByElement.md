# ReplaceByElement

用新元素替换当前表格。

## 语法

```javascript
expression.ReplaceByElement(oElement);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 用于替换当前表格的元素。 |

## 返回值

boolean

## 示例

此示例用段落替换当前表格。

```javascript editor-docx
// How to replace table with a paragraph.

// Create paragraph and put it instead of the table.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.AddElement(0, table);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
table.SetStyle(tableStyle);
let paragraph = Api.CreateParagraph();
paragraph.AddText("The table was replaced with the current paragraph.");
table.ReplaceByElement(paragraph);
```
