# SetLastPrinted

设置文档最后打印的日期。

## 语法

```javascript
expression.SetLastPrinted(oLastPrinted);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oLastPrinted | 必需 | Date |  | 文档最后打印的日期。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格工作簿的文档属性中保存最近的打印日期。

```javascript editor-xlsx
// How do I log the last time a workbook was printed in a spreadsheet?

// Capture the date a workbook was last sent to the printer and store it in the metadata in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLastPrinted(new Date());
const lastPrintedDate = core.GetLastPrinted().toDateString();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);
```
