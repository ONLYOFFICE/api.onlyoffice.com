# GetCreator

返回文档作者。

## 语法

```javascript
expression.GetCreator();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取电子表格中当前工作簿的创建者（使用核心属性）。

```javascript editor-xlsx
// How to get the creator for a core properties in a spreadsheet?

// Get the creator and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetCreator("John Smith");
const creator = core.GetCreator();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Creator: " + creator);
```
