# CreateSlideShowTransition

创建新的幻灯片放映切换对象。

## 语法

```javascript
expression.CreateSlideShowTransition();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlideShowTransition](../../ApiSlideShowTransition/ApiSlideShowTransition.md)

## 示例

在演示文稿中为幻灯片添加带有自动定时的过渡效果。

```javascript editor-pptx
// How do I make a slide advance automatically in a presentation?

// Configure a slide to transition after a set delay with a specific animation effect in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const fill = Api.CreateSolidFill(Api.RGB(250, 180, 100));
slide.SetBackground(fill);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectSplitVerticalIn');
transition.SetSpeed('medium');
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(3000);

slide.SetSlideShowTransition(transition);
```
