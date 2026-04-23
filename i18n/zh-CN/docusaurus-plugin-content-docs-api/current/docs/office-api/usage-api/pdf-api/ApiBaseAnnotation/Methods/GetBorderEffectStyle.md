# GetBorderEffectStyle

获取批注边框效果样式。

## 语法

```javascript
expression.GetBorderEffectStyle();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[AnnotBorderEffectStyle](../../Enumeration/AnnotBorderEffectStyle.md)

## 示例

此示例创建方形注释并获取其边框效果样式。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect style is: ${squareAnnot.GetBorderEffectStyle()}`);

```
