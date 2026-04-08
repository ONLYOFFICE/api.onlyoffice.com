# GetPosInParent

返回段落在其父元素中的位置。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

此示例展示如何获取段落在其父元素中的位置。

```javascript editor-docx
// How to get the position of the paragraph in the control that contains it.

// Get the paragraph position inside the parent control.

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
blockLvlSdt.SetPlaceholderText("Content control");
let position = paragraph.GetPosInParent();
paragraph = doc.GetElement(position);
paragraph.SetBold(true);
```
