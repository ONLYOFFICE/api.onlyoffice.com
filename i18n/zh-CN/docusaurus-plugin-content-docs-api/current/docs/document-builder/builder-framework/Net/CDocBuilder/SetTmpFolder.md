import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder

设置程序临时保存正常工作所需文件的文件夹路径。文档文件成功创建后，该文件夹中的所有文件都将被删除。如果未设置临时文件夹，则会使用系统默认的临时文件夹。

## 语法

```cs
void SetTmpFolder(String^ sFolder);
```

## 参数

| 参数名  | 类型     | 描述                                   |
| ------- | -------- | -------------------------------------- |
| sFolder | String^  | 用于保存临时文件的文件夹路径           |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.SetTmpFolder(L"DocBuilderTemp");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        ```
    </TabItem>
</Tabs>
