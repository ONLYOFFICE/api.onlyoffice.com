# CreateShd

创建可应用于文本、段落、表格或表格单元格的底纹。

## 语法

```javascript
expression.CreateShd(type, color);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 底纹类型：**“nil”** - 无底纹，**“clear”** - 纯色填充。 |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 底纹颜色。对于 **"clear"** 类型为必需项。 |

## 返回值

[ApiShd](../../ApiShd/ApiShd.md)

## 示例

创建底纹对象并将其应用于文档中的段落。

```javascript editor-docx
// Build the shading once with Api.CreateShd and pass it to the SetShd method in a document.

// Shade a paragraph with a light yellow background in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph has a light yellow shading.');
const shd = Api.CreateShd('clear', Api.Color('#FFF2CC'));
paragraph.SetShd(shd);
```
