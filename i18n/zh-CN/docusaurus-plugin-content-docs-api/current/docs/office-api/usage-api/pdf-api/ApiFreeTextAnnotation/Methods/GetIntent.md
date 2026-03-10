# GetIntent

获取此批注的意图类型。

## 语法

```javascript
expression.GetIntent();
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FreeTextIntent](../../Enumeration/FreeTextIntent.md)

## 示例

This example gets intent of freeText annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetRectDiff([1, 1, 1, 1]);
console.log(`Annot intent is: ${freeTextAnnot.GetIntent()}`);
```
