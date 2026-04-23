# InsertBlankPage

在当前位置插入空白页。

## 语法

```javascript
expression.InsertBlankPage();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何在当前光标位置插入空白页。

```javascript editor-docx
const doc = Api.GetDocument();
doc.InsertBlankPage();

const paragraph = Api.CreateParagraph();
paragraph.AddText('This text is on the page after the blank one.');
doc.Push(paragraph);

```
