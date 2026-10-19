# SetFill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.SetFill](../../ApiDrawing/Methods/SetFill.md)。

## 语法

```javascript
expression.SetFill(fill);
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充图形对象的填充类型。 |

## 返回值

boolean

## 示例

在电子表格中为形状和图像设置填充格式属性。

```javascript editor-xlsx
// SetFill applies an ApiFill to any drawing object added to a worksheet, not only shapes.

// Fill a shape with a solid color and an image with a semi-transparent overlay.

const worksheet = Api.GetActiveSheet();
const noFill = Api.CreateNoFill();
const stroke = Api.CreateStroke(0, noFill);
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(60), Api.MillimetersToEmus(40),
	noFill, stroke,
	1, 0, 1, 0
);
const shapeFill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
shape.SetFill(shapeFill);
worksheet.GetRange('A1').SetValue('Shape fill changed to blue-grey.');

const image = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	Api.MillimetersToEmus(40), Api.MillimetersToEmus(40),
	8, 0, 1, 0
);
const imageFill = Api.CreateSolidFill(Api.RGBA(38, 50, 56, 180));
image.SetFill(imageFill);
worksheet.GetRange('H1').SetValue('Image with semi-transparent fill overlay.');
```
