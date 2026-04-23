# SetTag

向当前内联文本内容控件添加字符串标签。

## 语法

```javascript
expression.SetTag(sTag);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTag | 必需 | string |  | 将添加到当前内联文本内容控件的标签。 |

## 返回值

boolean

## 示例

此示例为内联文本内容控件设置字符串标签。

```javascript editor-docx
// How to set tag for the inline content control.

// Display the tag set for inline text element.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a tag set to it.");
inlineLvlSdt.SetTag("This is a tag");
inlineLvlSdt.AddElement(run, 0);
let tag = inlineLvlSdt.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tag: " + tag);
doc.Push(paragraph);
```
