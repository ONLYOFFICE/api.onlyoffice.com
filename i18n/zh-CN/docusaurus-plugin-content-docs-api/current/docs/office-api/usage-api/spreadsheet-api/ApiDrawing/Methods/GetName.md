# GetName

返回当前绘图的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example shows how to get the name of a drawing object.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(80), Api.MillimetersToEmus(40),
	fill, stroke,
	0, 0, 1, 0
);

drawing.SetName('MyRectangle');
const drawingName = drawing.GetName();
worksheet.GetRange('A1').SetValue('Drawing name: ' + drawingName);

```
