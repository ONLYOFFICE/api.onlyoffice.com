# FreezeColumns

冻结当前工作表的第一列或多列。

## 语法

```javascript
expression.FreezeColumns(count);
```

`expression` - 表示 [ApiFreezePanes](../ApiFreezePanes.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | Number | 0 | 要冻结的列数（可选），或输入零以解冻所有列。 |

## 返回值

此方法不返回任何数据。

## 示例

锁定一个或多个最左列使其在向右滚动时保持可见。

```javascript editor-xlsx
// How do I stop columns from moving out of view when scrolling horizontally in a spreadsheet?

// Pin the leading columns in place to keep key labels visible at all times in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeColumns(1);
```
