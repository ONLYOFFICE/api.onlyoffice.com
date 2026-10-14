# ToJSON

将 ApiBullet 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiBullet](../ApiBullet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

在电子表格中将项目符号序列化为 JSON 字符串。

```javascript editor-xlsx
// ToJSON returns the JSON form of an ApiBullet, useful for saving or copying list formatting.

// Create a numbering bullet, apply it to a paragraph in a shape, and write its JSON into a cell.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" Bulleted paragraph.");
let json = bullet.ToJSON();
worksheet.GetRange("A1").SetValue("Bullet JSON: " + json);
```
