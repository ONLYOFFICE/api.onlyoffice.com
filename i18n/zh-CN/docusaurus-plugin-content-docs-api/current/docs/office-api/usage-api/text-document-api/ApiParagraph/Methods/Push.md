# Push

向当前段落添加元素。

## 语法

```javascript
expression.Push(oElement);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 将在当前位置添加的文档元素。如果段落不支持 oElement 类型，则返回 false。 |

## 返回值

boolean

## 示例

此示例向段落添加一个 oRun。

```javascript editor-docx
// How to insert text to the paragraph.

// Get the last paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is run #0, you must not push it to take effect.");
paragraph.AddElement(run);
paragraph.AddLineBreak();
for (let i = 0; i < 5; ++i) {
	run = Api.CreateRun();
	run.AddText("This is run #" + (i + 1) + ", you must push it to take effect.");
	paragraph.AddLineBreak();
	paragraph.Push(run);
}
```
