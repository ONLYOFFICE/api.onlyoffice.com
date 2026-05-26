# SetTabs

指定一系列自定义制表位，用于当前段落中的所有制表符。
- **警告**：aPos 数组和 aVal 数组的长度**必须**相等。

继承自 [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md)。

## 示例

在演示文稿中定义段落内的自定义制表位位置。

```javascript editor-pptx
// How do I add tabs to control text spacing in a presentation?

// Configure tab stops for text alignment using paragraph settings in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");
slide.AddObject(shape);
```
