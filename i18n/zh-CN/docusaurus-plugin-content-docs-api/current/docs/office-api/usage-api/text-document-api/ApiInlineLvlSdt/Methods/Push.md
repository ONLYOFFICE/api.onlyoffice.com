# Push

向内联文本内容控件的末尾添加元素。

## 语法

```javascript
expression.Push(oElement);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将添加到容器末尾的文档元素。 |

## 返回值

boolean

## 示例

此示例推送文本运行以将其实际添加到容器。

```javascript editor-docx
// How to insert the text into the inline content control.

// Add the text run to the inline text element.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control. ");
inlineLvlSdt.AddElement(run, 0);
run = Api.CreateRun();
run.AddText("This sentence was pushed here.");
inlineLvlSdt.Push(run);
```
