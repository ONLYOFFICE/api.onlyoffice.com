import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder（设置临时文件夹）

设置程序临时保存工作所需文件的文件夹路径。文档文件成功创建后，该文件夹中的所有文件都将被删除。如果未设置临时文件夹，则会使用系统默认的临时文件夹。

## 语法

```py
def SetTmpFolder(self, str folder);
```

## 参数

| 参数   | 类型 | 描述                                   |
| ------ | ---- | -------------------------------------- |
| folder | str  | 用于保存临时文件的文件夹路径 |

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.SetTmpFolder("DocBuilderTemp")
        builder.CreateFile("docx")

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        ```
    </TabItem>
</Tabs>
