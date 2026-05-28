# SetTabs

指定一系列自定义制表位，用于当前段落中的所有制表符。
- **警告**：aPos 数组和 aVal 数组的长度**必须**相等。

## 语法

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | 必需 | [twips](../../Enumeration/twips.md)[] |  | 相对于当前页面边距的自定义制表位位置数组，以二十分之一磅（1/1440 英寸）为单位。 |
| aVal | 必需 | [TabJc](../../Enumeration/TabJc.md)[] |  | 自定义制表位样式数组，用于确定制表位的行为以及在当前自定义制表位处输入的文本所应用的对齐方式。 |

## 返回值

boolean

## 示例

在文档中为段落设置自定义制表位。

```javascript editor-docx
// How do I control where text jumps when pressing Tab in a document?

// Place text at precise horizontal positions using left, center, and right tab stops in a document.

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
