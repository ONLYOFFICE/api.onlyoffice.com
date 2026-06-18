---
hide_table_of_contents: true
description: 删除文档文本中的多余空格。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 删除多余空格

在文本文件中删除多余的空格。

```ts
(function()
{
    let doc = Api.GetDocument();
    let range = doc.GetRangeBySelect();
    let rawText = range.GetText();
    range.Delete();

    // 根据换行符将原始文本拆分为段落数组
    let paragraphs = rawText.split('\n');

    // 创建一个数组来存储清理后的段落
    let cleanedParagraphs = [];

    // 清理每个段落，并存储到数组中
    for (let paragraph of paragraphs) {
        // 使用正则表达式将连续的空白字符替换为单个空格
        let cleanedParagraph = paragraph.replace(/\s+/g, ' ');
        cleanedParagraphs.push(cleanedParagraph);
    }

    // 使用换行符将清理后的段落重新连接成文本
    let cleanedText = cleanedParagraphs.join('\n');

    // 将清理后的文本插入到文档中，保持纯文本格式
    let paragraph = Api.CreateParagraph();
    paragraph.AddText(cleanedText);
    doc.InsertContent([paragraph], { "KeepTextOnly": true });
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [Delete](../../../office-api/usage-api/document-api/ApiRange/Methods/Delete.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## 参考 Microsoft VBA 宏代码

```vb
Sub RemoveExtraSpaces()
    Dim rng As Range
    
    ' 设置范围为整个文档内容
    Set rng = ActiveDocument.Content
    
    ' 将多个连续空格替换为单个空格
    rng.Text = Replace(rng.Text, "  ", " ")
    
    MsgBox "Extra spaces removed!", vbInformation
End Sub
```

## 结果

<Video src="/assets/video/macros/document-editor/remove-extra-spaces" dark />
