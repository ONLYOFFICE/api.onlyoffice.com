# SetCaps

指定文本块中的任何小写字符仅格式化显示为其对应的大写字母。

## 语法

```javascript
expression.SetCaps(isCaps);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | 必需 | boolean |  | 指定当前文本块的内容显示为大写。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在 PDF 中将小写字母显示为大写。

```javascript editor-pdf
// How do I convert text to all capitals in a PDF?

// Apply uppercase formatting to all text characters in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetCaps(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape set to capital letters using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
```
