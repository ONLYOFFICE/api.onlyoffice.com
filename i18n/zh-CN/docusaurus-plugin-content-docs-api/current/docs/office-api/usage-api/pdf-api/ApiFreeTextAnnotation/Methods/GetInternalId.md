# GetInternalId

返回当前注释的内部 ID。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

继承自 [ApiBaseAnnotation.GetInternalId](../../ApiBaseAnnotation/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中注释的内部标识符。

```javascript editor-pdf
// Useful for retrieving an annotation's internal ID.

// Create an annotation and print its internal ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
page.AddObject(squareAnnot);

console.log(`Annotation internal ID is: ${squareAnnot.GetInternalId()}`);
```
