# RunBuilderScriptRequestDto
The document builder script to run and where to put what it produces.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **script** | **String** | The document builder script. It names a portal file by its id where the document builder documentation writes an address - `builder.OpenFile(1234)`; an address written out in the script is refused. | [required] [example: `builder.OpenFile("1234"); Api.GetDocument().GetElement(0).AddText(Argument.title); builder.SaveFile("docx", "result.docx"); builder.SaveFile("pdf", "result.pdf"); builder.CloseFile();`] [minLength: 0] [maxLength: 2097152] [nullable] |
| **folderId** | **Integer** (int32) | The id of the folder for the produced files that `outputs` does not list, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. | [optional] [example: `5678`] [nullable] |
| **outputs** | [**Map**](run-builder-script-output-request.md) | Destinations of the produced files, keyed by the name the script saves each one under - the second argument of `builder.SaveFile(docx, result.docx)`. | [optional] [example: `{result.docx={fileId=1234}, result.pdf={folderId=5678, title=Quarterly report.pdf}}`] |
| **argument** | [**RunBuilderScriptRequestDto_argument**](run-builder-script-request-dto-argument.md) |  | [optional] |
