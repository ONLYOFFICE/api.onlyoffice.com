# SetPageBreakBefore

指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。

## 语法

```javascript
expression.SetPageBreakBefore(isPageBreakBefore);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isPageBreakBefore | 必需 | boolean |  | true 值启用将段落内容呈现在文档新页开头的选项。 |

## 返回值

boolean

## 示例

此示例指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。

```javascript editor-docx
// How to set a page break before the current paragraph.

// Move the paragraph to the new page while rendering.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetPageBreakBefore(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetStyle(myStyle);
doc.Push(paragraph);
```
