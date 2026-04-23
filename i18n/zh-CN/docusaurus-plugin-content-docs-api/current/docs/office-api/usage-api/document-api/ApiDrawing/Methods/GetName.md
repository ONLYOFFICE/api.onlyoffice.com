# GetName

返回当前绘图的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取绘图的名称。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', Api.MillimetersToEmus(80), Api.MillimetersToEmus(40), fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetName('MyRectangle');

const shapeName = drawing.GetName();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Drawing name: ' + shapeName);
doc.Push(paragraph2);

```
