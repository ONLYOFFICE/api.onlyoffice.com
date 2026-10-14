# Select

选择当前图形对象。

继承自 [ApiDrawing.Select](../../ApiDrawing/Methods/Select.md)。

## 语法

```javascript
expression.Select(isReplace);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isReplace | 可选 | boolean | false | 指定选择是否应替换当前选择（true）还是添加到当前选择（false）。 |

## 返回值

boolean

## 示例

在 PDF 中选择表格，使其成为当前选区。

```javascript editor-pdf
// Programmatically select a table in a PDF.

// Add a table to the page, select it, then change its background color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
page.AddObject(table);
table.Select();
table.SetBackgroundColor(Api.RGB(0, 122, 204));
```
