# GetAllAnnots

获取页面上的所有批注

## 语法

```javascript
expression.GetAllAnnots();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBaseAnnotation](../../ApiBaseAnnotation/ApiBaseAnnotation.md)

## 示例

此示例从页面获取所有注释。

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);

let annots = page.GetAllAnnots();
annots[0].SetPosition({x: 30, y: 30});

```
