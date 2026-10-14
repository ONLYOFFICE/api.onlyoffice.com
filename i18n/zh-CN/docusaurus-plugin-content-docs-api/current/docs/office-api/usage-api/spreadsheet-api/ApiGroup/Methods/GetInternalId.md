# GetInternalId

返回当前绘图对象的内部 ID。

继承自 [ApiDrawing.GetInternalId](../../ApiDrawing/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取电子表格中绘图的内部标识符。

```javascript editor-xlsx
// Useful for keeping a reference to a drawing and finding it later with Api.GetByInternalId.

// Add a shape and write its internal ID to a cell of the spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke, 1, 0, 2, 0);
worksheet.GetRange('A1').SetValue('Shape internal ID: ' + shape.GetInternalId());
```
