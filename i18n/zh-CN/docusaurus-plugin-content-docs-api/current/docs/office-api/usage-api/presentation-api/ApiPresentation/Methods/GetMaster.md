# GetMaster

按位置返回演示文稿中的幻灯片母版。

## 语法

```javascript
expression.GetMaster(nPos);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 演示文稿中的幻灯片母版位置 |

## 返回值

[ApiMaster](../../ApiMaster/ApiMaster.md) \| null

## 示例

此示例演示如何按位置获取演示文稿中的幻灯片母版。

```javascript editor-pptx
// How to get a slide master from the presentation.

// Get a slide master of the presentation using its index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const classType = master.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + classType);
slide.AddObject(shape);

```
