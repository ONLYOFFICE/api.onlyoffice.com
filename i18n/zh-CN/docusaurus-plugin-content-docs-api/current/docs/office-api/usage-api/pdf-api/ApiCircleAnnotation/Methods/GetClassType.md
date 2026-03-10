# GetClassType

返回 ApiCircleAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCircleAnnotation](../ApiCircleAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"circleAnnot"

## 示例

This example gets class type of circle annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${circleAnnot.GetClassType()}`);
```
