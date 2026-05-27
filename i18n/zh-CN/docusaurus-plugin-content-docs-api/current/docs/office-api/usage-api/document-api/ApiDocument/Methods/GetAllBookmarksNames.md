# GetAllBookmarksNames

返回当前文档中所有书签名称的数组。

## 语法

```javascript
expression.GetAllBookmarksNames();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

检索文档中每个书签的名称。

```javascript editor-docx
// How do I get a list of all bookmark names to display or process them in a document?

// Collect bookmark names programmatically so they can be shown inline as reference labels in a document.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder"); 
let range1 = doc.GetRange(0, 9); 
range1.AddBookmark("Bookmark 1");
let range2 = doc.GetRange(11, 18); 
range2.AddBookmark("Bookmark 2");
let bookmarks = doc.GetAllBookmarksNames();
paragraph.AddLineBreak();
paragraph.AddText("Bookmark names: ");
for (let i = 0; i < 2; i++ ){
	paragraph.AddText(bookmarks[i] + "," + " ");
}
```
