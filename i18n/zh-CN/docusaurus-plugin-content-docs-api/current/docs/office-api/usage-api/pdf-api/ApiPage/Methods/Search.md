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
| props | 必需 | [SearchProps](../../Enumeration/SearchProps.md) |  | 未提供描述。 |

## 返回值

Quads[]

## 示例

此示例在页面中搜索某个词并为其添加高亮。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let quads = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We added a highlight annotations searched word');
```
