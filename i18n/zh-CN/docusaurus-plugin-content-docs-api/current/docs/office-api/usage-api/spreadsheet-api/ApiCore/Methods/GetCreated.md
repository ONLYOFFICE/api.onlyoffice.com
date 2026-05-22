# GetCreated

返回文档创建日期。

## 语法

```javascript
expression.GetCreated();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date

## 示例

读取电子表格工作簿属性中记录的创建日期。

```javascript editor-xlsx
// How do I find out when a workbook was originally created in a spreadsheet?

// Retrieve and display the date the workbook was first made in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetCreated(new Date('20 January 2000'));
const createdDate = core.GetCreated().toDateString();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Created: " + createdDate);
```
