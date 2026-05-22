# AddSheet

创建新工作表。新工作表将成为活动工作表。

## 语法

```javascript
expression.AddSheet(sName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 新工作表的名称。 |

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## 示例

在电子表格中插入具有自定义名称的新工作表。

```javascript editor-xlsx
// How do I add a new worksheet to an existing file in a spreadsheet?

// Expand the workbook by creating an additional sheet in a spreadsheet.

Api.AddSheet("New sheet");
```
