# SetRevision

设置文档修订版本。

## 语法

```javascript
expression.SetRevision(sRevision);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRevision | 必需 | string |  | 文档修订版本。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格工作簿的文档属性中存储修订标签。

```javascript editor-xlsx
// How do I track the revision number of a workbook in a spreadsheet?

// Mark the workbook with a version string so collaborators know which revision they are viewing in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetRevision("Rev. A");
const revision = core.GetRevision();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Revision: " + revision);
```
