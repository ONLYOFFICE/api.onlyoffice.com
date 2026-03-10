# GetAppearance

返回内容控件的可视化类型。

## 语法

```javascript
expression.GetAppearance();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"boundingBox" \| "hidden"

## 示例

此示例向内容控件添加文本并获取其外观。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.AddText("The appearance of this content control: " + appearance);
paragraph.Push(contentControl);
```
