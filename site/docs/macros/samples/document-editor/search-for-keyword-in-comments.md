---
hide_table_of_contents: true
description: Search for a keyword in document comments.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllComments](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllComments.md), [GetText](../../../office-api/usage-api/document-api/ApiComment/Methods/GetText.md), [SetSolved](../../../office-api/usage-api/document-api/ApiComment/Methods/SetSolved.md)

## Result

<Video src="/assets/video/macros/document-editor/search-for-keyword-in-comments" dark />
