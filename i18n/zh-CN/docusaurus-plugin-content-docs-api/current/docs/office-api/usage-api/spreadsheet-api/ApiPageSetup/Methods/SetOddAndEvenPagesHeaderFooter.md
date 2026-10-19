# SetOddAndEvenPagesHeaderFooter

设置奇数页和偶数页是否使用不同的页眉和页脚。

## 语法

```javascript
expression.SetOddAndEvenPagesHeaderFooter(bDifferent);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bDifferent | 必需 | boolean |  | 指定奇数页和偶数页是否使用不同的页眉和页脚。 |

## 返回值

boolean

## 示例

在电子表格中为奇数页和偶数页使用不同的页眉和页脚。

```javascript editor-xlsx
// How do I set separate headers/footers for odd and even pages when printing in a spreadsheet?

// Enable distinct odd and even page headers and footers for printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
pageSetup.GetEvenPage().GetCenterHeader().SetText("Even page &P");
```
