# SetLastModifiedBy

设置最后修改文档的用户名称。

## 语法

```javascript
expression.SetLastModifiedBy(sLastModifiedBy);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLastModifiedBy | 必需 | string |  | 最后修改文档的用户名称。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中记录最后编辑工作簿的人员姓名。

```javascript editor-xlsx
// How do I store the last editor's name in a workbook's metadata in a spreadsheet?

// Track who made the most recent changes by writing their name to the document properties in a spreadsheet.

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
