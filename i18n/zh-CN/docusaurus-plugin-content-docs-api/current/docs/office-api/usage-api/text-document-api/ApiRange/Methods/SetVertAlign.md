# SetVertAlign

指定将应用于范围内容的对齐方式，相对于范围文本的默认外观：
-**"baseline"** - 当前文本范围中的字符将按默认文本基线对齐。
-**"subscript"** - 当前文本范围中的字符将在默认文本基线下方对齐。
-**"superscript"** - 当前文本范围中的字符将在默认文本基线上方对齐。

## 语法

```javascript
expression.SetVertAlign(sType);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "baseline" \| "subscript" \| "superscript" |  | 应用于文本内容的垂直对齐类型。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例为 [ApiRange](../ApiRange.md) 设置垂直对齐 "superscript"。

```javascript editor-docx
// How to set vertical alignment of a text.

// Get a range, specify its vertical alignment as "baseline", "subscript" or "superscript".

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Copyright Document Builder");
let range = doc.GetRange(10, 19);
range.SetVertAlign("superscript");
```
