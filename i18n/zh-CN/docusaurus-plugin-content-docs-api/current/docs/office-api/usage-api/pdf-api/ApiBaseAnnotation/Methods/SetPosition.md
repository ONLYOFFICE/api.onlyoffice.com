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
| position | 必需 | [Point](../../Enumeration/Point.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

在 PDF 文档中创建方形注释并设置新位置。

```javascript editor-pdf
// How to set position for an annotation in a PDF document?

// Set position and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
