import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# openFile

打开将要编辑并随后保存的文档文件。

## 语法

```java
int openFile(String path, String params);
```

## 参数

| 参数   | 类型   | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path   | String | 要打开的文件的路径，包含其名称和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| params | String | 正确打开文件所需的参数（最常见的是，`txt`和`csv`文件类型使用的编码，或`csv`文件的分隔符，对于其他文件类型，此参数只是一个空字符串）。参数以XML标签的形式添加，其中`m_nCsvTxtEncoding`用于文本编码，`m_nCsvDelimiter`用于`csv`分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。支持的`csv`分隔符值包括：<br/>`0` - 无分隔符；<br/>`1` - 制表符；<br/>`2` - 分号；<br/>`3` - 冒号；<br/>`4` - 逗号；<br/>`5` - 空格。 |

## 示例


<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.openFile(L"text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        ```
    </TabItem>
</Tabs>
