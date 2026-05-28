# SetHeight

设置当前表格行的高度。

## 语法

```javascript
expression.SetHeight(height);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位表示的行高。 |

## 返回值

boolean

## 示例

设置 PDF 中表格行的高度。

```javascript editor-pdf
// How do I make a row taller or shorter in a PDF?

// Change the row dimensions to a specific measurement in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

page.AddObject(table);
```
