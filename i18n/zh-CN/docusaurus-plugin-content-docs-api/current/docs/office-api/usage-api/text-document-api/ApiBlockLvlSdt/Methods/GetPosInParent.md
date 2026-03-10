# GetPosInParent

返回内容控件在其父元素中的位置。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

此示例演示如何获取内容控件在其父元素中的位置。

```javascript editor-docx
// Creates a block content control, adds it to the current document, and returns its position in the document.

// How to get the position of the ApiBlockLvlSdt object within the ApiDocument class.

// Specifies the position of the block container within the parent document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("Number of paragraph elements at this point: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
run.AddLineBreak();
paragraph.AddElement(run);
run.AddText("Number of paragraph elements after we added a text run: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
doc.AddElement(0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
let position = blockLvlSdt.GetPosInParent();
blockLvlSdt = doc.GetElement(position);
blockLvlSdt.SetPlaceholderText("Content control");
```
