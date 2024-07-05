In order to convert different file formats in the online office, the POST request should be used. These requests are sent to the */cool/convert-to/\<format>&\<lang=xx-XX>* or */lool/convert-to/\<format>&\<lang=xx-XX>* endpoints.

## Request parameters and their description

| Parameter        | Description                                                                                                                             | Type    | Presence |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| format           | The output file format.                                                                                                                 | string  | required |
| PDFVer           | The pdf version for the respective type of PDF to be used for the output file (PDF/A-1b, PDF/A-2b, etc.).                               | string  | optional |
| FullSheetPreview | Specifies if the full sheet previews will be available or not.                                                                          | bollean | optional |
| file             | A file to convert in the payload.                                                                                                       | object  | required |
| lang             | The default format language. It is used for the date type cells. If the language is specified, it determines the display/output format. | string  | optional |

Sample of conversion request

```
curl -F "data=sample.txt" https://documentserver/cool/convert-to/docx > result.docx
```

where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

Sample of conversion request in the HTML format

```
<form action="https://documentserver/cool/convert-to/docx" enctype="multipart/form-data" method="post">
    File: <input type="file" name="data"><br/>
    <input type="submit" value="Convert to DOCX">
</form>
```

where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

Sample of conversion request with the *format* parameter

```
curl -F "data=sample.odt" -F "format=pdf" "PDFVer=PDF/A-2b" https://documentserver/cool/convert-to > result.pdf
```

where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

Sample of conversion request with the *format* parameter in the HTML format

```
<form action="https://documentserver/cool/convert-to" enctype="multipart/form-data" method="post">
    File: <input type="file" name="data"><br/>
    Format: <input type="text" name="format"><br/>
    <input type="submit" value="Convert">
</form>
```

where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.