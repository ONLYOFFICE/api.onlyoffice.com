# CreateTable

创建具有指定行数和列数的新表格。

:::danger[Breaking Change]
从版本 9.4.0 开始，参数顺序已从 `Api.CreateTable(cols, rows)` 更改为 `Api.CreateTable(rows, cols)`。
:::

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

在文档中插入跨越整个页面宽度的 3x3 表格。

```javascript editor-docx
// How do I add a table to a document?

// Build a new table and stretch it to fill the entire line width in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);
```
