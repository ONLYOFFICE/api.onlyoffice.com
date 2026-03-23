# Delete

从文档中删除当前书签。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何从文档中删除书签。

```javascript editor-docx
// How to get a bookmark from the document by its name and remove it.

// Add two bookmarks to the two ranges and delete the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark 1");
let range2 = doc.GetRange(14, 22);
range2.AddBookmark("Bookmark 2");
let bookmark1 = doc.GetBookmark("Bookmark 1");
bookmark1.Delete();

```
