# GetRange

返回表示当前范围子范围的新 ApiTextRange。

## 语法

```javascript
expression.GetRange(start, rangeEnd);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 可选 | number | 0 | 相对于此范围开头的起始偏移量（从 0 开始）。 |
| rangeEnd | 可选 | number | -1 | 相对于此范围开头的结束偏移量。-1 表示此范围的末尾。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在 PDF 页面的形状中获取文本范围的子范围。

```javascript editor-pdf
// Positions are counted from the beginning of the text body, not of the parent range.

// Take the second word as a sub-range and make it bold.

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

const part = range.GetRange(6, 11);
part.SetBold(true);

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("GetRange: " + part.GetText());
```
