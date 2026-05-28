# Copy

创建指定绘图组的副本。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiGroup](../../ApiGroup/ApiGroup.md)

## 示例

在演示文稿中复制绘图组。

```javascript editor-pptx
// How do I make a copy of a grouped set of objects in a presentation?

// Create an exact duplicate of a group and place it on another slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape1.SetPosition(608400, 1267200);
const shape2 = Api.CreateShape("ellipse", 100 * 36000, 100 * 36000, fill, stroke);
shape2.SetPosition(2100000, 1267200);
const group = Api.CreateGroup([shape1, shape2]);
slide.AddObject(group);

const copyGroup = group.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyGroup);
```
