# FreezeAt

设置活动工作表视图中的冻结单元格。提供的范围对应于将在最上方和最左侧窗格中冻结的单元格。

## 语法

```javascript
expression.FreezeAt(frozenRange);
```

`expression` - 表示 [ApiFreezePanes](../ApiFreezePanes.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| frozenRange | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | 表示要冻结的单元格的范围。 |

## 返回值

此方法不返回任何数据。

## 示例

锁定工作表的特定区域使其在电子表格中滚动时保持可见。

```javascript editor-xlsx
// How do I pin a chosen block of rows and columns in place during scrolling in a spreadsheet?

// Keep a defined region always on screen by anchoring it to the corner of the view in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = Api.GetRange('H2:K4');
freezePanes.FreezeAt(range);
```
