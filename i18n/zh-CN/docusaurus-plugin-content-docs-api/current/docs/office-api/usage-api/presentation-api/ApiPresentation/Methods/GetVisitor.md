# GetVisitor

返回用于遍历演示文稿的幻灯片、版式、母版、演讲者备注、图形对象和文本的访问器对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetVisitor();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPresentationVisitor](../../ApiPresentationVisitor/ApiPresentationVisitor.md)

## 示例

使用演示文稿访问者统计演示文稿中的文本片段数量。

```javascript editor-pptx
// How do I walk through every drawing and text run in a presentation, including grouped shapes?

// Create two shapes on the first slide and count their runs with a visitor.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const first = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
first.SetPosition(608400, 1267200);
first.GetDocContent().GetElement(0).AddText("First shape");
slide.AddObject(first);

const second = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
second.SetPosition(608400, 3600000);
second.GetDocContent().GetElement(0).AddText("Second shape");
slide.AddObject(second);

let runCount = 0;
const visitor = presentation.GetVisitor();
visitor.Run = function () {
	runCount += 1;
	return false;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 5000000);
result.GetDocContent().GetElement(0).AddText("Text runs found: " + runCount);
slide.AddObject(result);
```
