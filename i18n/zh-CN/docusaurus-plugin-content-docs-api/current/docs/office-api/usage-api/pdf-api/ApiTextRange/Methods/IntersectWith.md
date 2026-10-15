# IntersectWith

返回此范围与给定范围交集的新范围。当前范围不会更改。

## 语法

```javascript
expression.IntersectWith(range);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| range | 必需 | [ApiTextRange](../../ApiTextRange/ApiTextRange.md) |  | 未提供描述。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在 PDF 页面的形状中获取两个文本范围的公共部分。

```javascript editor-pdf
// The result is null when the two ranges do not overlap.

// Underline the fragment that belongs to both ranges.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

const first = range.GetRange(0, 8);
const second = range.GetRange(4, 11);
const common = first.IntersectWith(second);
common.SetUnderline(true);

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("IntersectWith: " + common.GetText());
```
