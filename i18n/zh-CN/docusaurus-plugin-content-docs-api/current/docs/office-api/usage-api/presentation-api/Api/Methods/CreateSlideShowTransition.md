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

此示例创建幻灯片放映过渡效果

```javascript editor-pptx
// with fade effect that starts after 3 seconds.

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
