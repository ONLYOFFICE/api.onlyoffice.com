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

将样式导出为可移植数据格式并在文档中恢复为新样式。

```javascript editor-docx
// How do I serialize a style so it can be stored, transferred, and recreated in a document?

// Duplicate an existing style under a different name by converting it to data and back in a document.

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
