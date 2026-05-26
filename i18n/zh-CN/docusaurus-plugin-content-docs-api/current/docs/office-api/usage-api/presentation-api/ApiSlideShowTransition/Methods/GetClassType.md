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

检查幻灯片放映切换效果返回的类类型。

```javascript editor-pptx
// Retrieve the class type identifier from a slide show transition object.

// Display the class type in a shape on the slide.

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
