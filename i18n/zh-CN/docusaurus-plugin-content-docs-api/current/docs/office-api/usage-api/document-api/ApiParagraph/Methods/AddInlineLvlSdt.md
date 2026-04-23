# AddInlineLvlSdt

添加行内容器。

## 语法

```javascript
expression.AddInlineLvlSdt(oSdt);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSdt | 必需 | [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) |  | 行内容器。如果为 undefined 或 null，则将创建新的 ApiInlineLvlSdt 类并添加到段落中。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

此示例向段落添加一个行内容器。

```javascript editor-docx
// How to create an inline content control and add it to the paragraph.

// Add an inline text element to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
