# GetClassType

返回 ApiCore 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"core"

## 示例

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
const classType = core.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(0, 2 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type: " + classType);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
