<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Changelog
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h1>
        <span class="hdr">Changelog</span>
    </h1>

    <p class="dscr">The list of changes for ONLYOFFICE Desktop Editors API.</p>

    <h2 id="81" class="copy-link">Version 8.1</h2>
    <ul>
        <li>Added the <a href="<%= Url.Action("addingdms/gettingviewportsettings") %>">getViewportSettings</a> method to the <em>AscDesktopEditor</em> object.</li>
        <li>Added the <a href="<%= Url.Action("addingdms/gettingviewportsettings") %>">onViewportSettingsChanged</a> event to the <em>AscDesktopEditor</em> object.</li>
    </ul>

    <h2 id="75" class="copy-link">Version 7.5</h2>
    <ul>
        <li>Added the <a href="<%= Url.Action("addingdms/changingtheme") %>">portal:uitheme</a> command to the <em>execCommand</em> method.</li>
        <li>Added the <a href="<%= Url.Action("addingdms/loginlogout") %>#uiTheme">uiTheme</a> parameter to the <em>portal:login</em> command.</li>
    </ul>

    <h2 id="71" class="copy-link">Version 7.1</h2>
    <ul>
        <li>Added the <em>--ascdesktop-support-debug-info-keep</em> flag to <a href="<%= Url.Action("debugging") %>#running">run</a> the application.</li>
    </ul>

    <h2 id="70" class="copy-link">Version 7.0</h2>
    <ul>
        <li>Added the <a href="<%= Url.Action("addingdms/") %>#extraLogout">extraLogout</a> parameter to the config with DMS integration parameters.</li>
    </ul>

    <h2 id="64" class="copy-link">Version 6.4</h2>
    <ul>
        <li>Added the possibility to use icons for each UI theme type in the <a href="<%= Url.Action("addingdms/") %>">config</a> with integration parameters.</li>
    </ul>

    <h2 id="63" class="copy-link">Version 6.3</h2>
    <ul>
        <li>Added the <a href="<%= Url.Action("addingdms/") %>#entryPage">entryPage</a> parameter to the config with DMS integration parameters.</li>
        <li>Added the <em>updateEncryptionKeys</em> <a href="<%= Url.Action("addingdms/encryption") %>#type">command type</a> to the <em>cloudCryptoCommand</em> function.</li>
    </ul>

    <h2 id="62" class="copy-link">Version 6.2</h2>
    <ul>
        <li>Added <a href="<%= Url.Action("addingdms/") %>">config</a> with DMS integration parameters.</li>
        <li>Added the <a href="<%= Url.Action("execCommand") %>">execCommand</a> method.</li>
        <li>Added commands for <a href="<%= Url.Action("addingdms/opening") %>#open-command">document opening</a>.</li>
    </ul>

    <h2 id="61" class="copy-link">Version 6.1</h2>
    <ul>
        <li>Added <a href="<%= Url.Action("addingdms/configuring") %>#recognize">AscDesktopEditor</a> label to userAgent.</li>
    </ul>

    <h2 id="56" class="copy-link">Version 5.6</h2>
    <ul>
        <li>Added <a href="<%= Url.Action("addingdms/encryption") %>">encryption</a>.</li>
    </ul>

</asp:Content>