# GetDocumentInfo

返回文档信息：
-**Application** - 创建文档的应用程序。
-**CreatedRaw** - 文件创建的日期和时间。
-**Created** - 解析后的文件创建日期和时间。
-**LastModifiedRaw** - 文件最后修改的日期和时间。
-**LastModified** - 解析后的文件最后修改日期和时间。
-**LastModifiedBy** - 对文档进行最新更改的用户名。
-**Authors** - 创建文件的人员。
-**Title** - 文档标题（此属性可帮助您简化文档分类）。
-**Tags** - 文档标签（此属性可帮助您简化文档分类）。
-**Subject** - 文档主题（此属性可帮助您简化文档分类）。
-**Comment** - 文档批注（此属性可帮助您简化文档分类）。

## 语法

```javascript
expression.GetDocumentInfo();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

object

## 示例

此示例展示如何获取以对象形式表示的文档信息，并将应用程序名称粘贴到最后一个段落中。

```javascript editor-docx
// How to get information such as application with which the document was created.

// Display the document information.

let doc = Api.GetDocument();
let docInfo = doc.GetDocumentInfo();
let paragraph = Api.CreateParagraph();
paragraph.AddText('This document has been created with: ' + docInfo.Application);
doc.Push(paragraph);
```
