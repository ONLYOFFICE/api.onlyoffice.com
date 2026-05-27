# GetSubject

返回文档主题。

## 语法

```javascript
expression.GetSubject();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从电子表格工作簿文档属性读取主题字段。

```javascript editor-xlsx
// How do I find out what subject is recorded for a workbook in a spreadsheet?

// Fetch the subject text stored in the metadata of the file in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetSubject("ApiCore Method Showcase");
const subject = core.GetSubject();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Subject: " + subject);
```
