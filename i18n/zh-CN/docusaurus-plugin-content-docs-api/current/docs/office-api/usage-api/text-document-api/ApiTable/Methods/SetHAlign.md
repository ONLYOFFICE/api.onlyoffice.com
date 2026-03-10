# SetHAlign

设置表格的水平对齐方式。

## 语法

```javascript
expression.SetHAlign(sType);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | String |  | 水平对齐类型：可以是 "left"、"center" 或 "right"。 |

## 返回值

boolean

## 示例

此示例设置表格的水平对齐方式。

```javascript editor-docx
// How to set alignment of the text to the center.

// Create a table and set its horizontal alignment.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
table.SetHAlign("center");
```
