# CreateTable

创建表格。

## 语法

```javascript
expression.CreateTable(nCols, nRows);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCols | 必需 |  |  | 列数。 |
| nRows | 必需 |  |  | 行数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

如何创建包含两行四列的新表格。

```javascript editor-pdf
// Add a table to the pdf document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(2, 4);
page.AddObject(table);
```
