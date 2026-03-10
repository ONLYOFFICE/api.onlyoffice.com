# SetShd

指定应用于段落内容的底纹。

## 语法

```javascript
expression.SetShd(type, color);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 将应用于当前段落内容的底纹类型。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于填充底纹的颜色或图案。 |

## 返回值

boolean

## 示例

此示例指定应用于段落内容的底纹。

```javascript editor-docx
// How to add shading to the paragraph.

// Apply the clear shading to the paragraph.

let doc = Api.GetDocument();

let myStyle = doc.CreateStyle('My document style');
let paraPr = myStyle.GetParaPr();
paraPr.SetShd('clear', Api.RGB(255, 111, 61));

let paragraph = doc.GetElement(0);
paragraph.AddText('This is an example of setting a shading to a paragraph.');
paragraph.SetStyle(myStyle);

```
