# FreezeRows

冻结当前工作表的首行或多行。

## 语法

```javascript
expression.FreezeRows(count);
```

`expression` - 表示 [ApiFreezePanes](../ApiFreezePanes.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | Number | 0 | 要冻结的行数（可选），或输入零以解冻所有行。 |

## 返回值

此方法不返回任何数据。

## 示例

锁定一个或多个顶行使其在向下滚动时保持可见。

```javascript editor-xlsx
// How do I keep header rows from disappearing when scrolling through data in a spreadsheet?

// Pin the uppermost rows in place so column labels are always on screen in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeRows(1);
```
