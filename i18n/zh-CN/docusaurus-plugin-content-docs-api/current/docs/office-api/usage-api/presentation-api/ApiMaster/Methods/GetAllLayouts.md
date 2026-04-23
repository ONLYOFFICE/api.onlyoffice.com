# GetAllLayouts

返回幻灯片母版中的所有版式。

## 语法

```javascript
expression.GetAllLayouts();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiLayout](../../ApiLayout/ApiLayout.md)[]

## 示例

此示例演示如何获取指定幻灯片母版的所有版式。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

slide.RemoveAllObjects();
master.RemoveLayout(0, master.GetAllLayouts().length);

const layoutsCount = 3;
for (let i = 0; i < layoutsCount; i++) {
	const layout = Api.CreateLayout();
	master.AddLayout(0, layout);
}

const labelFill = Api.CreateSolidFill(Api.RGB(210, 230, 250));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 3 * 36000);
slide.AddObject(label);

const layouts = master.GetAllLayouts();
const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Number of master slide layouts: ' + layouts.length);

```
