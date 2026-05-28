# SetBullet

设置当前段落的项目符号或编号。

## 语法

```javascript
expression.SetBullet(oBullet);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | 必需 | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | 使用 [Api#CreateBullet](../../Api/Methods/CreateBullet.md) 或 [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) 方法创建的项目符号对象。 |

## 返回值

此方法不返回任何数据。

## 示例

在演示文稿中为段落添加项目符号。

```javascript editor-pptx
// How do I apply a bullet style to a paragraph in a presentation?

// Format a paragraph to display with a custom bullet character in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
const bullet = Api.CreateBullet("-");
paraPr.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
slide.AddObject(shape);
```
