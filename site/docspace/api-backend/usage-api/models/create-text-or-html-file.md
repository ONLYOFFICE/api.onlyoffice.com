# CreateTextOrHtmlFile
The parameters of a text or HTML file created from content sent in the request.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The title of the file. The extension the operation stands for is appended unless the title already ends with it, so Notes becomes Notes.txt or Notes.html. | [required] [example: `Document.txt`] [minLength: 1] [maxLength: 165] [nullable] |
| **content** | **String** | The content of the file, as plain text or as HTML markup. A request carrying none is rejected as an invalid request, and for a text file content that looks like markup makes the portal store it as HTML instead. | [optional] [example: `This is the file content`] [nullable] |
| **createNewIfExist** | **Boolean** | What to do when the folder already holds a file of this title, the other way round than the name reads: `true` updates that file and adds a version to its history, `false` creates another file and makes its title unique, as in Notes (1).txt. | [optional] [example: `false`] |
