<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("addingdms/") %>"></a>
    <span class="hdr">Login/logout</span>
</h1>

<p>Before you start working on documents stored within your cloud, you need to log in to it.</p>

<h2 id="login" class="copy-link">Login</h2>
<p>Use the <a href="<%= Url.Action("execcommand") %>">execCommand</a> method to display a cloud in the <b>Connected clouds</b> list.
When the <em>portal:login</em> command is sent, the cloud is registered and listed on the <b>Connected clouds</b> page.
Call the command on all the pages you can access after logging in to your cloud.
Parameters are specified in the format of a string with the serialized <em>json</em> as follows:</p>
<pre>
{
    "displayName": "user name", 
    "email": "user@email.addr",
    "domain": "domain name",
    "provider": "provider",
    "uiTheme": "theme",
    "userId": "user id"
}
</pre>

<div class="header-gray">Parameters</div>
<table class="table">
    <colgroup>
        <col class="table-name" />
        <col />
        <col class="table-type" />
        <col class="table-example" />
    </colgroup>
    <thead>
        <tr class="tablerow">
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Example</td>
        </tr>
    </thead>
    <tbody>
        <tr class="tablerow">
            <td id="displayName" class="copy-link">displayName<span class="required">*</span></td>
            <td>
                Defines the user name displayed on the <b>Connected clouds</b> page.
            </td>
            <td>string</td>
            <td>"John Smith"</td>
        </tr>
        <tr class="tablerow">
            <td id="email" class="copy-link">email</td>
            <td>
                Defines the user email displayed on the <b>Connected clouds</b> page.
            </td>
            <td>string</td>
            <td>"john@example.com"</td>
        </tr>
        <tr class="tablerow">
            <td id="domain" class="copy-link">domain<span class="required">*</span></td>
            <td>
                Defines the cloud name and the cloud entry point.
            </td>
            <td>string</td>
            <td>"https://exampledomain.com"</td>
        </tr>
        <tr class="tablerow">
            <td id="provider" class="copy-link">provider<span class="required">*</span></td>
            <td>
                Defines the provider id used to refer to the desktop app in the JavaScript commands (the same as in the <a href="<%= Url.Action("addingdms/") %>">config</a>).
            </td>
            <td>string</td>
            <td>"onlyoffice"</td>
        </tr>
        <tr class="tablerow">
            <td id="uiTheme" class="copy-link">uiTheme</td>
            <td>
                Defines the editor theme settings.
                It can be set in two ways:
                <ul>
                    <li><b>theme id</b> - the user sets the theme parameter by its id (<b>theme-light</b>, <b>theme-classic-light</b>, <b>theme-dark</b>, <b>theme-contrast-dark</b>),</li>
                    <li>
                        <b>default theme</b> - the default dark or light theme value will be set (<b>default-dark</b>, <b>default-light</b>).
                        The default light theme is <b>theme-classic-light</b>.
                    </li>
                </ul>
                The first option has higher priority.
                <p></p>
                Apart from the available editor themes, the user can also customize their own <a href="https://helpcenter.onlyoffice.com/installation/docs-developer-change-theme.aspx" target="_blank">color themes</a> for the application interface.
            </td>
            <td>string</td>
            <td>"theme-dark"</td>
        </tr>
        <tr class="tablerow">
            <td id="userId" class="copy-link">userId<span class="required">*</span></td>
            <td>
                Defines the user id.
            </td>
            <td>string</td>
            <td>"78e1e841"</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<span class="required-descr"><span class="required">*</span><em> - required field</em></span>

<div class="header-gray">Example</div>
<pre>
const params = {
    "displayName": "John Smith", 
    "email": "john@example.com",
    "domain": "https://exampledomain.com",
    "provider": "onlyoffice",
    "uiTheme": "theme-dark",
    "userId": "78e1e841"
}
window.AscDesktopEditor.execCommand ("portal:login", JSON.stringify(params))
</pre>

<h2 id="logout" class="copy-link">Logout</b></h2>
<p>Use the <a href="<%= Url.Action("execcommand") %>">execCommand</a> method to remove a cloud from the <b>Connected clouds</b> list.
When the <em>portal:logout</em> command is sent, the cloud will be removed from the list on the <b>Connected clouds</b> page.
Cookies for this domain will be cleared. Parameters are specified in the format of a string with the serialized <em>json</em> as follows:</p>
<pre>
{
    "domain": "domain name"
}
</pre>

<div class="header-gray">Parameters</div>
<table class="table">
    <colgroup>
        <col class="table-name" />
        <col />
        <col class="table-type" />
        <col class="table-example" />
    </colgroup>
    <thead>
        <tr class="tablerow">
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Example</td>
        </tr>
    </thead>
    <tbody>
        <tr class="tablerow">
            <td id="domain" class="copy-link">domain</td>
            <td>
                Defines the cloud name and the cloud entry point.
            </td>
            <td>string</td>
            <td>"https://exampledomain.com"</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<div class="header-gray">Example</div>
<pre>
window.AscDesktopEditor.execCommand ("portal:logout", JSON.stringify ({
    "domain": "https://exampledomain.com"
}));
</pre>
