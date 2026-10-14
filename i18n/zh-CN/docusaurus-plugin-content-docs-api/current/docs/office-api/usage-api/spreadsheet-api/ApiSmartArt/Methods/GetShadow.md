# GetShadow

返回当前图形对象的阴影。

继承自 [ApiDrawing.GetShadow](../../ApiDrawing/Methods/GetShadow.md)。

## 语法

```javascript
expression.GetShadow();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShadow](../../ApiShadow/ApiShadow.md) \| null

## 示例

在电子表格中读取绘图对象的阴影并重复使用。

```javascript editor-xlsx
// Retrieve the shadow applied to one shape and apply the same shadow to another.

// Set a shadow on the first shape, read it with GetShadow, and apply it to a second shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, fill, stroke, 2, 0, 2, 0);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 }));
const shadow = shape.GetShadow();
const shape2 = worksheet.AddShape("ellipse", 100 * 36000, 50 * 36000, fill, stroke, 2, 0, 6, 0);
shape2.SetShadow(shadow);
```
