# ExpandTo

返回一个同时涵盖此范围和给定范围的新范围。当前范围不会更改。

## 语法

```javascript
expression.ExpandTo(range);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| range | 必需 | [ApiTextRange](../../ApiTextRange/ApiTextRange.md) |  | 未提供描述。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在 PDF 页面的形状中将两个文本范围合并为一个。

```javascript editor-pdf
// The union covers everything from the first start to the last end, including the text between them.

// Join the first and the last word and make the whole fragment italic.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello brave World");

const range = shape.GetTextRange();

const first = range.GetRange(0, 5);
const second = range.GetRange(12, 17);
const united = first.ExpandTo(second);
united.SetItalic(true);

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("ExpandTo: " + united.GetText());
```
