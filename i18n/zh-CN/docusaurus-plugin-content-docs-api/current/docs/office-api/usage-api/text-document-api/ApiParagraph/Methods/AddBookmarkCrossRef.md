# AddBookmarkCrossRef

向当前段落添加书签交叉引用。
💡 请注意，此段落必须在文档中。

## 语法

```javascript
expression.AddBookmarkCrossRef(sRefTo, sBookmarkName, bLink, bAboveBelow, sSepWith);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefTo | 必需 | [bookmarkRefTo](../../Enumeration/bookmarkRefTo.md) |  | 要插入的书签引用的文本或数值。 |
| sBookmarkName | 必需 | string |  | 要引用的书签名称（必须在文档中）。 |
| bLink | 可选 | boolean | true | 指定引用是否作为超链接插入。 |
| bAboveBelow | 可选 | boolean | false | 指定是否应包含表示引用位置的「上方/下方」字样（不与 "text" 和 "aboveBelow" sRefType 一起使用）。 |
| sSepWith | 可选 | string | "" | 数字分隔符（仅与 "fullCtxParaNum" sRefType 一起使用）。 |

## 返回值

boolean

## 示例

此示例向段落添加书签交叉引用。

```javascript editor-docx
// How to create a bookmark reference to the paragraph.

// Add a cross-reference to the bookmark of the paragraph.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder"); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark");
let bookmarks = doc.GetAllBookmarksNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("A bookmark was added ");
doc.Push(paragraph);
paragraph.AddBookmarkCrossRef("aboveBelow", bookmarks[0]);
```
