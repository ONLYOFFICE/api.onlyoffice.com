# 替换文档中的单词

在整个文档中搜索指定单词，并将其替换为给定的替换词。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
  let doc = Api.GetDocument();
  let range = doc.GetRangeBySelect();
  let rawText = range.GetText();
  range.Delete();
  // 定义要查找的单词和替换的单词
  let wordToFind = "oldWord";        // 将 "oldWord" 替换为要查找的单词
  let replacementWord = "newWord";   // 将 "newWord" 替换为想替换成的单词
  // 使用正则表达式进行全局替换
  let cleanedText = rawText.replace(
    new RegExp(wordToFind, "g"),
    replacementWord
  );
  // 将替换后的文本插入回文档，保持原有段落结构
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(cleanedText);
  doc.InsertContent([paragraph]);
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [Delete](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/Delete.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## 参考 Microsoft VBA 宏代码

<!-- code generated with AI -->

```vb
Sub SimpleFindReplace()
    Selection.Find.Execute FindText:="find", ReplaceWith:="replace", Replace:=wdReplaceAll
End Sub
```

## 结果

<!-- imgpath -->

![Replace Words in Document](/assets/images/plugins/replace-words-in-document.png#gh-light-mode-only)![Replace Words in Document](/assets/images/plugins/replace-words-in-document.dark.png#gh-dark-mode-only)
