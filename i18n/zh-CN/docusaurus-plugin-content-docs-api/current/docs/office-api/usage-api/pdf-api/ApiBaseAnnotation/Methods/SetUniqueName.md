# SetUniqueName

设置批注唯一名称。

## 语法

```javascript
expression.SetUniqueName(name);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 未提供描述。 |

## 返回值

boolean

## 示例

在 PDF 文档中创建方形注释并为其设置唯一名称。

```javascript editor-pdf
// How do I set unique name in a PDF document?

// Set unique name using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");
```
