#### int SaveFile(nType, sPath, sParams);

Saves the file after all the changes are made. The type of the file which will be saved needs to be set.

## Parameters:

| Name         | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| *sExtension* | const wchar\_t\* | The file extension. The following values are possible: **docx**, **odt**, **rtf**, **txt**, **pptx**, **xlsx**, **ods**, **csv**, **pdf** (see [AVS\_OFFICESTUDIO\_FILE\_XXX](/docbuilder/integrationapi/default#format-types) values).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| *sPath*      | const wchar\_t\* | The path to the file to be saved together with its name and extension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| *sParams*    | const wchar\_t\* | The parameters needed for the correct file saving (most commonly, the encoding is used for the *txt* and *csv* file types or the delimiter for the *csv* files, for other file types this is just an empty string). The parameters are added in the form of XML tags, where **m\_nCsvTxtEncoding** is used for the text encoding and **m\_nCsvDelimiter** is used for the *csv* delimiter. You can find all the supported values for the encoding [in this file](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js). The supported values for the *csv* delimiters include:- **0** - no delimiter
- **1** - tab
- **2** - semicolon
- **3** - colon
- **4** - comma
- **5** - spaceWhen saving into an image file (*png* or *jpg*) for creating thumbnails, the additional parameters are used. [See below](#SaveImage) to find them out. |

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
std::wstring sDstPath = sProcessDirectory + L"/result.docx";
oBuilder.SaveFile("docx", sDstPath.c_str());
CDocBuilder::Dispose();
```

#### .docbuilder

```
builder.SaveFile("docx", "result.docx");
```

## Saving into images

**ONLYOFFICE Document Builder** allows to save your document files into image files creating thumbnails of the first page or of all the pages in the document. This is done using the parameters of the *SaveFile()* method. The parameters are added in the form of XML tags, where the following tags can be used:

* **m\_oThumbnail** - the core tag showing that the inner nodes will be used to create a thumbnail out of the document file;
* **format** - the image file format used to create a thumbnail (can be of the following values: **3** - for a JPG file, **4** - for a PNG file);
* **aspect** - the image aspect when creating a thumbnail from the document file (can be of the following values: **1** - will keep the original aspect, **0** - will stretch the image to fit the width and the height set below);
* **first** - whether only the first page or all the pages should be converted into a thumbnail (can be of the following values: **true** - only the first page will be converted, **false** - all the document pages will be used to create thumbnails, in this case the file will be saved as an archive of images, one for each page);
* **width** - the image width in pixels;
* **height** - the image height in pixels.

## Example

#### C++

```
oBuilder.SaveFile(OFFICESTUDIO_FILE_IMAGE, L"thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
```

#### .docbuilder

```
builder.SaveFile("image", "./thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
```