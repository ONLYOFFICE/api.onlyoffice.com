# SetPosition

设置批注位置。

## 语法

```javascript
expression.SetPosition(position);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 必需 | [Point](../../Enumeration/Point.md) |  | 批注的新位置。 |

## 返回值

boolean

## 示例

在 PDF 中将注释移动到页面上的新位置。

```javascript editor-pdf
// Reposition an annotation by changing its coordinates in a PDF.

// Update where an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
