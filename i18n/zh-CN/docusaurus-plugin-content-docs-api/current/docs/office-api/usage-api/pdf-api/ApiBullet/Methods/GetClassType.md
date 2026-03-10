# GetClassType

返回 ApiBullet 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiBullet](../ApiBullet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"bullet"

## 示例

This example gets a type of ApiBullet class and inserts it into the pdf document.

```javascript editor-pdf
// How get a class type of ApiBullet.

// Retrieve class type of ApiBullet object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");

const classType = bullet.GetClassType();
const newParagraph = Api.CreateParagraph();
newParagraph.SetJc("left");
newParagraph.AddText("Class Type = " + classType);
docContent.Push(newParagraph);
page.AddObject(shape);

```
