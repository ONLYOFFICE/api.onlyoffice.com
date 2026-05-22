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

在文档本身中显示当前文档的文件名。

```javascript editor-docx
// How do I display the full name of the open file in a document?

// Write the path and name of the currently open file into the first paragraph in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());
```
