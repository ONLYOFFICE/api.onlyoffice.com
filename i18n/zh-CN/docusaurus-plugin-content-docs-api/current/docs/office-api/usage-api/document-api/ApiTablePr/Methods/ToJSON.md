# ToJSON

将 ApiTablePr 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

此示例将表格对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the table properties.

// Convert the table property to json and add it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let json = tablePr.ToJSON();
let tablePrFromJSON = Api.FromJSON(json);
let type = tablePrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);
```
