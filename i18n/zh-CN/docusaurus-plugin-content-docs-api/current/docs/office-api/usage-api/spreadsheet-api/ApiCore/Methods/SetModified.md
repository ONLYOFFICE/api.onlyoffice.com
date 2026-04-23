# SetModified

设置文档最后修改的日期。

## 语法

```javascript
expression.SetModified(oModified);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oModified | 必需 | Date |  | 文档最后修改的日期。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置工作簿最后修改的日期。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetModified(new Date("10 March 1990"));
const lastModifiedDate = core.GetModified().toDateString();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);

```
