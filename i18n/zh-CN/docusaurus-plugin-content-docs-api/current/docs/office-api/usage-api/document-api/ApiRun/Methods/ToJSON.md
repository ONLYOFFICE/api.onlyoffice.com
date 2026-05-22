# ToJSON

将 ApiRun 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

将文本运行序列化为文档中可传输的数据格式。

```javascript editor-docx
// How do I save a text run's content and formatting as structured data in a document?

// Capture a text run as a portable object that can be restored later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
let json = run.ToJSON(true);
let runFromJSON = Api.FromJSON(json);
runFromJSON.SetBold(true);
paragraph.AddElement(runFromJSON);
```
