# ApplyRedact

应用已添加的涂黑。

## 语法

```javascript
expression.ApplyRedact(includeForms, includeAnnots);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| includeForms | 可选 | boolean | true | 指定是否在涂黑中包括表单字段。 |
| includeAnnots | 可选 | boolean | true | 指定是否在涂黑中包括注释。 |

## 返回值

boolean

## 示例

在 PDF 中永久隐藏敏感内容。

```javascript editor-pdf
// Can I remove information so it cannot be recovered in a PDF?

// Cover and protect confidential areas in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
doc.AddPage(0);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
doc.ApplyRedact();
console.log('We added a redact annot to first page and applied it');
```
