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

此方法不返回任何数据。

## 示例

创建新的工作表。

```javascript editor-xlsx
// How to create a new worksheet.

// Add the sheet and display the result in a spreadsheet.

Api.AddSheet("New sheet");
```
