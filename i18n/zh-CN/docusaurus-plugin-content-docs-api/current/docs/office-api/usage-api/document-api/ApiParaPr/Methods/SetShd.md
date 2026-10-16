# SetShd

指定应用于段落内容的底纹。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

boolean

## 示例

在文档中使用样式的段落属性为段落应用背景底纹颜色。

```javascript editor-docx
// How do I fill the background of a paragraph with a color in a document?

// Highlight a paragraph by setting its shading to make it visually distinct from surrounding text.

let doc = Api.GetDocument();

let myStyle = doc.CreateStyle('My document style');
let paraPr = myStyle.GetParaPr();
paraPr.SetShd(Api.CreateShd('clear', Api.RGB(255, 111, 61)));

let paragraph = doc.GetElement(0);
paragraph.AddText('This is an example of setting a shading to a paragraph.');
paragraph.SetStyle(myStyle);
```
