﻿<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Basic concepts
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">Basic concepts</span>
    </h1>

    <span class="pvl_product">ONLYOFFICE Community Server</span><span class="pvl_version">v<%= Products.Get("portals").Version %></span>

    <p>
        The ONLYOFFICE Community Server API is implemented as REST over HTTP using GET/POST/PUT/DELETE.
            All the resources, like posts or comments, have their own URLs and are designed to be manipulated in isolation.
    </p>
    <h2>Authentication
    </h2>
    <p>
        Authentication in the ONLYOFFICE Community Server API is managed via the HTTP authentication, i.e. every request must include the Authorization HTTP header.
            For information and examples please visit the <a href="<%= Url.Action("auth") %>">Authentication</a> section.
    </p>
    <h2>Making requests
    </h2>
    <p>
        To identify the request and response format, please make sure that both the <b>Content-Type</b> and <b>Accept</b> headers are set to <em>application/json</em> or <em>application/x-www-form-urlencoded</em>.
            Any API method can be called specifying the format for the response (json or xml).
    </p>
    <p>
        <b>Example:</b><br />
        <b>api/2.0/people/@self</b> can be called both as <b>api/2.0/people/@self.json</b> and <b>api/2.0/people/@self.xml</b>. In the first case, the format of the returned media is = JSON,
        and the second option returns media as = XML.
    </p>
    <p>
        By default, the XML format is used for the response if no format is specified in the request (e.g. <b>api/2.0/people/@self</b> will return XML media).
    </p>
    <h2>Responses
    </h2>
    <p>
        <b>If a request succeeds, it will return a status code in the 200 range</b> and in case no format was specified in the request, it will return an XML-formatted response.
            Note that, in general, if a request causes a new record to be created (like a new post, or comment, etc.), the response will use the <b>201 Created</b> status.
            Any other successful operation (like a successful query, delete, or update) will return a 200 status code.
    </p>
    <p>
        <b>If a request fails, a non-200 status code will be returned</b>, possibly with error information in XML format as the response content.
            For instance, if a requested record could not be found, the HTTP response might look something like:
    </p>
    <pre>HTTP/1.1 404 Not Found</pre>
    <h2>Rate limiting
    </h2>
    <p>
        You can perform up to 500 requests per 10-second period from the same IP address with one account.
        If you exceed this limit, a 503 response for the subsequent requests will be received.
        Check the <b>Retry-After</b> header to see how many seconds to wait before you try again.
    </p>
    <h2>Conventions used in this documentation
    </h2>
    <p>
        The following notation is used in the documentation:<br />
        <b>{text}</b>: indicates the text that should be replaced with your own data (ID, search query, etc.)
    </p>
    <h2>Get help</h2>

    <p>If you have any questions about ONLYOFFICE Community Server, try the <a href="<%= Url.Action("faq") %>">FAQ</a> section first.</p>
    <p>You can request a feature or report a bug by posting an issue on <a href="https://github.com/ONLYOFFICE/CommunityServer/issues" target="_blank">GitHub</a>.</p>
    <p>You can also ask our developers on <a href="https://forum.onlyoffice.com/c/workspace/33" target="_blank">ONLYOFFICE forum</a> (registration required).</p>
</asp:Content>
