# GetLayoutsCount

返回版式对象的数量。

## 语法

```javascript
expression.GetLayoutsCount();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取幻灯片母版中的布局总数。

```javascript editor-pptx
// The GetLayoutsCount method returns the number of layout objects in the master.

// Display the layout count in a text shape on the presentation slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layoutsCount = master.GetLayoutsCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of layouts = " + layoutsCount);
slide.AddObject(shape);
```
