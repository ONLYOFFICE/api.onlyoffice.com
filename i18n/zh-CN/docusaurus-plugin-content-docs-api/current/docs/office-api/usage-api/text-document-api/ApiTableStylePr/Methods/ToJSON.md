# ToJSON

将 ApiTableStylePr 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

此示例将 ApiTableStylePr 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the table style properties.

// Convert the table style properties to json and add it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle();
table.SetStyle(tableStyle);
doc.Push(table);
let json = tableStylePr.ToJSON();
let tableStylePrFromJSON = Api.FromJSON(json);
let type = tableStylePrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);
```
