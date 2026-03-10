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

此示例将 ApiNumbering 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the numbering object.

// Convert the bullet numbering to json and add it to the paragraph.

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
