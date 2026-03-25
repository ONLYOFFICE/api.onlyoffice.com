# ApiFont

表示 ApiFont 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Bold | boolean \| null | 字体粗体属性。 |
| Color | [ApiColor](../ApiColor/ApiColor.md) \| null | 字体颜色属性。 |
| Italic | boolean \| null | 字体斜体属性。 |
| Name | string \| null | 字体名称。 |
| Parent | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | 指定字体对象的父对象。 |
| Size | number \| null | 字体大小属性。 |
| Strikethrough | boolean \| null | 字体删除线属性。 |
| Subscript | boolean \| null | 字体下标属性。 |
| Superscript | boolean \| null | 字体上标属性。 |
| Underline | string \| null | 字体下划线类型。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetBold](./Methods/GetBold.md) | boolean \| null | 返回指定字体的粗体属性。 |
| [GetColor](./Methods/GetColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回指定字体的颜色属性。 |
| [GetItalic](./Methods/GetItalic.md) | boolean \| null | 返回指定字体的斜体属性。 |
| [GetName](./Methods/GetName.md) | string \| null | 返回指定字体的名称属性。 |
| [GetParent](./Methods/GetParent.md) | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | 返回指定字体的父级 ApiCharacters 对象。 |
| [GetSize](./Methods/GetSize.md) | number \| null | 返回指定字体的大小属性。 |
| [GetStrikethrough](./Methods/GetStrikethrough.md) | boolean \| null | 返回指定字体的删除线属性。 |
| [GetSubscript](./Methods/GetSubscript.md) | boolean \| null | 返回指定字体的下标属性。 |
| [GetSuperscript](./Methods/GetSuperscript.md) | boolean \| null | 返回指定字体的上标属性。 |
| [GetUnderline](./Methods/GetUnderline.md) | [XlUnderlineStyle](../Enumeration/XlUnderlineStyle.md) \| null | 返回应用于指定字体的下划线类型。 |
| [SetBold](./Methods/SetBold.md) | 无 | 设置指定字体的粗体属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetColor](./Methods/SetColor.md) | 无 | 设置指定字体的颜色属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetItalic](./Methods/SetItalic.md) | 无 | 设置指定字体的斜体属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetName](./Methods/SetName.md) | 无 | 设置指定字体的名称属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetSize](./Methods/SetSize.md) | 无 | 设置指定字体的大小属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetStrikethrough](./Methods/SetStrikethrough.md) | 无 | 设置指定字体的删除线属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetSubscript](./Methods/SetSubscript.md) | 无 | 设置指定字体的下标属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetSuperscript](./Methods/SetSuperscript.md) | 无 | 设置指定字体的上标属性。💡 此方法仅适用于单元格的文本格式。 |
| [SetUnderline](./Methods/SetUnderline.md) | 无 | 为当前字体设置请求中指定类型的下划线。💡 此方法仅适用于单元格的文本格式。 |
