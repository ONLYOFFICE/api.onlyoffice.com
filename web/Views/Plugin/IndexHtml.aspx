﻿<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    index.html
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">index.html</span>
    </h1>

    <p class="dscr">Each plugin acts in its own iframe. The editor will connect the <em>index.html</em> file, specified in the <a href="<%= Url.Action("config") %>">config.json</a> plugin configuration file.
        The <em>index.html</em> file is the plugin entry point, connecting the <a href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js" target="_blank">plugin.js</a> file - the base file needed for work with plugins in the editors.</p>

    <div class="header-gray">Example</div>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8" /&gt;
        &lt;title&gt;Plugin name&lt;/title&gt;
        &lt;script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"&gt;&lt;/script&gt;
        &lt;link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css"&gt;
        &lt;script type="text/javascript" src="plugin.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body style="width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;"&gt;
        &lt;div id="plugin name" style="margin: 0; padding: 0;"&gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</pre>

    <p>The <em>&lt;head&gt;...&lt;/head&gt;</em> section contains the links to all the scripts and stylesheets necessary for the plugin correct work (both local and remote, if the plugin uses some). It also includes the link to the <em>plugins.js</em> base file needed for correct work with the editors and containing the base plugin method work.</p>
    <p>If the plugin is visual and you want its buttons and elements to look like those in the editor,
        then you can connect the <a href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js" target="_blank">plugins-ui.js</a> and <a href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css" target="_blank">plugins.css</a> files.
    More information about ONLYOFFICE styles and elements can be found <a href="<%= Url.Action("styles") %>">here</a>.</p>

    <p>The body can contains the <em>&lt;div&gt;...&lt;/div&gt;</em> tags with the placeholders where the plugin components will be inserted. The behavior of these plugin components is described in the <a href="<%= Url.Action("code") %>">file with plugin code</a> itself.</p>
</asp:Content>
