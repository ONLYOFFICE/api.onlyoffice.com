import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run (运行)

运行 ONLYOFFICE Document Builder 可执行文件。如果您不想编写 C++ 应用程序，只需使用 `docbuilder.exe` 可执行文件，并将 `.docbuilder` 文件作为参数运行，该文件中包含所有用于创建文档文件的代码。对于 C++，创建 `CDocBuilder` 对象并调用 `Run` 方法，同时从 `sPath` 参数传入可执行文件的路径。

## 语法

```cpp
bool Run(const wchar_t* sPath);
```

## 参数

| **名称** | **数据类型**   | **描述**                                         |
| -------- | -------------- | ------------------------------------------------ |
| sPath    | const wchar_t* | ONLYOFFICE Document Builder 可执行文件的路径。 |

## 示例

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        int wmain(int argc, wchar_t *argv[])
        {
          if (argc <= 0)
            return 0;
          CDocBuilder::Initialize(sWorkDirectory.c_str());
          CDocBuilder oBuilder;
        #ifdef _DOC_BUILDER_EXECUTABLE_
          std::wstring sBuildFile(argv[argc - 1]);
          oBuilder.Run(argv[argc - 1]);
        #endif
          CDocBuilder::Dispose();
          return 0;
        }
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
