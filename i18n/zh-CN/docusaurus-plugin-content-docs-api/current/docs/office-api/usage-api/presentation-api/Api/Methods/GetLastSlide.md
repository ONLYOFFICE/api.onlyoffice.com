# GetLastSlide

返回演示文稿的最后一张幻灯片。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetLastSlide();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md)

## 示例

访问演示文稿的最后一张幻灯片。

```javascript editor-pptx
// How can I retrieve the last slide in a presentation in a presentation?

// Select the last slide and modify its contents in a presentation.

const presentation = Api.GetPresentation();
const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);

const slide = Api.GetLastSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
