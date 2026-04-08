# ToJSON

将 ApiStyle 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteNumberings);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

此示例将 ApiStyle 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the style object.

// Convert the style to json and add it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let json = tableStyle.ToJSON(false);
let styleFromJSON = Api.FromJSON(json);
styleFromJSON.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(styleFromJSON);
doc.Push(table);
```
