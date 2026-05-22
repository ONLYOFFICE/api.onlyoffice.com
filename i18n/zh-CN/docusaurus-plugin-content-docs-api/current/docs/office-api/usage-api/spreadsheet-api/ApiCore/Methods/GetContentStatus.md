# GetContentStatus

返回文档内容状态。

## 语法

```javascript
expression.GetContentStatus();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格工作簿属性中存储的内容状态。

```javascript editor-xlsx
// How do I check the current content status of a workbook in a spreadsheet?

// Retrieve and display the publication or review status of a workbook in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();
core.SetContentStatus("Final");
const contentStatus = core.GetContentStatus();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);
```
