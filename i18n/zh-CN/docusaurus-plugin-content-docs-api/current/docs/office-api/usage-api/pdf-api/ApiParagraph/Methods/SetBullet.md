# SetBullet

设置当前段落的项目符号或编号。

## 语法

```javascript
expression.SetBullet(oBullet);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | 必需 | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | 使用 [Api#CreateBullet](../../Api/Methods/CreateBullet.md) 或 [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) 方法创建的项目符号对象。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置当前段落的项目符号或编号。

```javascript editor-pdf
// How to set a bullet type to the paragraph properties.

// Create a bulleted paragraph setting its bullet type.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
const bullet = Api.CreateBullet("-");
paraPr.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
page.AddObject(shape);

```
