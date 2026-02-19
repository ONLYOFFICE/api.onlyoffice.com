import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get（获取）

通过索引返回数组中的值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Get` 方法。

## 语法

```cpp
HRESULT Get([in] long index, [out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数名 | 类型 | 描述 |
| ---- | --------------------------------------------------------------- | ---- |
| index | long | 数组值的索引。 |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的数组值。 |

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oGlobal = NULL;
        IONLYOFFICEDocBuilderValue* oApi = NULL;
        IONLYOFFICEDocBuilderValue* oDocument = NULL;
        IONLYOFFICEDocBuilderValue* aCharts = NULL;
        IONLYOFFICEDocBuilderValue* oChart = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
        oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
        oDocument->Call(_bstr_t("GetAllCharts"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aCharts);
        aCharts->Get(1, &oChart);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        let charts = doc.GetAllCharts();
        let chart = charts[1];
        ```
    </TabItem>
</Tabs>
