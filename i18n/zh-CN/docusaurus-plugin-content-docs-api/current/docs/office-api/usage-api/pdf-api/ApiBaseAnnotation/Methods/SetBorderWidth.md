# SetBorderWidth

设置批注边框宽度。

## 语法

```javascript
expression.SetBorderWidth(width);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [pt](../../Enumeration/pt.md) |  | 以磅为单位的边框宽度。 |

## 返回值

boolean

## 示例

更改 PDF 中注释边框的粗细。

```javascript editor-pdf
// How thick should an annotation border be in a PDF?

// Set the width of the border outline on an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);
```
