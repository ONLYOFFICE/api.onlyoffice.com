# Search for keyword in comments

Marks comments containing a specific keyword as solved in a document.

```ts
(function () {
    let doc = Api.GetDocument();
    let comments = doc.GetAllComments();
    
    // Define the keyword to search for in comment texts
    let keyword = "solve"; 

    // Toggle case sensitivity:
    // If case-insensitive, uncomment the next line:
    // let keywordLower = keyword.toLowerCase();

    // Loop over each comment
    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];
        let commentText = comment.GetText();

        // Apply case-insensitive check if keywordLower is defined
        // Otherwise, use exact case-sensitive match
        if (typeof keywordLower !== "undefined") {
            if (commentText.toLowerCase().indexOf(keywordLower) !== -1) {
                comment.SetSolved(true);
            }
        } else {
            if (commentText.indexOf(keyword) !== -1) {
                comment.SetSolved(true);
            }
        }
    }
})();
```

Methods Used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllComments](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllComments.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiComment/Methods/GetText.md), [SetSolved](/docs/office-api/usage-api/text-document-api/ApiComment/Methods/SetSolved.md)

## Result

![CommentWordSearch](/assets/images/plugins/comment-word-search.png#gh-light-mode-only)
![CommentWordSearch](/assets/images/plugins/comment-word-search.dark.png#gh-dark-mode-only)
