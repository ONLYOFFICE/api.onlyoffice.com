# Search

搜索词语并返回其四边形。

## 语法

```javascript
expression.Search(props);
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| props | 必需 | [SearchProps](../../Enumeration/SearchProps.md) |  | 搜索选项。 |

## 返回值

Quads[]

## 示例

在 PDF 的页面上查找并定位单词的所有实例。

```javascript editor-pdf
// How do I search for text on a page in a PDF?

// Look up a specific word and identify all matching locations in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let quads = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We added a highlight annotations searched word');
```
