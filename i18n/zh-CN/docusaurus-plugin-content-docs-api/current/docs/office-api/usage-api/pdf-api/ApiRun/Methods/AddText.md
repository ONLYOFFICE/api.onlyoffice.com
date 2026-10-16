# AddText

向当前文本块添加文本。

## 语法

```javascript
expression.AddText(text, widths);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| number[] |  | 要添加到当前文本块的文本。可以是字符串或 Unicode 码位数组。 |
| widths | 可选 | number[] |  | 字符宽度数组（以毫米为单位）。其长度应与 "text" 参数中传递的码位数组相同。指定宽度后，添加的字符将严格保持这些宽度。 |

## 返回值

boolean

## 示例

在 PDF 中向文本元素插入文本内容。

```javascript editor-pdf
// How do I add text to a text run in a PDF?

// Place text on the page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
page.AddObject(shape);
```
