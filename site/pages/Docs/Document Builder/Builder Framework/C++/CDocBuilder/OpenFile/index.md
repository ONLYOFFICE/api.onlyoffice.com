#### int OpenFile(sPath, sParams);

Opens the document file which will be edited and saved afterwards.

## Parameters:

| Name      | Type             | Attributes  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ---------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *sPath*   | const wchar\_t\* |             | The path to the file to be opened together with its name and extension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| *sParams* | const wchar\_t\* | \<optional> | The parameters needed for the correct file opening (most commonly, the encoding is used for the *txt* and *csv* file types or the delimiter for the *csv* files, for other file types this is just an empty string). The parameters are added in the form of XML tags, where **m\_nCsvTxtEncoding** is used for the text encoding and **m\_nCsvDelimiter** is used for the **delimiter. You can find all the supported values for the encoding [in this file](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js). The supported values for the *csv* delimiters include:- **0** - no delimiter
- **1** - tab
- **2** - semicolon
- **3** - colon
- **4** - comma
- **5** - space |

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.OpenFile(L"text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
CDocBuilder::Dispose();
```

#### .docbuilder

```
builder.OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
```