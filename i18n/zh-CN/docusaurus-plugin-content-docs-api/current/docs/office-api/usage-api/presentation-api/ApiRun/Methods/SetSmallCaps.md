# SetSmallCaps

指定此文本运行中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean |  | 指定当前运行的内容是否显示为小两磅的大写字母。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定此文本运行中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。

```javascript editor-pptx
// How to make text uncapitalized.

// Create a new text run and make its letters lowercase.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetSmallCaps(true);
run.AddText("This is a text run with the font set to small capitalized letters.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
