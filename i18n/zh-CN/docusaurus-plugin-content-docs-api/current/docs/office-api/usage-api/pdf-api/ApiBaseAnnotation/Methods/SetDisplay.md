# SetDisplay

设置批注显示类型。

## 语法

```javascript
expression.SetDisplay(display);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| display | 必需 | [DisplayType](../../Enumeration/DisplayType.md) |  | 批注的显示类型。 |

## 返回值

boolean

## 示例

控制 PDF 中注释的可见性。

```javascript editor-pdf
// Toggle whether an annotation appears or stays hidden in a PDF.

// Set the display mode to show or conceal an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");
```
