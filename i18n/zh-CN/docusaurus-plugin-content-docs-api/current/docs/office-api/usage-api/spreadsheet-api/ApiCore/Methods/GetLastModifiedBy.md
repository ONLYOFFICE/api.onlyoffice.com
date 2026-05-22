# GetLastModifiedBy

返回最后修改文档的用户名称。

## 语法

```javascript
expression.GetLastModifiedBy();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索电子表格中最后编辑工作簿的人员姓名。

```javascript editor-xlsx
// How do I find out who made the most recent change to a workbook in a spreadsheet?

// Look up the last editor's name recorded in the document properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLastModifiedBy("Mark Pottato");
const lastModifiedBy = core.GetLastModifiedBy();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);
```
