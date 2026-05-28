# SetPosition

指定此文本块的文本相对于周围非定位文本的默认
基线升高或降低的量。

## 语法

```javascript
expression.SetPosition(nPosition);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位指定正值（上标文本）或负值（下标文本）的度量值。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

调整演示文稿中文本相对于基线的位置。

```javascript editor-pptx
// Raise or lower text to create superscript or subscript effects.

// Create text runs and position them above or below the baseline.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the text raised 10 half-points.");
paragraph.AddElement(run);
run.SetPosition(10);

run = Api.CreateRun();
run.AddText("This is a text run with the text lowered 16 half-points.");
paragraph.AddElement(run);
run.SetPosition(-16);
slide.AddObject(shape);
```
