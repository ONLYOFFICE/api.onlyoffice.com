# SetZoom

设置打印工作表时使用的缩放比例（以百分比表示）。设置此属性会关闭“调整为页面大小”模式。

## 语法

```javascript
expression.SetZoom(nZoom);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nZoom | 必需 | number |  | 以百分比表示的缩放比例（10-400）。 |

## 返回值

boolean

## 示例

设置电子表格中工作表的打印缩放比例（缩放）。

```javascript editor-xlsx
// How do I shrink or enlarge the printout to a percentage of its size in a spreadsheet?

// Scale the printed worksheet to a given percentage in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetZoom(80);
```
