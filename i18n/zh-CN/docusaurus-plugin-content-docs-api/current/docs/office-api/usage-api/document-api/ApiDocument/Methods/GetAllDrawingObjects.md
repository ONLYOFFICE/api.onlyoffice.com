# GetAllDrawingObjects

从文档内容返回绘图对象集合。

继承自 [ApiDocumentContent.GetAllDrawingObjects](../../ApiDocumentContent/Methods/GetAllDrawingObjects.md)。

## 语法

```javascript
expression.GetAllDrawingObjects();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

获取文档中的所有绘图对象。

```javascript editor-docx
// How do I collect every drawing object present in a document?

// Apply a new fill color to the first drawing when you need to highlight it visually.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(51, 51, 51), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing1);
let drawing2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
drawing2.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
drawing2.SetSeriesFill(fill, 1, false);
drawing2.SetVerAxisTitle("USD In Hundred Thousands", 10);
drawing2.SetHorAxisTitle("Year", 11);
drawing2.SetLegendPos("bottom");
drawing2.SetShowDataLabels(false, false, true, false);
drawing2.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(drawing2);
let drawings = doc.GetAllDrawingObjects();
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
drawings[0].Fill(fill);
```
