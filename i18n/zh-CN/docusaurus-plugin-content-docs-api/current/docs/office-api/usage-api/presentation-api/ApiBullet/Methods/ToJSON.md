# ToJSON

将 ApiBullet 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiBullet](../ApiBullet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

在演示文稿中将项目符号转换为其 JSON 表示形式。

```javascript editor-pptx
// ToJSON serializes an ApiBullet created with Api.CreateBullet so it can be stored or transferred.

// Create a character bullet, apply it to a paragraph, and write its JSON string into the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" Bulleted paragraph.");
const json = bullet.ToJSON();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText("Bullet JSON: " + json);
docContent.Push(newParagraph);
slide.AddObject(shape);
```
