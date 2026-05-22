# GetElementsCount

返回当前超链接中的元素数量。

## 语法

```javascript
expression.GetElementsCount();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算文档中超链接内包含的元素数量。

```javascript editor-docx
// How do I find out how many elements a hyperlink holds in a document?

// Check the total number of runs and text pieces within a hyperlink in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("Api Document Builder.");
paragraph.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers");
paragraph.AddElement(run2, 1);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let elementsCount = hyperlink.GetElementsCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of elements in hyperlink: " + elementsCount);
paragraph.AddLineBreak();
paragraph.AddText("Elements: paragraph, run1, run2, hyperlink");
doc.Push(paragraph);
```
