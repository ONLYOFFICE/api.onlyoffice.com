---
sidebar_position: -5
---

# Login and logout

Before you start working on documents stored within your cloud, you need to log in to it.

## Login

Use the [execCommand](./execcommand.md) method to display a cloud in the **Connected clouds** list. When the *portal:login* command is sent, the cloud is registered and listed on the **Connected clouds** page. Call the command on all the pages you can access after logging in to your cloud. Parameters are specified in the format of a string with the serialized *json* as follows:

``` json
{
  "displayName": "user name", 
  "email": "user@email.addr",
  "domain": "domain name",
  "provider": "provider",
  "uiTheme": "theme",
  "userId": "user id"
}
```

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| Parameter   | Type   | Example                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayName | string | `"John Smith"`                | Defines the user name displayed on the *Connected clouds* page. **This field is required.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| email       | string | `"john@example.com"`          | Defines the user email displayed on the *Connected clouds* page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| domain      | string | `"https://exampledomain.com"` | Defines the cloud name and the cloud entry point. **This field is required.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| provider    | string | `"onlyoffice"`                | Defines the provider id used to refer to the desktop app in the JavaScript commands (the same as in the [config](adding-a-dms-provider.md)). **This field is required.**                                                                                                                                                                                                                                                                                                                                                                                                 |
| uiTheme     | string | `"theme-dark"`                | Defines the editor theme settings. It can be set in two ways:<br /><br />• **theme id** – the user sets the theme parameter by its id (*theme-light, theme-classic-light, theme-dark, theme-contrast-dark*).<br /><br />• **default theme** – the default dark or light theme value will be set (*default-dark, default-light*).<br /><br />The default light theme is *theme-classic-light*. The first option has higher priority.<br /><br />Apart from the available editor themes, the user can also customize their own color themes for the application interface. |
| userId      | string | `"78e1e841"`                  | Defines the user id. **This field is required.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

```mdx-code-block
</APITable>
```

#### Example

``` ts
const params = {
  displayName: "John Smith",
  email: "john@example.com",
  domain: "https://exampledomain.com",
  provider: "onlyoffice",
  uiTheme: "theme-dark",
  userId: "78e1e841",
};
window.AscDesktopEditor.execCommand("portal:login", JSON.stringify(params));
```

## Logout

Use the [execCommand](./execcommand.md) method to remove a cloud from the **Connected clouds** list. When the *portal:logout* command is sent, the cloud will be removed from the list on the **Connected clouds** page. Cookies for this domain will be cleared. Parameters are specified in the format of a string with the serialized *json* as follows:

``` json
{
  "domain": "domain name"
}
```

```mdx-code-block
<APITable>
```

| Parameter | Type   | Example                     | Description                                       |
| --------- | ------ | --------------------------- | ------------------------------------------------- |
| domain    | string | `https://exampledomain.com` | Defines the cloud name and the cloud entry point. |

```mdx-code-block
</APITable>
```

#### Example

``` ts
window.AscDesktopEditor.execCommand("portal:logout", JSON.stringify({
  domain: "https://exampledomain.com",
}));
```
