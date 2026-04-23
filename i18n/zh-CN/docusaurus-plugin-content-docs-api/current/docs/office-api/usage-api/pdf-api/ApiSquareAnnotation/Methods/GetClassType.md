# GetClassType

返回 ApiSquareAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSquareAnnotation](../ApiSquareAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"squareAnnot"

## 示例

此示例获取方形注释的类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${squareAnnot.GetClassType()}`);
```
