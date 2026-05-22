# SetCategory

设置文档类别。

## 语法

```javascript
expression.SetCategory(sCategory);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCategory | 必需 | string |  | 文档类别。 |

## 返回值

此方法不返回任何数据。

## 示例

通过电子表格的文档属性为工作簿分配类别标签。

```javascript editor-xlsx
// How do I set a category for a workbook in a spreadsheet?

// Store a descriptive category in the metadata fields of the file in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetCategory("Examples");
const category = core.GetCategory();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Category: " + category);
```
