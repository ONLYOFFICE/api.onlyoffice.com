# SetPaddings

设置表格内边距。
如果表格是内联的，则仅应用左内边距。

## 语法

```javascript
expression.SetPaddings(nLeft, nTop, nRight, nBottom);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | 必需 | Number |  | 左内边距。 |
| nTop | 必需 | Number |  | 上内边距。 |
| nRight | 必需 | Number |  | 右内边距。 |
| nBottom | 必需 | Number |  | 下内边距。 |

## 返回值

boolean

## 示例

设置文档中表格单元格内容与单元格边缘之间的间距。

```javascript editor-docx
// How do I add inner spacing to all cells of a table in a document?

// Control how much breathing room text has inside each table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
table.SetPaddings(10, 10, 5, 5);
```
