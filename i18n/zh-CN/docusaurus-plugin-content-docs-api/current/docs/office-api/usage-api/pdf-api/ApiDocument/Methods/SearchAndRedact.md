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
// Useful for blacking out certain words throughout a PDF.

// Search for a word and apply redaction to all matches in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.RGB(50, 150, 250));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
let searchText = "ApiDocument SearchAndRedact sensitive text";
paragraph.AddText(searchText);
page.AddObject(shape);

doc.SearchAndRedact({text: searchText, matchCase: true, wholeWords: false});
doc.ApplyRedact();
console.log(`We searched for the added text in the document and applied redact annotation to all matches.`);
```
