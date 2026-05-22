# End

返回表示指定范围中指定方向末端的 Range 对象。

## 语法

```javascript
expression.End(direction);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| direction | 必需 | [Direction](../../Enumeration/Direction.md) |  | 指定范围中末端的方向。* |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

跳转到电子表格中范围内所选方向上最后一个已占用的单元格。

```javascript editor-xlsx
// How do I find the boundary cell of a data block by moving in a specific direction in a spreadsheet?

// Locate the edge of filled cells going left, right, up, or down and highlight it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C4:D5");
range.End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
