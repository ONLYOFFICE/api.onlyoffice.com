# SetTransparent

设置填充的透明度。

## 语法

```javascript
expression.SetTransparent(transparent);
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transparent | 必需 | number |  | 透明度值，范围从 0（完全不透明）到 1（完全透明）。 |

## 返回值

boolean

## 示例

在电子表格中使形状的填充半透明。

```javascript editor-xlsx
// Adjust how see-through a shape's fill is in a spreadsheet.

// Fade a shape's solid fill on a worksheet so the cells behind it show through in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
```
