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

此示例展示如何获取文档中所有书签名称的数组。

```javascript editor-docx
// Get the list with all bookmark names and print them in the document.

// Add bookmarks to the ranges and display their names.

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
