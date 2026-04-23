# AddElement

向内联文本内容控件添加元素。

## 语法

```javascript
expression.AddElement(oElement, nPos);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 将在指定位置添加的文档元素。如果内联文本内容控件不支持 *oElement* 的类型，则返回 **false**。 |
| nPos | 可选 | number |  | 元素将添加到当前内联文本内容控件的位置。如果未指定此值，则元素将添加到当前内联文本内容控件的末尾。 |

## 返回值

boolean

## 示例

此示例向容器添加文本运行。

```javascript editor-docx
// How to add text run to the inline text element.

// Add text to the inline control indicating the starting index.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a text run in it.");
inlineLvlSdt.AddElement(run, 0);
```
