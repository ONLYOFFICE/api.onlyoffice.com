# SetColor

设置内容控件的标签颜色。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | 标签颜色。传递 *null* 可移除颜色。 |

## 返回值

boolean

## 示例

设置文档中内联内容控件的高亮颜色。

```javascript editor-docx
// How do I change the color of an inline content control in a document?

// Apply a specific RGB color to visually distinguish a content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a blue tag color.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetColor(Api.RGB(0, 0, 255));
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
