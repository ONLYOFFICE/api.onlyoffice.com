# SetRectDiff

设置批注矩形差值。

## 语法

```javascript
expression.SetRectDiff(rectDiff);
```

`expression` - 表示 [ApiCircleAnnotation](../ApiCircleAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rectDiff | 必需 | [RectDiff](../../Enumeration/RectDiff.md) |  | 描述两个矩形之间数值差异的四个数字的集合。 |

## 返回值

boolean

## 示例

此示例为圆形注释设置矩形差异。

```javascript editor-pdf
let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
circleAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${circleAnnot.GetRectDiff()}`);
```
