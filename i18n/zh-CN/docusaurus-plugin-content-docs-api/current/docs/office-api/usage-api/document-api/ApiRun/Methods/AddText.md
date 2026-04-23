# AddText

向当前运行添加一些文本。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 将添加到当前运行的文本。 |

## 返回值

boolean

## 示例

此示例向运行添加一些文本。

```javascript editor-docx
// How to add a sentence to the text run.

// Add text to the document. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
