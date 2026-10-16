# GetType

返回底纹类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiShd](../ApiShd.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ShdType](../../Enumeration/ShdType.md)

## 示例

检索 PDF 中底纹对象的类型。

```javascript editor-pdf
// Check whether a shading fills the background before applying it in a PDF.

// Shade the text of a shape and write the shading type into it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const shd = Api.CreateShd('clear', Api.Color('#E2EFDA'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('Shading type = ' + shd.GetType());
paragraph.AddElement(run);
page.AddObject(shape);
```
