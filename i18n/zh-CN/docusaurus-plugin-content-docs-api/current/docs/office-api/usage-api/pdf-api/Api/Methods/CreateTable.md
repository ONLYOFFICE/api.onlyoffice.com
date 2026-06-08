# CreateTable

创建表格。

## 语法

```javascript
expression.CreateTable(rows, cols);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rows | 必需 | number |  | 行数。 |
| cols | 必需 | number |  | 列数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

在 PDF 中插入具有多行多列的表格。

```javascript editor-pdf
// How do I add a table to a PDF page?

// Create and place a table with specific dimensions in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(2, 4);
page.AddObject(table);
```
