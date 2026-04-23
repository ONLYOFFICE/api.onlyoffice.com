# SetHyperlink

向指定范围添加超链接。

## 语法

```javascript
expression.SetHyperlink(sRange, sAddress, subAddress, sScreenTip, sTextToDisplay);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 将添加超链接的区域。 |
| sAddress | 必需 | string |  | 链接地址。 |
| subAddress | 可选 | string |  | 用于插入内部工作表超链接的链接子地址。 |
| sScreenTip | 可选 | string |  | 屏幕提示文本。 |
| sTextToDisplay | 可选 | string |  | 将在工作表上显示的链接文本。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例向指定范围添加超链接。

```javascript editor-xlsx
// How to add hyperlinks to the range.

// Add a hyperlink to the cell.

let worksheet = Api.GetActiveSheet();
const logoUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
worksheet.SetHyperlink('A1', logoUrl, 'Api ONLYOFFICE', 'ONLYOFFICE for developers');

```
