# GetClassType

返回 ApiCustomProperties 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomProperties](../ApiCustomProperties.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customProperties"

## 示例

此示例演示如何获取 ApiCustomProperties 的类类型。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();
const classType = customProps.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);

```
