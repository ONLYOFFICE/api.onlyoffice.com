# UpdateAllFields

更新文档中的所有域。

## 语法

```javascript
expression.UpdateAllFields(bBySelection);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bBySelection | 可选 | boolean | false | 指定是否更新选区内的所有域。 |

## 返回值

boolean

## 示例

此示例更新当前文档中的所有域。

```javascript editor-docx
// How to update all forms in the document.

// Edit document fields and then update all of them.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
newDocumentStyle = doc.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 2");
doc.Push(paragraph);
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);
newDocumentStyle = doc.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 3");
doc.AddElement(3, paragraph);
doc.UpdateAllFields();
```
