# GetDrawingsByName

返回按名称筛选的文档绘图对象集合。

## 语法

```javascript
expression.GetDrawingsByName(ids);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ids | 必需 | string[] |  | 用于筛选的图形名称数组。 |

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)[]

## 示例

按名称检索特定绘图并在文档中旋转它们。

```javascript editor-docx
// How do I find drawings by their names and apply a transformation in a document?

// Select a subset of shapes from the page and change their orientation in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing1 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill1, stroke1);
drawing1.SetName("MyShape1");
paragraph.AddDrawing(drawing1);
const fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing2 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill2, stroke2);
drawing2.SetName("MyShape2");
paragraph.AddDrawing(drawing2);
const fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
const stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing3 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill3, stroke3);
drawing3.SetName("DifferentShape");
paragraph.AddDrawing(drawing3);
const drawings = doc.GetDrawingsByName(["MyShape1", "MyShape2"]);
for (let i = 0; i < drawings.length; i++) {
	drawings[i].SetRotation(45);
}
```
