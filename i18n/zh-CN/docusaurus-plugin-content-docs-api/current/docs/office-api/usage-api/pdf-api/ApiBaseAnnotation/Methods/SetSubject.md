# SetSubject

设置批注主题。

## 语法

```javascript
expression.SetSubject(subject);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject | 必需 | string |  | 批注主题文本。 |

## 返回值

boolean

## 示例

在 PDF 中为注释添加主题或话题标签。

```javascript editor-pdf
// Categorize an annotation with a subject line in a PDF.

// Assign a subject title to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetSubject("Annot subject");
```
