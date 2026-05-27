# GetLine

从当前形状获取轮廓属性。

## 语法

```javascript
expression.GetLine();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md) \| null

## 示例

从 PDF 中的形状检索边框属性。

```javascript editor-pdf
// How do I read the outline details of a shape in a PDF?

// View the border information including width and color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2.5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let retrievedStroke = shape.GetLine();
if (retrievedStroke) {
    paragraph.AddText("Stroke type: " + retrievedStroke.GetClassType());
    paragraph.AddLineBreak();
    let width = retrievedStroke.GetWidth();
    paragraph.AddText("Width: " + width + " EMU (" + (width / 12700).toFixed(2) + " pt)");
    paragraph.AddLineBreak();
    let strokeFill = retrievedStroke.GetFill();
    if (strokeFill) {
        paragraph.AddText("Fill type: " + strokeFill.GetType());
    }
    paragraph.AddLineBreak();
    let dashType = retrievedStroke.GetDashType();
    paragraph.AddText("Dash type: " + (dashType ? '"' + dashType + '"' : "not set"));
}
```
