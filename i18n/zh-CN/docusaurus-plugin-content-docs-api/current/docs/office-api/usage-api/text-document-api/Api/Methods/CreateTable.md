# CreateTable

创建具有指定行数和列数的新表格。

## 语法

```javascript
expression.CreateTable(cols, rows);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cols | 必需 | number |  | 列数。 |
| rows | 必需 | number |  | 行数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

此示例创建一个 3x3 的表格并将其插入到文档中。

```javascript editor-docx
// Creates a table, adds it to the document, and sets its width to 100%.

// How to create the ApiTable object and add it to the ApiDocument class.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);
```
