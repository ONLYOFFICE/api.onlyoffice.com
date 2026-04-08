# SetStyle

为当前表格设置样式。

## 语法

```javascript
expression.SetStyle(oStyle);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 将应用于当前表格的样式。 |

## 返回值

boolean

## 示例

此示例为表格设置样式。

```javascript editor-docx
// How to set style of the table.

// Create a bordered table.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table and apply one of the existing styles to it:");
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
