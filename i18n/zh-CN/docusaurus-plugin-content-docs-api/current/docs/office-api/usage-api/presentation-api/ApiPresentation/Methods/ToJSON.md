# ToJSON

将 ApiPresentation 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteTableStyles);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteTableStyles | 可选 | boolean | false | 指定是否将使用的表格样式写入 JSON 对象（true）或否（false）。 |

## 返回值

JSON

## 示例

此示例演示如何将 ApiPresentation 对象转换为 JSON 对象。

```javascript editor-pptx
// How to convert the presentation object to JSON objects.

// Get JSON representations of each slide from the presentation.

const presentation = Api.GetPresentation();
const json = presentation.ToJSON(true);
const presentationFromJSON = Api.FromJSON(json);
const slide = presentationFromJSON.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const classType = presentationFromJSON.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);
slide.AddObject(shape);

```
