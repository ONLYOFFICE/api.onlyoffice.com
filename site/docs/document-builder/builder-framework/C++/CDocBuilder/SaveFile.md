import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SaveFile

Saves the file after all the changes are made. The type of the file which will be saved needs to be set.

## Syntax

```cpp
int SaveFile(int nExtension, const wchar_t* sPath, const wchar_t* sParams);
```

## Parameters

| **Name**   | **Data type**  | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nExtension | int | The file extension. For the following values are possible: `OFFICESTUDIO_FILE_DOCUMENT_DOCX`, `OFFICESTUDIO_FILE_DOCUMENT_ODT`, `OFFICESTUDIO_FILE_DOCUMENT_RTF`, `OFFICESTUDIO_FILE_DOCUMENT_TXT`, `OFFICESTUDIO_FILE_PRESENTATION_PPTX`, `OFFICESTUDIO_FILE_PRESENTATION_ODP`, `OFFICESTUDIO_FILE_SPREADSHEET_XLSX`, `OFFICESTUDIO_FILE_SPREADSHEET_ODS`, `OFFICESTUDIO_FILE_SPREADSHEET_CSV`, `OFFICESTUDIO_FILE_DOCUMENT_OFORM_PDF`, `OFFICESTUDIO_FILE_CROSSPLATFORM_PDF` (see [OFFICESTUDIO\_FILE\_XXX](../../../get-started/supported-formats.md) values).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| sPath      | const wchar_t* | The path to the file to be saved together with its name and extension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| sParams    | const wchar_t* | The parameters needed for the correct file saving (most commonly, the encoding is used for the `txt` and `csv` file types or the delimiter for the `csv` files, for other file types this is just an empty string). The parameters are added in the form of XML tags, where `m_nCsvTxtEncoding` is used for the text encoding and `m_nCsvDelimiter` is used for the `csv` delimiter. You can find all the supported values for the encoding [in this file](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js). The supported values for the `csv` delimiters include:<br/>`0` - no delimiter;<br/>`1` - tab;<br/>`2` - semicolon;<br/>`3` - colon;<br/>`4` - comma;<br/>`5` - space.<br/>When saving into an image file (`png` or `jpg`) for creating thumbnails, the additional parameters are used. [See below](#saving-into-images) to find them out. |

## Example

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        std::wstring sDstPath = sProcessDirectory + L"/result.docx";
        oBuilder.SaveFile("docx", sDstPath.c_str());
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SaveFile("docx", "result.docx");
        ```
    </TabItem>
</Tabs>

## Saving into images

ONLYOFFICE Document Builder allows to save your document files into image files creating thumbnails of the first page or of all the pages in the document. This is done using the parameters of the `SaveFile()` method. The parameters are added in the form of XML tags, where the following tags can be used:

- `m_oThumbnail` - the core tag showing that the inner nodes will be used to create a thumbnail out of the document file;
- `format` - the image file format used to create a thumbnail (can be of the following values: `3` - for a JPG file, `4` - for a PNG file);
- `aspect` - the image aspect when creating a thumbnail from the document file (can be of the following values: `1` - will keep the original aspect, `0` - will stretch the image to fit the width and the height set below);
- `first` - whether only the first page or all the pages should be converted into a thumbnail (can be of the following values: `true` - only the first page will be converted, `false` - all the document pages will be used to create thumbnails, in this case the file will be saved as an archive of images, one for each page);
- `width` - the image width in pixels;
- `height` - the image height in pixels.

## Example

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        oBuilder.SaveFile(OFFICESTUDIO_FILE_IMAGE, L"thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SaveFile("image", "./thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>")
        ```
    </TabItem>
</Tabs>
