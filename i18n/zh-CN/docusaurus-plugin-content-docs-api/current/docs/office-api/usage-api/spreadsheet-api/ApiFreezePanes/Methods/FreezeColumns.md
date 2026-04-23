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

此示例冻结第一列。

```javascript editor-xlsx
// How to freeze columns using their indices.

// Get freeze panes and freeze a column using its index.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeColumns(1);
```
