# SetTitle

设置文档标题。

## 语法

```javascript
expression.SetTitle(sTitle);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 文档标题。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置工作簿的标题。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetTitle("My Workbook Title");
const title = core.GetTitle();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Title: " + title);

```
