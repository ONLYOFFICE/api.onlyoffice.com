# ToJSON

将 ApiNumbering 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiNumbering](../ApiNumbering.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将编号定义序列化为 JSON 并在文档中恢复。

```javascript editor-docx
// How do I convert a numbering object to JSON format in a document?

// Duplicate a bullet list style by exporting it to JSON and rebuilding it from scratch in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
let json = numbering.ToJSON();
let numberingFromJSON = Api.FromJSON(json);
for (let lvl = 0; lvl < 2; ++lvl) {
	let numLvl = numberingFromJSON.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	doc.Push(paragraph);
}
let type = numberingFromJSON.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type = " + type);
doc.Push(paragraph);
```
