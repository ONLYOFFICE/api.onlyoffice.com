# Traverse

遍历创建访问者时所基于的对象，并为每个节点调用已指定的钩子函数。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Traverse(options);
```

`expression` - 表示 [ApiPresentationVisitor](../ApiPresentationVisitor.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | Object \| boolean |  | 遍历选项。传递 true 等同于 \{selection: true\}。 |
| options.selection | 可选 | boolean | false | 仅遍历所选绘图对象或所选文本，而不是整个对象。 |
| options.notes | 可选 | boolean | false | 同时遍历所访问幻灯片的演讲者备注。 |
| options.masters | 可选 | boolean | false | 同时遍历幻灯片母版（仅当访问器是从演示文稿创建时）。 |
| options.layouts | 可选 | boolean | false | 同时遍历幻灯片版式（仅当访问器是从演示文稿或母版创建时）。 |

## 返回值

boolean

## 示例

在演示文稿的所有位置（包括备注和母版）替换某个词并保留格式。

```javascript editor-pptx
// How do I replace text on slides, speaker notes, layouts and masters without losing run formatting?

// Traverse with all options enabled and rewrite each run that contains the word being replaced.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetDocContent().GetElement(0).AddText("Draft agenda");
slide.AddObject(shape);
slide.AddNotesText("Draft speaker notes");

const visitor = presentation.GetVisitor();
visitor.Run = function (run) {
	const text = run.GetText();
	if (text.indexOf("Draft") === -1)
		return true;
	run.ClearContent();
	run.AddText(text.split("Draft").join("Final"));
	return true;
};
visitor.Traverse({notes: true, masters: true, layouts: true});
```
