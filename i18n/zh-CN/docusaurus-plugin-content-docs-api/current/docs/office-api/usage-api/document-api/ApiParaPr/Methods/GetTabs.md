# GetTabs

返回当前段落的自定义制表位。

## 语法

```javascript
expression.GetTabs();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TabStop](../../Enumeration/TabStop.md)[]

## 示例

检索文档中段落设置的制表位。

```javascript editor-docx
// How do I read the tab stop positions and alignment types of a paragraph in a document?

// Inspect tab configuration to verify or display custom stop positions after applying them.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Left tab (1 inch)");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Center tab (3 inches)");
let tabs = paraPr.GetTabs();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Tab count: " + tabs.length + ", first tab: " + tabs[0].Pos + " twips (" + tabs[0].Val + ")");
doc.Push(paragraph2);
```
