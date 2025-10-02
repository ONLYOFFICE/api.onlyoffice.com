# # 删除批注

从活动工作表中指定的单元格范围删除批注。

```ts
(function () {
    // 获取当前工作表
    let sheet = Api.GetActiveSheet();

    // 定义要遍历的行列范围和目标批注内容
    let totalRows = 100;
    let totalCols = 100;
    let targetCommentText = "Comment 1";

    // 遍历指定的行列范围
    for (let row = 0; row <= totalRows; row++) {
        for (let col = 0; col <= totalCols; col++) {
            let cell = sheet.GetRangeByNumber(row, col);
            let comment = cell.GetComment();

            // 如果批注存在且文本内容匹配预设值，则删除该批注
            if (comment && comment.GetText() === targetCommentText) {
                comment.Delete();
            }
        }
    }
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetComment](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetComment.md), [GetText](../../../../office-api/usage-api/spreadsheet-api/ApiComment/Methods/GetText.md), [Delete](../../../../office-api/usage-api/spreadsheet-api/ApiComment/Methods/Delete.md)

## 结果

![DeleteComments](/assets/images/plugins/delete-comments.png#gh-light-mode-only)
![DeleteComments](/assets/images/plugins/delete-comments.dark.png#gh-dark-mode-only)
