# GetVisitor

返回用于遍历当前图形对象文本（包括组合中嵌套的图形对象）的访问器对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

继承自 [ApiDrawing.GetVisitor](../../ApiDrawing/Methods/GetVisitor.md)。

## 语法

```javascript
expression.GetVisitor();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPresentationVisitor](../../ApiPresentationVisitor/ApiPresentationVisitor.md)

## 示例

使用图形访问者读取组合中每个形状的文本。

```javascript editor-pptx
// How do I get the text of grouped shapes in a presentation without ungrouping them?

// Group two shapes with text and collect the text of the group's children.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const first = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
first.SetPosition(608400, 1267200);
first.GetDocContent().GetElement(0).AddText("Left");
const second = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
second.SetPosition(6000000, 1267200);
second.GetDocContent().GetElement(0).AddText("Right");
const group = Api.CreateGroup([first, second]);
slide.AddObject(group);

const found = [];
const visitor = group.GetVisitor();
visitor.Text = function (text) {
	found.push(text);
	return false;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Grouped text: " + found.join(", "));
slide.AddObject(result);
```
