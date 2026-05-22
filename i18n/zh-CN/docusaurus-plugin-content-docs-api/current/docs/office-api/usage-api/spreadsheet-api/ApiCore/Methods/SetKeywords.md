# SetKeywords

设置文档关键字。

## 语法

```javascript
expression.SetKeywords(sKeywords);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKeywords | 必需 | string |  | 字符串格式的文档关键字。 |

## 返回值

此方法不返回任何数据。

## 示例

向电子表格工作簿的文档属性添加可搜索的关键词。

```javascript editor-xlsx
// How do I attach search tags to a workbook's metadata in a spreadsheet?

// Tag the workbook with descriptive terms that make it easier to find in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetKeywords("Example; ApiCore; Workbook");
const keywords = core.GetKeywords();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Keywords: " + keywords);
```
