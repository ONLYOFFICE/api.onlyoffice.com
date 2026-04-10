# 添加缩略语全称

自动识别文档中的所有缩略语，并在注释中添加其全称。

```ts
(function () {
  function addAcronymComments() {
    let doc = Api.GetDocument();
    let acronymDictionary = new Map([
      ["API", "Application Programming Interface"],
      ["HTTP", "HyperText Transfer Protocol"],
      ["HTML", "HyperText Markup Language"],
      ["CSS", "Cascading Style Sheets"],
      ["JSON", "JavaScript Object Notation"],
      ["XML", "eXtensible Markup Language"],
      ["SQL", "Structured Query Language"],
      ["URL", "Uniform Resource Locator"],
      // 根据需要，可继续添加更多缩写词
    ]);

    let totalFound = 0;

    acronymDictionary.forEach((fullForm, acronym) => {
      let searchResults = doc.Search(acronym, true);

    if (searchResults && searchResults.length) {
      totalFound += searchResults.length;
      searchResults.forEach((result) => {
        result.AddComment(fullForm);
      });
    }
    });
  }

  addAcronymComments();
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[搜索文本](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Search.md)，[添加注释](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/AddComment.md)

## 结果

![添加缩略语全称](/assets/images/plugins/acronym-full-forms.png#gh-light-mode-only)
![添加缩略语全称](/assets/images/plugins/acronym-full-forms.dark.png#gh-dark-mode-only)
