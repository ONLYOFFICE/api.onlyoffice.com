# CreateGroup

创建绘图对象组。

:::note
绘图对象不得已添加到演示文稿中。要组合已在演示文稿中的绘图对象，请使用 [ApiSlide#GroupDrawings](../../ApiSlide/Methods/GroupDrawings.md) 方法。
:::

## 语法

```javascript
expression.CreateGroup(drawings);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| drawings | 必需 | [DrawingForGroup](../../Enumeration/DrawingForGroup.md)[] |  | 要分组的绘图对象数组。 |

## 返回值

[ApiGroup](../../ApiGroup/ApiGroup.md)

## 示例

在演示文稿中将多个形状组合在一起。

```javascript editor-pptx
// How do I combine shapes so they move as one unit in a presentation?

// Bundle selected shapes into a single object for coordinated movement in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 80 * 36000, 50 * 36000, fill1, stroke);
let shape2 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill2, stroke);
shape1.SetPosition(20 * 36000, 30 * 36000);
shape2.SetPosition(130 * 36000, 70 * 36000);
let group = Api.CreateGroup([shape1, shape2]);
slide.AddObject(group);
```
