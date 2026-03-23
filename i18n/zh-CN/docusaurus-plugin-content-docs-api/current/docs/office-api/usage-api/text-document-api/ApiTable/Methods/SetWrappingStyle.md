# SetWrappingStyle

设置表格环绕样式。

## 语法

```javascript
expression.SetWrappingStyle(isFlow);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isFlow | 必需 | boolean |  | 指定表格是否为内联。 |

## 返回值

boolean

## 示例

此示例设置表格环绕样式。

```javascript editor-docx
// How to set the wrapping to the table.

// Resize table by making its the width 100 percent.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table1 = Api.CreateTable(3, 3);
table1.SetWidth("percent", 100);
table1.SetStyle(tableStyle);
doc.Push(table1);
table1.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 1");
let table2 = Api.CreateTable(3, 3);
table2.SetWidth("percent", 100);
table2.SetStyle(tableStyle);
doc.Push(table2);
table2.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 2");
paragraph.AddLineBreak();
paragraph.AddText("The tables were added to the paragraph. Table 1 is inline and Table 2 is not.");
table1.SetWrappingStyle(true);
table2.SetWrappingStyle(false);
```
