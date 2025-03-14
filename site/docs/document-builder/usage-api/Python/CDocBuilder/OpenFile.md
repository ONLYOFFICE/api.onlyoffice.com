import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenFile

Opens the document file which will be edited and saved afterwards.

## Syntax

```py
def OpenFile(self, str path, str | None params);
```

## Parameters

| Parameter | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path      | str         | The path to the file to be opened together with its name and extension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| params    | str \| None | The parameters needed for the correct file opening (most commonly, the encoding is used for the `txt` and `csv` file types or the delimiter for the `csv` files, for other file types this is just an empty string). The parameters are added in the form of XML tags, where `m_nCsvTxtEncoding` is used for the text encoding and `m_nCsvDelimiter` is used for the delimiter. You can find all the supported values for the encoding [in this file](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js). The supported values for the `csv` delimiters include:<br/>`0` - no delimiter;<br/>`1` - tab;<br/>`2` - semicolon;<br/>`3` - colon;<br/>`4` - comma;<br/>`5` - space. |

## Example

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        builder = docbuilder.CDocBuilder()
        builder.OpenFile(L"text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>")
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>")
        ```
    </TabItem>
</Tabs>
