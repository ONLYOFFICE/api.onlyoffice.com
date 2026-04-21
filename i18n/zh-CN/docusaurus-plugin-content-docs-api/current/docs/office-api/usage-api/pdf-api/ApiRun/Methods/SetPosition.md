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
| nPosition | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位指定正值（升高文本）或负值（降低文本）。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

指定在 PDF 文档中此 run 的文本相对于周围非定位文本的默认基线升高或降低的量。

```javascript editor-pdf
// How to change inline position of the text in a PDF document.

// Create a new text run and make its position lower or higher in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the text raised 10 half-points.");
paragraph.AddElement(run);
run.SetPosition(10);

run = Api.CreateRun();
run.AddText("This is a text run with the text lowered 16 half-points.");
paragraph.AddElement(run);
run.SetPosition(-16);
page.AddObject(shape);
```
