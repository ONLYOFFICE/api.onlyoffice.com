# SetVertAlign

指定将应用于此段落内容相对于段落文本默认外观的对齐方式：
-**"baseline"** - 当前段落中的字符将按默认文本基线对齐。
-**"subscript"** - 当前段落中的字符将对齐到默认文本基线下方。
-**"superscript"** - 当前段落中的字符将对齐到默认文本基线上方。

## 语法

```javascript
expression.SetVertAlign(sType);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "baseline" \| "subscript" \| "superscript" |  | 应用于文本内容的垂直对齐类型。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

此示例创建两个段落。一个使用「下标」垂直对齐，另一个使用「上标」垂直对齐。

```javascript editor-docx
// How to change a vertical alignment of a text run.

// Create a new text run and make it subscript, baseline or superscript.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
paragraph.SetVertAlign("subscript");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
paragraph.SetVertAlign("superscript");
doc.Push(paragraph);
```
