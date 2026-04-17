# SetTabs

指定将用于当前段落中任何制表符的自定义制表位序列。
-**警告**：aPos 数组和 aVal 数组的长度-**必须**相等。

Inherited from [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md).

## 示例

此示例设置将用于段落中任何制表符的自定义制表位序列。

```javascript editor-docx
// Add tabs to the paragraph.

// Create a text in a paragraph and add tab stops to it.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");
```

