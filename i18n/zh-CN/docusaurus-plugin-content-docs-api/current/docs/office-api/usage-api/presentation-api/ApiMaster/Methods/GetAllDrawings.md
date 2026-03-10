# GetAllDrawings

返回包含幻灯片母版中所有绘图对象的数组。

## 语法

```javascript
expression.GetAllDrawings();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

此示例演示如何获取包含幻灯片母版中所有绘图对象的数组。

```javascript editor-pptx
// How to get all drawings from the master of presentation.

// Get all drawings from the presentation as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.RemoveAllObjects();
master.AddObject(drawing);

const allDrawings = master.GetAllDrawings();
const placeholder = Api.CreatePlaceholder("picture");
allDrawings[0].SetPlaceholder(placeholder);

```
