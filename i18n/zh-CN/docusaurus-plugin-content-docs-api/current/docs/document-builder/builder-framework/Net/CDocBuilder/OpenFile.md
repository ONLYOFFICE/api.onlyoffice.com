import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenFile（打开文件）

打开将要进行编辑并在之后保存的文档文件。

## 语法

```cs
int OpenFile(String^ sPath, String^ sParams);
```

## 参数

| 参数      | 类型     | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sPath     | String^  | 要打开的文件的路径，包含文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| sParams   | String^  | 正确打开文件所需的参数（最常见的是，`txt`和`csv`文件类型使用的编码，或`csv`文件的分隔符，对于其他文件类型，此参数为空字符串）。参数以XML标签的形式添加，其中`m_nCsvTxtEncoding`用于文本编码，`m_nCsvDelimiter`用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv`分隔符支持的值包括：<br/>`0` - 无分隔符；<br/>`1` - 制表符；<br/>`2` - 分号；<br/>`3` - 冒号；<br/>`4` - 逗号；<br/>`5` - 空格。 |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.OpenFile(L"text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        ```
    </TabItem>
</Tabs>
