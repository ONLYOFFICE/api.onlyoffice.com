# GetVisitor

返回用于遍历当前幻灯片母版（并可按需遍历其版式）的图形对象和文本的访问器对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetVisitor();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPresentationVisitor](../../ApiPresentationVisitor/ApiPresentationVisitor.md)

## 示例

使用母版访问者将幻灯片母版及其版式中的所有文本片段设为粗体。

```javascript editor-pptx
// How do I apply the same formatting to all text on a slide master and its layouts?

// Get the first master, add a shape with text to it and set bold for all its runs.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(80, 80, 80));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 6000000);
shape.GetDocContent().GetElement(0).AddText("Company confidential");
master.AddObject(shape);

const visitor = master.GetVisitor();
visitor.Run = function (run) {
	run.SetBold(true);
	return true;
};
visitor.Traverse({layouts: true});
```
