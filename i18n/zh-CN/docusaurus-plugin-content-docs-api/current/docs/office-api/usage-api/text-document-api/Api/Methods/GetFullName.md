# GetFullName

返回当前打开文件的完整名称。

## 语法

```javascript
expression.GetFullName();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例获取文档名称并将其插入到文档中。

```javascript editor-docx
// Returns the first paragraph of the document and adds the document full name to it.

// How to get the full name of the current document and add it to the paragraph.

// Returns the full name of the currently opened file and write it to the first paragraph of the document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());
```
