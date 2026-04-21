# SetIdentifier

设置文档标识符。

## 语法

```javascript
expression.SetIdentifier(sIdentifier);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sIdentifier | 必需 | string |  | 文档标识符。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中使用核心属性设置工作簿的标识符。

```javascript editor-xlsx
// How to set identifier for a core properties in a spreadsheet?

// Set identifier and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetIdentifier("#ID42");
const identifier = core.GetIdentifier();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Identifier: " + identifier);
```
