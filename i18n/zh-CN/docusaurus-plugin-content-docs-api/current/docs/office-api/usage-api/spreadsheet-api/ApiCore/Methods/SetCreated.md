# SetCreated

设置文档创建日期。

## 语法

```javascript
expression.SetCreated(oCreated);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCreated | 必需 | Date |  | 文档创建日期。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格的工作簿文档属性中写入创建日期。

```javascript editor-xlsx
// How do I set the creation date recorded for a workbook in a spreadsheet?

// Store a specific date as the origin timestamp for the file in a spreadsheet.

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
