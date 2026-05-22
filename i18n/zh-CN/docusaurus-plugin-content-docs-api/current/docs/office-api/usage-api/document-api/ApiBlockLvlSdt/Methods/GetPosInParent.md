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

查找文档中内容控件在同级元素中的位置。

```javascript editor-docx
// How do I get the index position of a content control within its parent in a document?

// Insert a content control and use its position to retrieve and update it in a document.

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
