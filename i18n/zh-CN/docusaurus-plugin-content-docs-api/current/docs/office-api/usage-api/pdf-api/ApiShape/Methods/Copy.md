# Copy

创建当前形状的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

复制形状并将副本放在 PDF 的另一页上。

```javascript editor-pdf
// Make a copy of a shape in a PDF.

// Create an exact duplicate of a shape and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const copyShape = shape.Copy();
const newPage = doc.AddPage(0);
newPage.AddObject(copyShape);
```
