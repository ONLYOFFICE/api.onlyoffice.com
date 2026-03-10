# SetTabs

指定将用于当前段落中任何制表符的自定义制表位序列。
-**警告**：aPos 数组和 aVal 数组的长度-**必须**相等。

## 语法

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | 必需 | [twips](../../Enumeration/twips.md)[] |  | 自定义制表位相对于当前页边距的位置数组，以磅的二十分之一（1/1440 英寸）为单位。 |
| aVal | 必需 | [TabJc](../../Enumeration/TabJc.md)[] |  | 自定义制表位样式数组，确定制表位的行为以及将应用于在当前自定义制表位输入的文本的对齐方式。 |

## 返回值

boolean

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
