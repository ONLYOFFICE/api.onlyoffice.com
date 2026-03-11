# GetLayoutByType

返回与幻灯片母版的指定版式类型对应的版式。

## 语法

```javascript
expression.GetLayoutByType(sType);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [LayoutType](../../Enumeration/LayoutType.md) |  | 版式类型。 |

## 返回值

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## 示例

此示例根据类型从幻灯片母版返回布局。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayoutByType('title');

const fill = Api.CreateSolidFill(Api.RGB(216, 228, 188));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
if (layout) {
  paragraph.AddText('Layout found: ' + layout.GetClassType());
} else {
  paragraph.AddText('Layout not found.');
}
slide.AddObject(shape);

```
