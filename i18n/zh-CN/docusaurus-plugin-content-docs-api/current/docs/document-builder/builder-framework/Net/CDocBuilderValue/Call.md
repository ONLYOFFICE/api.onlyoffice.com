import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 调用（Call）

调用指定的文档生成器方法。有关各种文档类型可用的方法的更多信息，请参见[文本文档API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿API](/docs/office-api/usage-api/presentation-api/presentation-api.md)或[表单API](/docs/office-api/usage-api/form-api/form-api.md)部分。

> 请注意，对于`.docbuilder`文件，不会显式使用`CDocBuilderValue.Call`方法。而是直接使用该方法本身。见下面的示例。

## 语法

```cs
CDocBuilderValue^ Call(String^ sName, CDocBuilderValue^ p1, CDocBuilderValue^ p2, CDocBuilderValue^ p3, CDocBuilderValue^ p4, CDocBuilderValue^ p5, CDocBuilderValue^ p6);
```

## 参数

| 参数   | 类型                                                         | 描述                                  |
| ------ | ------------------------------------------------------------ | ------------------------------------- |
| sName  | String^                                                      | 文档生成器方法的名称。                |
| p1-p6  | [CDocBuilderValue^](../CDocBuilderValue/CDocBuilderValue.md) | 文档生成器方法作为参数接收的参数。    |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        CValue oApi = oGlobal["Api"];
        CValue oDocument = oApi.Call("GetDocument");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        ```
    </TabItem>
</Tabs>
