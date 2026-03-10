# CreateNumbering

使用 numType 参数指定的编号字符或符号为段落创建项目符号。

## 语法

```javascript
expression.CreateNumbering(numType, startAt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numType | 必需 | [BulletType](../../Enumeration/BulletType.md) |  | 段落将使用的编号类型。 |
| startAt | 必需 | number |  | 第一个编号段落的起始编号。 |

## 返回值

[ApiBullet](../../ApiBullet/ApiBullet.md)

## 示例

此示例为段落创建项目符号。

```javascript editor-pptx
// How to create a numbered paragraph specifying its numerical.

// Add numbered paragraph to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
paragraph = Api.CreateParagraph();
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
