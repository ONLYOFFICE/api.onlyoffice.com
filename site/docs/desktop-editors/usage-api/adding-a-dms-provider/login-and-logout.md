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

## User Parameters  

| Parameter   | Type   | Description | Example |
|-------------|--------|-------------|---------|
| displayName | string | Defines the user name displayed on the Connected clouds page. **This field is required.** | "John Smith" |
| email       | string | Defines the user email displayed on the Connected clouds page. | "john@example.com" |
| domain      | string | Defines the cloud name and the cloud entry point. **This field is required.** | "https://exampledomain.com" |
| provider    | string | Defines the provider id used to refer to the desktop app in the JavaScript commands (the same as in the config). **This field is required.** | "onlyoffice" |
| uiTheme     | string | Defines the editor theme settings. It can be set in two ways: • **theme id** – the user sets the theme parameter by its id (*theme-light, theme-classic-light, theme-dark, theme-contrast-dark*). • **default theme** – the default dark or light theme value will be set (*default-dark, default-light*). The default light theme is *theme-classic-light*. The first option has higher priority. Apart from the available editor themes, the user can also customize their own color themes for the application interface. | "theme-dark" |
| userId      | string | Defines the user id. **This field is required.** | "78e1e841" |

### Example

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

### domain

Defines the cloud name and the cloud entry point.

Type: string

Example: `https://exampledomain.com`

### Example

``` ts
window.AscDesktopEditor.execCommand("portal:logout", JSON.stringify({
  domain: "https://exampledomain.com",
}));
```
