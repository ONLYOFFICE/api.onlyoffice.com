﻿<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    callCommand
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <a class="up" href="<%= Url.Action("plugin") %>"></a>
        <span class="hdr">window.Asc.plugin.callCommand (func, isClose, isCalc, callback)</span>
    </h1>

    <div class="header-gray">Description</div>

    <p class="dscr">Defines the method used to send the data back to the editor. It replaces the <a href="<%= Url.Action("executeCommand") %>">executeCommand</a> method 
        when working with texts in order to simplify the syntax of the script that is necessary to pass to the editors using 
        <b>ONLYOFFICE Document Builder</b> <a href="<%= Url.Action("basic", "docbuilder") %>">API</a>. 
        It allows the plugin to send structured data that can be inserted to the resulting document file (formatted paragraphs, tables, text parts and separate words, etc.).</p>

    <p>The <em>callback</em> is the result that the command returns. It is an optional parameter. In case it is missing, 
        the <a href="<%= Url.Action("events") %>#onCommandCallback">window.Asc.plugin.onCommandCallback</a> function will be used to return the result of the command execution.</p>

    <div class="note"><b>ONLYOFFICE Document Builder</b> commands can be only used to create content and insert it to the document editor (using the <em>Api.GetDocument().InsertContent(...))</em>. This limitation exists due to the co-editing feature in the online editors. If it is necessary to create a plugin for desktop editors to work with local files, no such limitation is applied.</div>

    <div class="header-gray">Parameters</div>

    <table class="table">
        <colgroup>
            <col style="width: 100px;" />
            <col />
            <col style="width: 100px;" />
        </colgroup>
        <thead>
            <tr class="tablerow">
                <td>Name</td>
                <td>Description</td>
                <td>Type</td>
            </tr>
        </thead>
        <tbody>
            <tr class="tablerow">
                <td>func</td>
                <td>Defines the command written in JavaScript which purpose is to form structured data which can be inserted to the resulting document file (formatted paragraphs, tables, text parts and separate words, etc.). Then the data is sent to the editors. The command must be compatible with <a href="<%= Url.Action("basic", "docbuilder") %>">ONLYOFFICE Document Builder</a> syntax.</td>
                <td>function</td>
            </tr>
            <tr class="tablerow">
                <td>isClose</td>
                <td>Defines whether the plugin window must be closed after the code is executed or left open waiting for another command or action. The <em>true</em> value is used to close the plugin window after executing the function in the <em>func</em> parameter. The <em>false</em> value is used to execute the command and leave the window open waiting for the next command.</td>
                <td>boolean</td>
            </tr>
            <tr class="tablerow">
                <td>isCalc</td>
                <td>Defines whether the document will be recalculated or not. The <em>true</em> value is used to recalculate the document after executing the function in the <em>func</em> parameter. The <em>false</em> value will not recalculate the document (use it only when your edits surely will not require document recalculation).</td>
                <td>boolean</td>
            </tr>
            <tr class="tablerow">
                <td>callback</td>
                <td>The result that the method returns.</td>
                <td>function</td>
            </tr>
        </tbody>
    </table>

    <p>This method is executed in its own context isolated from other JavaScript data. If some parameters or other data need to be passed to this method, use <a href="<%= Url.Action("scope") %>">Asc.scope</a> object.</p>

    <div class="header-gray">Example</div>

    <pre>
window.Asc.plugin.init = function () {
    this.callCommand(function() {
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText("Hello world!");
        oDocument.InsertContent([oParagraph]);
    }, true);
};
</pre>

</asp:Content>
