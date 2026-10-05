# SetTabs

指定将用于当前段落中任何制表符的自定义制表位序列。

:::warning
aPos 和 aVal 数组的长度必须相等。
:::

继承自 [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md)。

## 语法

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | 必需 | [twips](../../Enumeration/twips.md)[] |  | 相对于当前页面边距的自定义制表位位置数组，以二十分之一磅（1/1440 英寸）为单位。 |
| aVal | 必需 | [TabJc](../../Enumeration/TabJc.md)[] |  | 自定义制表位样式数组，用于确定制表位的行为以及在当前自定义制表位处输入的文本所应用的对齐方式。 |

## 返回值

boolean

## 示例

在 PDF 中为段落文本配置自定义制表位位置。

```javascript editor-pdf
// How do I set up custom tabs for indentation in a PDF?

// Define tab alignment and spacing for text in a PDF.

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
paragraph.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");
page.AddObject(shape);
```
