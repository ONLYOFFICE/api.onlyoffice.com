---
sidebar_position: -7
---

# 主机页面

为了在您的应用程序中创建一个online office会话，主机必须创建一个 HTML 页面，该页面将在其中嵌入一个指向特定 [WOPI 操作 URL](./wopi-discovery.md#wopi-actions)的 iframe 元素。

主机页面必须包含以下元素：
f
- 出于安全目的，主机必须通过一个 *form* 元素将 [access\_token](#access_token) 和 [access\_token\_ttl](#access_token_ttl) 参数 *POST* 到online office iframe。 [docs\_api\_config](#docs_api_config) 参数是可选的。
- 使用 [PostMessage](./postmessage.md) 与online office iframe 交互的 JavaScript 代码。
- Body元素和online office的特定 CSS 样式，以避免视觉包。 此外，主机页面应使用 [WOPI 发现](./wopi-discovery.md)中提供的网站图标 URL 为页面设置适当的网站图标。
- 用于避免移动端浏览器的视觉和功能问题的 *viewport* 元标签。

## 主机页面代码

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />

    <title>ONLYOFFICE Document Editors</title>
    <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />

    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            -ms-content-zooming: none;
        }
        
        #office_frame {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
            border: none;
            display: block;
        }
    </style>
</head>

<body>

    <form id="office_form" name="office_form" target="office_frame" action="<%= actionUrl %>" method="post">
        <input name="access_token" value="<%= token %>" type="hidden" />
        <input name="access_token_ttl" value="<%= tokenTtl %>" type="hidden" />
        <!-- <input name="docs_api_config" value="<%= apiConfig %>" type="hidden" /> -->
    </form>

    <span id="frameholder"></span>

    <script type="text/javascript">
        var frameholder = document.getElementById('frameholder');
        var office_frame = document.createElement('iframe');
        office_frame.name = 'office_frame';
        office_frame.id = 'office_frame';

        office_frame.title = 'Office Frame';
        office_frame.setAttribute('allowfullscreen', 'true');

        office_frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox allow-downloads allow-modals');
        office_frame.setAttribute('allow', 'autoplay camera microphone display-capture');
        frameholder.appendChild(office_frame);

        document.getElementById('office_form').submit();
    </script>

</body>

</html>
```

> 请注意，*"\<%= actionUrl %\>"*, *"\<%= token %\>"*, *"\<%= tokenTtl %\>"*, *"\<%= apiConfig %\>"* 字符串将使用适当的参数呈现。

## 参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称               | 类型    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access\_token      | string  | [访问令牌](./key-concepts.md#access-token)主机将用于确定 WOPI 请求发出者的身份和权限的访问令牌。                                                                                                                                                                                                                                                                                                                                                                                                                           |
| access\_token\_ttl | integer | [访问令牌过期](./key-concepts.md#the-access_token_ttl-property)的时间，表示为自1970年1月1日 UTC 以来的毫秒数。建议将此参数设置为 10 小时。此参数也可以设置为 0。对于客户端来说，这意味着令牌的有效期是无限的或未知的。在这种情况下，客户端可能会禁用任何提示用户刷新会话的 UI。这可能会导致访问令牌过期而导致意外的数据丢失。因此，强烈建议为 *access_token_ttl* 指定一个值。 |
| docs\_api\_config  | string  | 可选的 [config](../usage-api/config/config.md) 参数，用来通过 Docs API 打开编辑器，这些参数不受 WOPI 协议支持。例如，要通过单击**保存**按钮启用 [forcesaving](../get-started/how-it-works/saving-file.md#force-saving) 功能，必须在此对象中传递 [editorConfig.customization.forcesave](../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) 参数。                                                                                                           |

```mdx-code-block
</APITable>
```

可以在 [这里](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/hostpage)找到有关构建主机页面的更多信息。
