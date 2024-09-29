/*
    ECMA Script is the specification on which javascript is based
    Serves as guidelines or rules for scripting
    language design

    The DOM Manipulation which can be done using
    javascript is not specified in the ECMA script 

    Engines are written to interpet javascript code 
    - Each browser has their own engine to work with javascript
    - Chrome has an inhouse ingine in C ( V8 Engine )
    - Firefox has its own engine in C + Rust ( SpiderMonkey  )

    The NODE.JS is V8 ingine taken out of the browser, adding more backend functionalities like HTTP, Reading files etc
    - Because before we needed to make frontend in JS
    - Make backend in Java, basically learn two different stacks so what we did was make 
    it easier to work in javascript for fullstack development

    Node.JS -> It is not a framework, not a library it is a RUNTIME

    Bun is a competitor for Node, it is significantly more efficient than node, and
    it is written in ZIG, which is being used in low latency systems


    WHAT CAN WE DO WITH NODE JS
    -----------------------------
    1. Create CLIs
    2. Create a video player
    3. Create a game
    4. Create an HTTP server
*/

/*
    WHAT IS AN HTTP SERVER
    ==========================
    HTTP -> Hypertext transfer protocol
    - A protocol that is defined for machines to communicate
    - Specifically for websites it is the most common way for your website's frontend to talk to its backend

    HTTP server is basically code that follows the
    HTTP protocol and is able to communicate with clients
    
    It is client throwing some information at a server, server processing the information and responding with
    a final result. 

    1. Think of them as functions
    2. Arguments are something that client sends
    3. Rather than calling a function using its name the client uses a URL
    4. Rather than the function body, the server does something with the request
    5. Rather than the function returning a value, the server responds with some data


    => When sending a HTTP request to server the client needs to worry about the following things
    - Protocol ( HTTP/HTTPS )
    - Address ( URL/IP/PORT )
    - Route
    - Headers, Body, Query Parameters
    - Method

    => When server is responding to the client it needs to worry about
    - Response headers
    - Response body
    - Status codes

    // CLIENT SIDE 

    URLS:
    ------
    https://chatopenai.com/backend-api/conversation

    https -> protocl
    chatopenai.com -> url
    route -> backend-api/conversation 

    ( Need to specify route as server can do many things, you need to specify what you want the server to do )

    HEADERS:
    ---------
    The headers contains things like cookies and other
    data which specifies details of your request

    BODY:
    -------
    This is where the content you want to send to server is basically in form of JSON when we send the data

    METHOD:
    --------
    What is the HTTP request serving the purpose of, if that method is supported on that route etc.

    => When we get a response then in that case there is Response Headers -> Which in case of loging in only contains the cookies 
    - Then the response body which contains the data in form of JSON object
    - Status code telling more about the request, if it was successful or was errorenous etc. 
*/

/*
    Sequence of events when we do something:
    ----------------------------------------
    1. Browser parses the URL
    2. Does a DNS Lookup ( convert google.com to an IP)
    3. Establishes a connecton to the IP ( does handshake )

    DNS (Domain Name Service) Resolution
    ----------------
    URLs are just liek contacts in your phone
    In the end they map to an IP
    If you ever buy a URL on your own, you will need to point it to the IP of your server

    HTTP METHODS
    ===============
    GET -> To retrive data
    POST -> Submits entity to specified resource
    PUT -> Replaces all current representation of target resource
    DELETE -> Deletes specified resource
    PATCH -> When making modification to a resource

    HTTP STATUS CODES
    ===================
    200 - Everything is ok
    404 - Page / Route not found
    403 - Autentication issue
    500 - Internal Server Error
*/