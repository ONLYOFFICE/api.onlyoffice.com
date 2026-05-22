# ToJSON

将 ApiColor 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 中将颜色转换为 JSON 格式。

```javascript editor-pdf
// How do I serialize a color object into JSON in a PDF?

// Transform the color into a JSON string and display it in the document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.RGB(64, 128, 192);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Color JSON:\n' + color.ToJSON());
paragraph.AddElement(run);
page.AddObject(shape);
```
