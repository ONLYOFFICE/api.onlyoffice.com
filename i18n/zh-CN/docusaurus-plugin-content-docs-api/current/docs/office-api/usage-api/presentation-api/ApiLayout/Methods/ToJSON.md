# ToJSON

将 ApiLayout 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteMaster, bWriteTableStyles);
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteMaster | 可选 | boolean | false | 指定是否将幻灯片母版写入 JSON 对象。 |
| bWriteTableStyles | 可选 | boolean | false | 指定是否将使用的表格样式写入 JSON 对象（true）或否（false）。 |

## 返回值

JSON

## 示例

在演示文稿中将布局导出为 JSON 数据。

```javascript editor-pptx
// How do I save a layout's configuration as JSON in a presentation?

// Convert a layout to JSON format and recreate it in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const json = layout.ToJSON(true, false);
const layoutFromJSON = Api.FromJSON(json);
master.AddLayout(0, layoutFromJSON);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const classType = layoutFromJSON.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);
layoutFromJSON.AddObject(shape);
slide.ApplyLayout(layoutFromJSON);
```
