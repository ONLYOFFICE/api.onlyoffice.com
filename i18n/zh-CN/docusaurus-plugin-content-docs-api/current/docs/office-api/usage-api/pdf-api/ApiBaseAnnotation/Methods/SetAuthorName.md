# SetAuthorName

设置批注作者姓名。

## 语法

```javascript
expression.SetAuthorName(name);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 作者姓名。 |

## 返回值

boolean

## 示例

为 PDF 中的注释分配作者名称。

```javascript editor-pdf
// Who created or should be credited for an annotation in a PDF?

// Set the author name property of an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");
```
