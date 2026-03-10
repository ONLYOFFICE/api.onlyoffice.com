# SetVertAlign

指定将应用于当前运行内容相对于文本运行默认外观的对齐方式：
-**"baseline"** - 当前文本运行中的字符将按默认文本基线对齐。
-**"subscript"** - 当前文本运行中的字符将对齐到默认文本基线下方。
-**"superscript"** - 当前文本运行中的字符将对齐到默认文本基线上方。

## 语法

```javascript
expression.SetVertAlign(sType);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "baseline" \| "subscript" \| "superscript" |  | 应用于文本内容的垂直对齐类型。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定将应用于当前运行内容相对于文本运行默认外观的对齐方式。

```javascript editor-pdf
// How to change a vertical alignment of a text run.

// Create a new text run and make it subscript, baseline or superscript.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetVertAlign("subscript");
run.AddText("This is a text run with the text aligned below the baseline vertically. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetVertAlign("baseline");
run.AddText("This is a text run with the text aligned by the baseline vertically. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetVertAlign("superscript");
run.AddText("This is a text run with the text aligned above the baseline vertically.");
paragraph.AddElement(run);
page.AddObject(shape);

```
