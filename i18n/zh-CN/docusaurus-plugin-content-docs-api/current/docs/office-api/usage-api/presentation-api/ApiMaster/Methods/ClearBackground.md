# ClearBackground

清除幻灯片母版背景。

## 语法

```javascript
expression.ClearBackground();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例清除幻灯片母版背景。

```javascript editor-pptx
// How to remove a background from a master.

// Clear background from a master object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const master = presentation.GetMaster(0);
master.ClearBackground();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
master.AddObject(shape);

```
