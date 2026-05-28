# GetTheme

返回工作簿的主题。

## 语法

```javascript
expression.GetTheme();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTheme](../../ApiTheme/ApiTheme.md)

## 示例

读取工作簿的活动颜色主题并在电子表格的工作表上显示其名称。

```javascript editor-xlsx
// How do I find out which visual theme is applied to my workbook in a spreadsheet?

// Display the theme name inside a shape that is filled with one of the theme's accent colors in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();

const theme = workbook.GetTheme();
const themeName = theme.GetName();

const fill = Api.CreateSolidFill(Api.ThemeColor('accent3'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(40),
	fill, stroke,
	0, Api.MillimetersToEmus(2), 0, Api.MillimetersToEmus(3)
);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('This shape is filled with the theme color "Accent 3".');
paragraph.AddText('Change the theme to see the fill color of the shape changed accordingly.\n\n');
paragraph.AddText('Workbook theme: ' + themeName);
```
