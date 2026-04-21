# GetFill

从当前形状获取填充属性。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md) \| null

## 示例

从形状获取填充属性并显示详细信息。创建带渐变填充的形状，获取并显示填充详细信息。

```javascript editor-xlsx
// How to get the fill for a shape in a spreadsheet?

// Get the fill and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedFill = shape.GetFill();
if (retrievedFill) {
    worksheet.GetRange("A1").SetValue("Fill type: " + retrievedFill.GetType());
}
```
