# GetFill

获取笔触的填充（颜色）。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md) \| null

## 示例

Gets the fill color of a stroke.

```javascript editor-xlsx
// Creates a shape with a colored border and retrieves its fill properties.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let strokeObj = shape.GetLine();
if (strokeObj) {
    let strokeFill = strokeObj.GetFill();
    if (strokeFill) {
        worksheet.GetRange("A1").SetValue("Stroke fill type: " + strokeFill.GetType());
    }
}

```
