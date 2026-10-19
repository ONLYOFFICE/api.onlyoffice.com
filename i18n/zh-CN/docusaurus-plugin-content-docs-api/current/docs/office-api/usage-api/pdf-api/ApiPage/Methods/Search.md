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

[SearchResults](../../Enumeration/SearchResults.md)

## 示例

在 PDF 的页面上查找并定位单词的所有实例。

```javascript editor-pdf
// Useful for searching for text on a page in a PDF.

// Look up a specific word and identify all matching locations in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.RGB(50, 150, 250));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let results = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
results.forEach((quads) => {
	let annot = Api.CreateHighlightAnnot(quads);
	page.AddObject(annot);
});
console.log('We added a highlight annotations searched word');
```
