# Delete

删除指定的绘图对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从工作表移除形状并在电子表格中确认移除。

```javascript editor-xlsx
// How do I permanently delete a shape that was placed on a sheet in a spreadsheet?

// Verify that a shape is gone by reporting the outcome inside another shape in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill1 = Api.CreateSolidFill(Api.RGB(80, 60, 100));
const fill2 = Api.CreateSolidFill(Api.RGB(60, 90, 80));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing1 = worksheet.AddShape(
	'rect',
	60 * 36000, 35 * 36000,
	fill1, stroke,
	0, 0, 0, 0
);
const drawing2 = worksheet.AddShape(
	'rect',
	60 * 36000, 35 * 36000,
	fill2, stroke,
	0, 0, 10, 0
);

const isDeleted = drawing1.Delete();

const content = drawing2.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('The first shape was deleted: ' + isDeleted);
```
