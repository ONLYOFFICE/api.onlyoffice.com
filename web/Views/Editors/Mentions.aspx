<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Mentions
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">Mentions</span>
    </h1>
    <p class="dscr">The reference figure and the steps below explain the process of mentioning users in comments in ONLYOFFICE Document Server.</p>
    <img alt="Mentions" src="<%= Url.Content("~/content/img/editor/mentions-create.png") %>" />
    <ol>
        <li>The user sends a request to get a list of users to mention by typing <b>+</b> sign in the comment field in the <b>document editor</b>.</li>
        <li>The <b>document editor</b> informs the <b>document manager</b> about the request.</li>
        <li>The <b>document manager</b> sends the list of users to the <b>document editor</b> where this list will be displayed under the comment field.</li>
        <li>The user types a comment in the comment field in the <b>document editor</b> and the comment is added to the document.</li>
        <li>The <b>document editor</b> sends the message, the list of emails and the link action in the document to the <b>document manager</b>.</li>
    </ol>

    <h2 id="apply" class="copy-link">How this can be done in practice</h2>
    <ol>
        <li>Create an empty <em>html</em> file to <a href="<%= Url.Action("open") %>#apply">Open the document</a>.</li>
        <li>
            <p>
                Specify the event handler for the hint about mentioning users in the comments to be displayed in the configuration script for Document Editor initialization.
                When the user types the <b>+</b> sign, the <a href="<%= Url.Action("config/events") %>#onRequestUsers">onRequestUsers</a> event is called and the commenter can select other users for mentioning in the comments.
            </p>
            <img alt="Mentions" src="<%= Url.Content("~/content/img/editor/onRequestUsers.png") %>" />
            <pre>
var onRequestUsers = function() {
    ...
};

var docEditor = new DocsAPI.DocEditor("placeholder", {
    "events": {
        "onRequestUsers": onRequestUsers,
        ...
    },
    ...
});
</pre>
        </li>
        <li>
            <p>
                In order to set the users list under the comment field, the <a href="<%= Url.Action("methods") %>#setUsers">setUsers</a> method must be called:
            </p>
            <pre>
docEditor.setUsers({
    "users": [
        {
            "email": "john@example.com",
            "name": "John Smith"
        },
        {
            "email": "kate@example.com",
            "name": "Kate Cage"
        },
        ...
    ]
});
</pre>
            <p>
                Where the <b>example.com</b> is the name of the server where <b>document manager</b> and <b>document storage service</b> are installed.
                See the <a href="<%= Url.Action("howitworks") %>">How it works</a> section to find out more on Document Server service client-server interactions.
            </p>
            <table class="table">
                <colgroup>
                    <col style="width: 100px;" />
                    <col />
                    <col style="width: 100px;" />
                    <col style="width: 150px;" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>Parameter</td>
                        <td>Description</td>
                        <td>Type</td>
                        <td>Presence</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>users</td>
                        <td>Defines the list of the users.</td>
                        <td>array of strings</td>
                        <td>optional</td>
                    </tr>
                    <tr class="tablerow">
                        <td>users.email</td>
                        <td>Defines the email address of the user.</td>
                        <td>string</td>
                        <td>required</td>
                    </tr>
                    <tr class="tablerow">
                        <td>users.name</td>
                        <td>Defines the full name of the user.</td>
                        <td>string</td>
                        <td>required</td>
                    </tr>
                </tbody>
            </table>
        </li>
    </ol>

    <h2 id="apply-changes" class="copy-link">Opening the comment</h2>
    <img alt="Mentions" src="<%= Url.Content("~/content/img/editor/actionLink-open.png") %>" />
    <ol>
        <li>The user follows the link in the <b>document manager</b>.</li>
        <li>The <b>document manager</b> sends the initialization <em>editorConfig</em> to the <b>document editor</b>.</li>
        <li>The <b>document editor</b> scrolls the document to the comment.</li>
    </ol>
    <p>
        Specify the event handler for the comment message and the list of emails to be sent in the configuration script for Document Editor initialization.
        When the user adds the comment, the <a href="<%= Url.Action("config/events") %>#onRequestSendNotify">onRequestSendNotify</a> event is called.
        The message and the list of emails are sent in the <em>data</em> parameter.
        The comment data is received in the <em>data.actionLink</em> parameter.
        As in the case of adding an <a href="<%= Url.Action("actionlink") %>#apply">action link</a> to a bookmark, an <em>actionLink</em> object must be used in the configuration as the value for the <a href="<%= Url.Action("config/editor") %>#actionLink">editorConfig.actionLink</a> parameter.
    </p>
    <div class="note">
        In version 5.4, <b>onRequestSendNotify</b> event can only be used if <a href="#onRequestUsers">onRequestUsers</a> event is set.
        Starting from version 5.5, there is no such dependency between <b>onRequestSendNotify</b> and <b>onRequestUsers</b> - both can be set independently.
    </div>
    <pre>
