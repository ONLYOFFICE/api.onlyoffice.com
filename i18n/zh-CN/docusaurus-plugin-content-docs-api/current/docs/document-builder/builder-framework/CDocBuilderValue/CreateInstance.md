import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateInstance

创建 `CDocBuilderValue` 类的实例。

:::note
此方法仅在 **COM** 中可用。
:::

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.CreateInstance` 方法。

## 语法

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateInstance([in, optional] VARIANT value);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | 名称  | 类型    | 描述                         |
        | ----- | ------- | ---------------------------- |
        | value | VARIANT | 用于创建实例的值。           |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oGlobal = NULL;
        IONLYOFFICEDocBuilderValue* oApi = NULL;
        IONLYOFFICEDocBuilderValue* oDocument = NULL;
        IONLYOFFICEDocBuilderValue* oParagraph = NULL;
        I_DOCBUILDER_VALUE* p1 = NULL;
        p1->CreateInstance(1000);
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
        oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
        oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
        oParagraph->Call(_bstr_t("SetSpacingAfter"), p1, ATL::CComVariant(VARIANT_FALSE), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        let paragraph = Api.CreateParagraph();
        paragraph.SetSpacingAfter(1000, false);
        ```
    </TabItem>
</Tabs>
