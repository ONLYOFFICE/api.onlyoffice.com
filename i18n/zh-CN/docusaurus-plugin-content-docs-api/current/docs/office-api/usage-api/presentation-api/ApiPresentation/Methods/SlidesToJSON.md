# SlidesToJSON

将当前 ApiPresentation 对象中的幻灯片转换为 JSON 对象。

## 语法

```javascript
expression.SlidesToJSON(nStart, nStart, bWriteLayout, bWriteMaster, bWriteAllMasLayouts, bWriteTableStyles);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStart | 可选 | boolean | 0 | 起始幻灯片的索引。 |
| nStart | 可选 | boolean | ApiPresentation.GetSlidesCount() - 1 | 结束幻灯片的索引。 |
| bWriteLayout | 可选 | boolean | false | 指定是否将幻灯片版式写入 JSON 对象。 |
| bWriteMaster | 可选 | boolean | false | 指定是否将幻灯片母版写入 JSON 对象（如果 bWriteLayout === false，则 bWriteMaster 为 false）。 |
| bWriteAllMasLayouts | 可选 | boolean | false | 指定是否将幻灯片母版中的所有子版式写入 JSON 对象。 |
| bWriteTableStyles | 可选 | boolean | false | 指定是否将使用的表格样式写入 JSON 对象（true）或否（false）。 |

## 返回值

JSON[]

## 示例

此示例演示如何将当前 ApiPresentation 对象中的幻灯片转换为 JSON 对象。

```javascript editor-pptx
// How to convert slides to JSON objects.

// Get JSON representations of each slide from the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const json = presentation.SlidesToJSON(0, 0, true, true, true, true);
const allSlidesFromJSON = Api.FromJSON(json);
const slideFromJSON = allSlidesFromJSON[0];
presentation.AddSlide(slideFromJSON);
const classType = slideFromJSON.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawing);

const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);

```
