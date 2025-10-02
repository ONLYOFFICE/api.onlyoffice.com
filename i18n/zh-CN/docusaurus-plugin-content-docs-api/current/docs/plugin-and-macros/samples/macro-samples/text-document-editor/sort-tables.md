# 表格排序

根据选定列自动按字母或数字顺序对表格行进行排序。

> 请选择作为排序依据的一整列（字母或数字排序）。
> 只有完整选中列时，宏才能正确工作。

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

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取当前页](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentPage.md)，[获取页面上所有表格](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllTablesOnPage.md)，[获取选中范围](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md)，[获取起始位置](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetStartPos.md)，[获取结束位置](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetEndPos.md)，[获取表格行数](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRowsCount.md)，[获取表格行](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRow.md)，[获取单元格数量](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/GetCellsCount.md)，[获取表格单元格](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md)，[获取行单元格](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/GetCell.md)，[获取内容](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md)，[获取范围](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetRange.md)，[获取文本](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetText.md)，[添加行](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/AddRow.md)，[获取元素](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md)，[添加文本](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)，[移除行](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/Remove.md)

## 结果

![表格排序](/assets/images/plugins/sort-tables.png#gh-light-mode-only)
![表格排序](/assets/images/plugins/sort-tables.dark.png#gh-dark-mode-only)