# GetElementsCount

返回当前段落中的元素数量。

## 语法

```javascript
expression.GetElementsCount();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算文档中段落内的元素数量。

```javascript editor-docx
// How do I count the elements that make up a paragraph in a document?

// Track how the element count changes as new runs are added to a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("Number of paragraph elements at this point: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
run.AddLineBreak();
paragraph.AddElement(run);
run.AddText("Number of paragraph elements after we added a text run: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
```
