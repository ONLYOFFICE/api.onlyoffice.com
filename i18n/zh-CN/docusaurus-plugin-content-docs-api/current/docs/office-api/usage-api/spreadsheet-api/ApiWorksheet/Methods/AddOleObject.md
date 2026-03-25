# AddOleObject

使用指定的参数向当前工作表添加 OLE 对象。

## 语法

```javascript
expression.AddOleObject(sImageSrc, nWidth, nHeight, sData, sAppId, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | 必需 | string |  | 要插入的图像来源（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的 OLE 对象宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的 OLE 对象高度。 |
| sData | 必需 | string |  | OLE 对象字符串数据。 |
| sAppId | 必需 | string |  | 与当前 OLE 对象关联的应用程序 ID。 |
| nFromCol | 必需 | number |  | OLE 对象起始位置所在的列号。 |
| nColOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromCol 列到 OLE 对象左侧的偏移量，以英制单位测量。 |
| nFromRow | 必需 | number |  | OLE 对象起始位置所在的行号。 |
| nRowOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromRow 行到 OLE 对象上部的偏移量，以英制单位测量。 |

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## 示例

此示例使用指定的参数向工作表添加 OLE 对象。

```javascript editor-xlsx
// How to add an OLE object to the worksheet specifying its url, size, etc.

// Insert an OLE object to the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	130 * 36000, 90 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);

```
