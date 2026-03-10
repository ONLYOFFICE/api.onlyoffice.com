# GetUniqueName

获取批注唯一名称。

## 语法

```javascript
expression.GetUniqueName();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example creates a square annotation and gets its unique name.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);

```
