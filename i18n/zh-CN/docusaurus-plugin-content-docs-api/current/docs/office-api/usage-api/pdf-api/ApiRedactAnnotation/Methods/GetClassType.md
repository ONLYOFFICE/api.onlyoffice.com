# GetClassType

返回 ApiRedactAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRedactAnnotation](../ApiRedactAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"redactAnnot"

## 示例

此示例获取密文注释的类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);
```
