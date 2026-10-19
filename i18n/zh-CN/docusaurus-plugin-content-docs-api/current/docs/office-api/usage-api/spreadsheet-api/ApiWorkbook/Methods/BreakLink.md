# BreakLink

断开与指定工作簿的链接：引用该工作簿的公式将替换为其当前值，并从工作簿中移除该链接。

## 语法

```javascript
expression.BreakLink(sName);
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | [ApiWorkbook#GetLinkSources](../../ApiWorkbook/Methods/GetLinkSources.md) 方法返回的已链接工作簿的路径。 |

## 返回值

boolean

## 示例

断开与其他工作簿的链接，并将使用这些链接的公式替换为其值。

```javascript editor-xlsx
// How do I remove external workbook links before sending a spreadsheet?

// Break every link and report the ones a defined name still uses.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
let sources = workbook.GetLinkSources();
let kept = [];
for (let i = 0; i < sources.length; i++) {
    if (!workbook.BreakLink(sources[i])) {
        kept.push(sources[i]);
    }
}
worksheet.GetRange("A1").SetValue("Links broken: " + (sources.length - kept.length));
worksheet.GetRange("A2").SetValue("Links kept: " + kept.join(", "));
```
