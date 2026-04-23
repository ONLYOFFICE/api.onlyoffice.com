# SetSubject

设置文档主题。

## 语法

```javascript
expression.SetSubject(sSubject);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSubject | 必需 | string |  | 文档主题。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置工作簿的主题。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetSubject("ApiCore Method Showcase");
const subject = core.GetSubject();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Subject: " + subject);

```
