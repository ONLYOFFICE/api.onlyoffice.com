# GetModDate

获取批注最后修改日期。

## 语法

```javascript
expression.GetModDate();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例创建方形注释并获取其修改日期。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation mod date is: ${squareAnnot.GetModDate()}`);

```
