# SetLanguage

设置文档语言。

## 语法

```javascript
expression.SetLanguage(sLanguage);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLanguage | 必需 | string |  | 文档语言。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何使用 ApiCore 设置工作簿的语言。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLanguage("en-US");
const language = core.GetLanguage();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Language: " + language);

```
