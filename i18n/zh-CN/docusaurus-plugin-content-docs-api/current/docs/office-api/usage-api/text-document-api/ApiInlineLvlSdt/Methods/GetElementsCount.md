# GetElementsCount

返回当前内联文本内容控件中的元素数量。文本内容
控件默认创建时包含一个文本运行，因此即使未添加任何
元素，此方法也会返回值「1」。

## 语法

```javascript
expression.GetElementsCount();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取内联文本内容控件中的元素数量。

```javascript editor-docx
// How to get the number of elements of the inline control.

// Create an inline text content control and show its elements count.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
paragraph.AddLineBreak();
let inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddText("Number of elements in inlineLvlSdt (before adding anything) = " + inlineLvlSdtCount);
let run = Api.CreateRun();
run.AddText("This is an inline text content control. ");
inlineLvlSdt.AddElement(run, 0);
paragraph.AddLineBreak();
inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddText("Number of elements in inlineLvlSdt (after adding one element) = " + inlineLvlSdtCount);
let run1 = Api.CreateRun();
run1.AddText("One more element of the inline text content control.");
inlineLvlSdt.AddElement(run1, 1);
inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddLineBreak();
paragraph.AddText("Number of elements in inlineLvlSdt (after adding one more element) = " + inlineLvlSdtCount);
```
