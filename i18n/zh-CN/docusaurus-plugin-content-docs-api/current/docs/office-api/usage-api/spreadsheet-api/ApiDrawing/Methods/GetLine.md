# GetLine

从当前图形对象获取轮廓属性。

## 语法

```javascript
expression.GetLine();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md) \| null

## 示例

在电子表格中通过基础 ApiDrawing 接口获取绘图对象的轮廓。

```javascript editor-xlsx
// GetLine returns the ApiStroke of a drawing object, or null when no outline is set.

// Read the outline width from a shape and write it into a cell.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
const drawing = worksheet.AddShape("rect", 90 * 36000, 27 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
const currentLine = drawing.GetLine();
if (currentLine) {
	worksheet.GetRange("A1").SetValue("Outline width (EMU): " + currentLine.GetWidth());
}
```
