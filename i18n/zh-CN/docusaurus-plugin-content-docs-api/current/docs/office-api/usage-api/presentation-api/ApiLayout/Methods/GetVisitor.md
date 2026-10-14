# GetVisitor

返回用于遍历当前幻灯片版式的图形对象和文本的访问器对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetVisitor();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPresentationVisitor](../../ApiPresentationVisitor/ApiPresentationVisitor.md)

## 示例

使用版式访问者列出幻灯片版式上所有图形对象的名称。

```javascript editor-pptx
// How do I enumerate the placeholders and shapes of a slide layout, including grouped ones?

// Take the first layout of the first master and collect the names of its drawings.

const presentation = Api.GetPresentation();
const layout = presentation.GetMaster(0).GetLayout(0);

const names = [];
const visitor = layout.GetVisitor();
visitor.Drawing = function (drawing) {
	names.push(drawing.GetName() || drawing.GetClassType());
	return false;
};
visitor.Traverse();

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 1267200);
result.GetDocContent().GetElement(0).AddText("Layout drawings: " + names.join(", "));
slide.AddObject(result);
```
