# CreateBullet

使用 sSymbol 参数指定的字符或符号为段落创建项目符号。

## 语法

```javascript
expression.CreateBullet(sSymbol);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSymbol | 必需 | string |  | 将用于为段落创建项目符号的字符或符号。 |

## 返回值

[ApiBullet](../../ApiBullet/ApiBullet.md)

## 示例

此示例演示如何创建项目符号。

```javascript editor-pptx
// How to add a bullet to the paragraph.

// Add bulleted paragraph.

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
paragraph.AddText(" This is an example of the bulleted paragraph.");
slide.AddObject(shape);

```
