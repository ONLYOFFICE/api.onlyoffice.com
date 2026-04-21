# SetTabs

指定将用于当前段落中任何制表符的自定义制表位序列。
-**警告**：aPos 数组和 aVal 数组的长度-**必须**相等。

继承自 [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md)。

## 示例

在 PDF 文档中设置一系列自定义制表位，用于段落中的所有制表符。

```javascript editor-pdf
// How to set the size of a spacing tabs from a paragraph properties in a PDF document.

// Change a tabs size property of a paragraph properties in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
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
page.AddObject(shape);
```
