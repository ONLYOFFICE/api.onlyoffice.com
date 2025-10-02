# 创建内容控件列表

将文档中所有单级编号列表及手动选中的文本区域转换为内容控件下拉列表。

```ts
(function() {
    let doc = Api.GetDocument();

    let contentControlList; // 当前内容控件列表引用（下拉列表）
    let contentControlListIndex = 0; // 记录已创建的内容控件列表数量

    // 辅助函数：将选中部分的编号段落转换为内容控件列表
    function processSelectedParagraphs(selectedParagraphs) {
        let numberedParagraphsIndex = [];

        for (let i = 0; i < selectedParagraphs.length; i++) {
            let numbering = selectedParagraphs[i].GetNumbering(); // 收集待删除的编号段落索引

            if (numbering && numbering.GetClassType() === 'numberingLevel') {
                numberedParagraphsIndex.push(i);

                let text = selectedParagraphs[i].GetText().trim();

                addContentControlList(i, text, selectedParagraphs[i]);
            }
        }

        // 删除原始编号段落
        for (let i = 0; i < numberedParagraphsIndex.length; i++) {
            let deleteParagraphIndex = numberedParagraphsIndex[i];
            selectedParagraphs[deleteParagraphIndex].Delete();
        }
    }

    // 辅助函数：将全文编号段落转换为内容控件列表
    function processAllDocument() {
        let numberedParagraphs = doc.GetAllNumberedParagraphs();
        console.log(numberedParagraphs)

        for (let i = 0; i < numberedParagraphs.length; i++) {
            let text = numberedParagraphs[i].GetText().trim();
            addContentControlList(i, text, numberedParagraphs[i]);
        }

        // 删除原始编号段落
        for (let i = 0; i < numberedParagraphs.length; i++) {
            numberedParagraphs[i].Delete();
        }
    }

    // 辅助函数：从编号段落创建内容控件列表项
    function addContentControlList(i, text, paragraph) {
        // 匹配格式如"1."、"1)"、"A."、"a)"、"I."等
        const starterRegex = /^(1[\.\)]|[aAiI][\.\)]?)\s+/;

        if (starterRegex.test(text)) {
            // 创建新下拉列表
            contentControlListIndex++;

            let newPara = Api.CreateParagraph();
            newPara.AddText(' ');
            paragraph.InsertParagraph(newPara, "before", true);
            newPara.GetRange(0, 1).Select();

            let control = doc.AddDropDownListContentControl([]);
            contentControlList = control.GetDropdownList();

            contentControlList.Add(text, text, i);
        } else {
            // 添加到当前下拉列表
            contentControlList.Add(text, text, i);
        }
    }

    // 检查文档是否有选中内容，并执行相应函数
    let selectedRange = doc.GetRangeBySelect();
    let selectedText = selectedRange ? selectedRange.GetText().trim() : "";

    if (selectedText.length > 0) {
        let selectedParagraphs = selectedRange.GetAllParagraphs();
        processSelectedParagraphs(selectedParagraphs);
    } else {
        processAllDocument();
    }
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取编号格式](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetNumbering.md)，[获取类型](/docs/office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/GetClassType.md)，[获取文本](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md)，[删除段落](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/Delete.md)，[获取所有编号段落](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md)，[创建段落](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md)，[添加文本](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)，[插入段落](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/InsertParagraph.md)，[获取范围](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md)，[选中范围](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/Select.md)，[添加下拉列表控件](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/AddDropDownListContentControl.md)，[获取下拉列表](/docs/office-api/usage-api/text-document-api/ApiInlineLvlSdt/Methods/GetDropdownList.md)，[添加选项](/docs/office-api/usage-api/text-document-api/ApiContentControlList/Methods/Add.md)，[获取选中范围](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md)，[获取所有段落](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md)

## 结果

![创建内容控件列表](/assets/images/plugins/create-content-control-list.png#gh-light-mode-only)
![创建内容控件列表](/assets/images/plugins/create-content-control-list.dark.png#gh-dark-mode-only)