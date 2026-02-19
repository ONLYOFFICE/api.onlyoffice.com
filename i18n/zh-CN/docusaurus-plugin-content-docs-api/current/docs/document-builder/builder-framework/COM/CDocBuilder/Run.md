import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run (运行)

运行 ONLYOFFICE Document Builder 可执行文件。如果您不想编写应用程序，只需使用 `docbuilder.exe` 可执行文件，并将 `.docbuilder` 文件作为参数运行，该文件中会编写所有用于创建文档文件的代码。对于 COM，创建 `CDocBuilder` 对象并调用 `Run` 方法，参数 `path` 为可执行文件的路径。

## 语法

```cpp
HRESULT Run([in] BSTR path, [out, retval] VARIANT_BOOL* result);
```

## 参数

| **名称** | **类型**       | **描述**                                  |
| -------- | -------------- | ----------------------------------------- |
| path     | BSTR           | ONLYOFFICE Document Builder 可执行文件的路径。 |
| result   | VARIANT_BOOL*  | 指定运行可执行文件的操作是否成功。          |

## 示例

### COM

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->Run("path-to-script.docbuilder", &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
