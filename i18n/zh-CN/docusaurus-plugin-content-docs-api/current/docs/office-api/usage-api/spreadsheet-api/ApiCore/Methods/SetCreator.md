# SetCreator

设置文档作者。

## 语法

```javascript
expression.SetCreator(sCreator);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCreator | 必需 | string |  | 文档作者。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格工作簿的文档属性分配作者姓名。

```javascript editor-xlsx
// How do I record who created a workbook in a spreadsheet?

// Store the author's identity in the workbook metadata in a spreadsheet.

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
