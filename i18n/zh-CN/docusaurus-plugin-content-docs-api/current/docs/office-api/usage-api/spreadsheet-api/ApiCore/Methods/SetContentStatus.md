# SetContentStatus

设置文档内容状态。

## 语法

```javascript
expression.SetContentStatus(sStatus);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStatus | 必需 | string |  | 文档内容状态。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格的工作簿文档属性中记录内容状态值。

```javascript editor-xlsx
// How do I mark the content status of a workbook in a spreadsheet?

// Save a status label such as "Final" or "Draft" in the file metadata in a spreadsheet.

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
