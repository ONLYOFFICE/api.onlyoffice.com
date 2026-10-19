# SetName

设置当前绘图对象的名称。

如果已存在同名的其他绘图对象，该绘图对象的名称将被重置为自动生成的默认名称。OLE 对象不支持自定义名称，因此对于 OLE 对象，此方法始终返回 false。

继承自 [ApiDrawing.SetName](../../ApiDrawing/Methods/SetName.md)。

## 语法

```javascript
expression.SetName(name);
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 将设置到当前绘图的名称。 |

## 返回值

boolean

## 示例

为绘图分配自定义名称以便在电子表格中通过该名称识别。

```javascript editor-xlsx
// How do I give a drawing a recognizable label in a spreadsheet?

// Label a shape with a specific name to make it easier to reference later in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(80, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape(
	'ellipse',
	Api.MillimetersToEmus(60), Api.MillimetersToEmus(40),
	fill, stroke,
	0, Api.MillimetersToEmus(20),
	0, Api.MillimetersToEmus(30)
);

drawing.SetName('BlueEllipse');
const content = drawing.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Name: ' + drawing.GetName());

worksheet.GetRange('A1').SetValue('Drawing name was set to: ' + drawing.GetName());
```
