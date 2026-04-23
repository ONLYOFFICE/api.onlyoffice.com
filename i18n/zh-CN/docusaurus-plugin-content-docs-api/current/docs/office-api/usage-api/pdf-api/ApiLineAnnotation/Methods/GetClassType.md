# GetClassType

返回 ApiLineAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiLineAnnotation](../ApiLineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"lineAnnot"

## 示例

此示例获取线条注释的类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Annot class type is: ${lineAnnot.GetClassType()}`);
```
