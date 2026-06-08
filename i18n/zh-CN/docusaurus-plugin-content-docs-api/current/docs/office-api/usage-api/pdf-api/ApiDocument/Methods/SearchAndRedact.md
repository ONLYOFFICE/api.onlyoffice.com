# SearchAndRedact

搜索词语并对其添加涂黑。

## 语法

```javascript
expression.SearchAndRedact(props);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| props | 必需 | [SearchProps](../../Enumeration/SearchProps.md) |  | 搜索选项。 |

## 返回值

[ApiRedactAnnotation](../../ApiRedactAnnotation/ApiRedactAnnotation.md)[]

## 示例

在 PDF 中查找并隐藏敏感文本。

```javascript editor-pdf
// How do I black out certain words throughout a PDF?

// Search for a word and apply redaction to all matches in a PDF.

let doc = Api.GetDocument();
doc.SearchAndRedact({text: "Lorem", matchCase: false, wholeWords: false});
doc.ApplyRedact();
console.log(`We searched for the word lorem in the document and applied redact annotation to all matches.`);
```
