# AddText

在指定位置添加文本。当前范围会扩展以包含添加的文本。

## 语法

```javascript
expression.AddText(text, position);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | String |  | 将要添加的文本。 |
| position | 可选 | "after" \| "before" | "after" | 将添加文本的位置（在指定范围“之前”或“之后”）。 |

## 返回值

boolean

## 示例

在 PDF 页面的形状中向文本范围添加文本。

```javascript editor-pdf
// The range grows to include the added text.

// Append a word after the range.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello");

const range = shape.GetTextRange();

range.AddText(" World", "after");

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("AddText: " + shape.GetTextRange().GetText());
```
