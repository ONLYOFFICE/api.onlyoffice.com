# SetJc

指定当前表格相对于当前节中文本边距的对齐方式。

继承自 [ApiTablePr.SetJc](../../ApiTablePr/Methods/SetJc.md)。

## 语法

```javascript
expression.SetJc(sJcType);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJcType | 必需 | "left" \| "right" \| "center" |  | 用于当前表格放置的对齐类型。 |

## 返回值

boolean

## 示例

在文档中使表格相对于页边距水平对齐。

```javascript editor-docx
// How do I control the horizontal position of a table in a document?

// Center or reposition a table to match the desired page layout in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table is aligned at the center of the page horizontally.");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
table.SetJc("center");
doc.Push(table);
```
