# GetClassType

返回 ApiSlideShowTransition 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"slideShowTransition"

## 示例

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFade');
transition.SetSpeed('medium');
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const classType = retrievedTransition.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 130 * 36000, fill, stroke);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText("Class Type = " + classType);
slide.AddObject(shape);

```
