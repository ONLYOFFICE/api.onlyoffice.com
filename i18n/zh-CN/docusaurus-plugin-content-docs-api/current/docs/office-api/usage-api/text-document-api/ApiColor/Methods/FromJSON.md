# FromJSON

将 JSON 对象转换为 ApiColor 对象。

## 语法

```javascript
expression.FromJSON(jsonObject);
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| jsonObject | 必需 | string |  | 颜色的 JSON 表示。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

This example shows how to restore ApiColor objects of different types from JSON.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const colors = [
	Api.RGB(93, 192, 232),
	Api.RGBA(149, 192, 56, 128),
	Api.HexColor('#FF6F3D'),
	Api.ThemeColor('accent2'),
	Api.AutoColor()
];

for (let i = 0; i < colors.length; i++) {
	const original = colors[i];
	const json = JSON.parse(original.ToJSON());
	const restored = original.FromJSON(json);

	if (i > 0) paragraph.AddLineBreak();
	let run = Api.CreateRun();
	run.SetColor(original);
	run.AddText('Original: ' + original.GetHex());
	paragraph.Push(run);

	run = Api.CreateRun();
	run.AddText(' - ');
	paragraph.Push(run);

	run = Api.CreateRun();
	run.SetColor(restored);
	run.AddText('Restored: ' + restored.GetHex());
	paragraph.Push(run);
}

```
