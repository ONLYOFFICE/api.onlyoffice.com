---
hide_table_of_contents: true
---

# 表格排序

根据选定列自动按字母或数字顺序对表格行进行排序。

:::tip
请选择作为排序依据的一整列（字母或数字排序）。
只有完整选中列时，宏才能正确工作。
:::

```ts
(function() {
    let isFirstRowIncluded = true;  // 将首行（标题）设为 false 可将其排除在排序外

    let doc = Api.GetDocument();
    let pageIndex = doc.GetCurrentPage();
    let tables = doc.GetAllTablesOnPage(pageIndex);

    // 获取文档中用户选中的范围
    let selectedRange = doc.GetRangeBySelect();
    let selectedStart = selectedRange.GetStartPos();
    let selectedEnd = selectedRange.GetEndPos();
 
    // 辅助函数：提取字符串前缀判断是数字、字母还是其他
    function extractPrefix(s) {
        let numberMatch = s.match(/^(-?\d+)/); // 提取字符串开头的数字
        if (numberMatch) {
            return { type: 'number', value: parseInt(numberMatch[0]) };
        }
        let alphaMatch = s.match(/^([a-zA-Z]+)/); // 提取字符串开头的字母
        if (alphaMatch) {
            return { type: 'alpha', value: alphaMatch[0] };
        }
        return { type: 'other', value: s };
    }

    // 辅助函数：基于提取的前缀比较两个字符串
    function compareStrings(a, b) {
        let prefixA = extractPrefix(a);
        let prefixB = extractPrefix(b);
    
        if (prefixA.type === 'number' && prefixB.type === 'number') {
            if (prefixA.value !== prefixB.value) return prefixA.value - prefixB.value;
            return a.length - b.length;
        }
    
        if (prefixA.type === 'number') return -1;
        if (prefixB.type === 'number') return 1;
    
        if (prefixA.type === 'alpha' && prefixB.type === 'alpha') {
            return prefixA.value.localeCompare(prefixB.value);
        }
    
        return a.localeCompare(b);
    }

    // 辅助函数：按指定列的值从给定行开始排序表格行
    function sortRowsByColumn(table, colIndex, startRow) {
        let rowsArr = [];
        let rowNum = table.GetRowsCount();

        for (let rowIndex = startRow; rowIndex < rowNum; rowIndex++) {
            let row = table.GetRow(rowIndex);
            let cellVal = row.GetCell(colIndex).GetContent().GetText();
            rowsArr.push({ row, cellVal });
        }
        
        rowsArr.sort((a, b) => compareStrings(a.cellVal, b.cellVal));

        return rowsArr.map(item => item.row);
    }

    // 辅助函数：根据选中位置查找选中列的索引
    function findSelectedColIndex(table, selectedStart) {
        let colNum = table.GetRow(0).GetCellsCount();
        for (let colIndex = 0; colIndex < colNum; colIndex++) {
            let cell = table.GetCell(0, colIndex);
            let cellRange = cell.GetContent().GetRange().GetStartPos();
            if (cellRange == selectedStart) {
                return colIndex;
            }
        }
        return -1;
    }

    // 遍历当前页所有表格，找到包含选中列的表格，对表格每行进行排序
    for (let i = 0; i < tables.length; i++) {
        let table = tables[i];
        let rowNum = table.GetRowsCount();
        let colNum = table.GetRow(0).GetCellsCount();
        let tableStart = table.GetCell(0, 0).GetContent().GetRange().GetStartPos();
        let tableEnd = table.GetCell(rowNum - 1, colNum - 1).GetContent().GetRange().GetEndPos();

        // 检查选中范围是否在表格内
        if (selectedStart >= tableStart && selectedEnd <= tableEnd) {
            let selectedColIndex = findSelectedColIndex(table, selectedStart);

            if (selectedColIndex !== -1) {
                let startRow = isFirstRowIncluded ? 0 : 1;

                let sortedRowsArr = sortRowsByColumn(table, selectedColIndex, startRow);

                let rowToRemove = isFirstRowIncluded ? 0 : 1;
                
                // 通过添加排序行和移除旧行重建表格
                for (let i = 0; i < sortedRowsArr.length; i++) {
                    let sortedRow = sortedRowsArr[i];
                    let newRow = table.AddRow();

                    for (let j = 0; j < colNum; j++) {
                        let sortedRowCellText = sortedRow.GetCell(j).GetContent().GetText().trim();
                        newRow.GetCell(j).GetContent().GetElement(0).AddText(sortedRowCellText);
                    }
                    table.GetRow(rowToRemove).Remove();
                }
            }
        }
    }
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentPage](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentPage.md), [GetAllTablesOnPage](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllTablesOnPage.md), [GetRangeBySelect](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetStartPos](../../../../office-api/usage-api/document-api/ApiRange/Methods/GetStartPos.md), [GetEndPos](../../../../office-api/usage-api/document-api/ApiRange/Methods/GetEndPos.md), [GetRowsCount](../../../../office-api/usage-api/document-api/ApiTable/Methods/GetRowsCount.md), [GetRow](../../../../office-api/usage-api/document-api/ApiTable/Methods/GetRow.md), [GetCellsCount](../../../../office-api/usage-api/document-api/ApiTableRow/Methods/GetCellsCount.md), [GetCell](../../../../office-api/usage-api/document-api/ApiTable/Methods/GetCell.md), [GetCell](../../../../office-api/usage-api/document-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../../office-api/usage-api/document-api/ApiTableCell/Methods/GetContent.md), [GetRange](../../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetRange.md), [GetText](../../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetText.md), [AddRow](../../../../office-api/usage-api/document-api/ApiTable/Methods/AddRow.md), [GetElement](../../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](../../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [Remove](../../../../office-api/usage-api/document-api/ApiTableRow/Methods/Remove.md)

## 结果

![表格排序](/assets/images/plugins/sort-tables.png#gh-light-mode-only)
![表格排序](/assets/images/plugins/sort-tables.dark.png#gh-dark-mode-only)