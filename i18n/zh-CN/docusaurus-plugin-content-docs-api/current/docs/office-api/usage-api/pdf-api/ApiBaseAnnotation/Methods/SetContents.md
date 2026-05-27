# SetContents

设置批注内容。

## 语法

```javascript
expression.SetContents(contents);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| contents | 必需 | string |  | 批注文本内容。 |

## 返回值

boolean

## 示例

向 PDF 中的注释添加文本内容。

```javascript editor-pdf
// Store a message or note within an annotation in a PDF.

// Assign descriptive text to mark or label an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetContents("John Smith");
```