var onRequestSendNotify = function(event) {
    var ACTION_DATA = event.data.actionLink;
    var comment = event.data.message;
    var emails = event.data.emails;
    ...
};

var docEditor = new DocsAPI.DocEditor("placeholder", {
    "events": {
        "onRequestSendNotify": onRequestSendNotify,
        ...
    },
    ...
});
</pre>

    <h2 id="apply-changes" class="copy-link">Sharing settings</h2>
    <p>
        When the <a href="<%= Url.Action("config/events") %>#onRequestSendNotify">onRequestSendNotify</a> event is called, the software integrators provide access to the file, send notifications to the mentioned users with the action link which allows scrolling to the comment position in the document.
    </p>
    <p>
        In the case when the <a href="<%= Url.Action("config/document/info") %>#sharingSettings">document.info.sharingSettings</a> field is used in the document initialization but the list of the users from the <a href="<%= Url.Action("config/events") %>#onRequestSendNotify">onRequestSendNotify</a> event is different, the <a href="<%= Url.Action("methods") %>#setSharingSettings">setSharingSettings</a> method must be called.
    </p>
    <img alt="Mentions" src="<%= Url.Content("~/content/img/editor/sharing_settings.png") %>" />
    <pre>
docEditor.setSharingSettings({
    "sharingSettings": [
        {
            "permissions": "Full Access",
            "user": "John Smith"
        },
        {
            "isLink": true,
            "permissions": "Read Only",
            "user": "External link"
        }
    ]
});
</pre>
            <table class="table">
                <colgroup>
                    <col style="width: 100px;" />
                    <col />
                    <col style="width: 100px;" />
                    <col style="width: 150px;" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>Parameter</td>
                        <td>Description</td>
                        <td>Type</td>
                        <td>Presence</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>sharingSettings</td>
                        <td>Defines the settings which allow sharing the document with other users.</td>
                        <td>array of object</td>
                        <td>optional</td>
                    </tr>
                    <tr class="tablerow">
                        <td>sharingSettings.permissions</td>
                        <td>Defines the access rights for the user with the name above.</td>
                        <td>string</td>
                        <td>optional</td>
                    </tr>
                    <tr class="tablerow">
                        <td>sharingSettings.user</td>
                        <td>Defines the name of the user with whom the document will be shared.</td>
                        <td>string</td>
                        <td>optional</td>
                    </tr>
                </tbody>
            </table>
    <p>
        In the case when the <a href="<%= Url.Action("config/events") %>#onRequestSendNotify">onRequestSendNotify</a> event does not provide access to the file, the <a href="<%= Url.Action("config/editor/customization") %>#mentionShare">mentionShare</a> parameter in the customization section of the editor configuration must be set to <b>false</b>.
    </p>
    <div class="note">
        Please note that it will only be available for the comments if the <a href="<%= Url.Action("config/events") %>#onRequestSendNotify">onRequestSendNotify</a> event is set.
    </div>
    <img alt="Mentions" src="<%= Url.Content("~/content/img/editor/mentionShare.png") %>" />
</asp:Content>
