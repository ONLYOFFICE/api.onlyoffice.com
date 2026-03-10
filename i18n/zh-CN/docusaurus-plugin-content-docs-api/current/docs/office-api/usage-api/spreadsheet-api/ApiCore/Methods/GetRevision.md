# GetRevision

返回文档修订版本。

## 语法

```javascript
expression.GetRevision();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取当前工作簿的修订版本。

```javascript editor-xlsx
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
