<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Learn Apollo</h1>

<p>Welcome to the <strong>Learn Apollo</strong> project! This application demonstrates how to build a simple GraphQL server using Apollo and how to connect it with a React frontend using Apollo Client. This README aims to guide you through the concepts of Apollo and how to use them effectively in your applications.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#running-the-application">Running the Application</a></li>
        </ul>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#understanding-apollo">Understanding Apollo</a>
        <ul>
            <li><a href="#apollo-server">Apollo Server</a></li>
            <li><a href="#apollo-client">Apollo Client</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#resources">Resources</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2 id="introduction">Introduction</h2>
<p>Apollo is a powerful GraphQL implementation that helps you manage data flow in your applications seamlessly. In this project, we set up a GraphQL server with Apollo Server and a React application that uses Apollo Client to interact with the server. By using Apollo, developers can simplify their data fetching logic and improve the performance of their applications.</p>

<h2 id="features">Features</h2>
<ul>
    <li>Fetch user data from a GraphQL server.</li>
    <li>Simple and clean code structure for easy understanding.</li>
    <li>Demonstrates the integration of Apollo Server and Apollo Client.</li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>
<p>Before you begin, ensure you have the following installed on your machine:</p>
<ul>
    <li><a href="https://nodejs.org/en/download/">Node.js</a> (v14 or later)</li>
    <li><a href="https://www.npmjs.com/get-npm">npm</a> or <a href="https://yarnpkg.com/getting-started/install">yarn</a></li>
</ul>

<h3 id="installation">Installation</h3>
<pre><code>git clone https://github.com/mokamaleldin/Learn-Apollo.git
cd Learn-Apollo
</code></pre>
<p>Navigate to the server directory and install the dependencies:</p>
<pre><code>cd server
npm install
</code></pre>
<p>Navigate to the client directory and install the dependencies:</p>
<pre><code>cd ../client
npm install
</code></pre>

<h3 id="running-the-application">Running the Application</h3>
<p>1. Start the GraphQL server:</p>
<pre><code>cd server
npm start
</code></pre>
<p>The server will be running on <code>http://localhost:4000</code>.</p>
<p>2. Start the React client:</p>
<pre><code>cd ../client
npm start
</code></pre>
<p>The client will be running on <code>http://localhost:3000</code>.</p>

<h2 id="project-structure">Project Structure</h2>
<p>Here's a brief overview of the project structure:</p>
<pre><code>/Learn-Apollo
│
├── /client                     # React client application
│   ├── /lib/apolloClient.js    # Apollo client configuration: sets up the Apollo Client instance to connect to the GraphQL server.
│   ├── /app/ApolloWrapper.js   # Apollo Provider wrapper: wraps the application in ApolloProvider to enable the use of Apollo Client throughout the app.
│   ├── /app/layout.js          # Main layout for the app: contains shared layout components like headers and footers.
│   └── /app/page.js            # Main page displaying users: contains the component that fetches and displays user data from the GraphQL server.
│
└── /server                     # Apollo server application
    └── server.js               # Main server file: sets up the Apollo Server, defines the GraphQL schema, and resolvers to handle data queries.
</code></pre>

<h3 id="client/apolloClient.js">/client/lib/apolloClient.js</h3>
<p>This file configures the Apollo Client. It initializes an instance of Apollo Client and connects it to the GraphQL server URL. The client is set up with caching mechanisms to optimize data fetching and performance.</p>

<h3 id="client/ApolloWrapper.js">/client/app/ApolloWrapper.js</h3>
<p>The ApolloWrapper component wraps the entire application in the ApolloProvider, which makes the Apollo Client instance available throughout the app. This allows you to use hooks like <code>useQuery</code> and <code>useMutation</code> in your components.</p>

<h3 id="client/layout.js">/client/app/layout.js</h3>
<p>This file defines the main layout of the application. It includes shared components like headers, footers, and navigation. This helps maintain a consistent structure across different pages of the app.</p>

<h3 id="client/page.js">/client/app/page.js</h3>
<p>The main page component where user data is fetched and displayed. It utilizes the <code>useQuery</code> hook to fetch user data from the GraphQL server and renders it in a list format, ensuring efficient data handling and user experience.</p>

<h3 id="server/server.js">/server/server.js</h3>
<p>This is the entry point of the Apollo server. It sets up the Apollo Server with defined GraphQL schema and resolvers. This file handles incoming GraphQL requests and serves data to the client based on the queries made.</p>

<h2 id="understanding-apollo">Understanding Apollo</h2>

<h3 id="apollo-server">Apollo Server</h3>
<p>Apollo Server is a community-driven, open-source GraphQL server that works with any GraphQL schema. In this project, we defined a simple schema for users and set up resolvers to handle queries. Apollo Server allows for easy setup and configuration, enabling you to quickly expose your data via a GraphQL API.</p>

<h3 id="apollo-client">Apollo Client</h3>
<p>Apollo Client is a fully-featured caching GraphQL client that enables you to manage both local and remote data with GraphQL. It provides a powerful way to fetch and cache data, manage UI state, and even perform optimistic UI updates. In this project, we used Apollo Client to fetch data from the Apollo Server and display it in our React application.</p>

<h2 id="usage">Usage</h2>
<p>In the client application, we use the <code>useQuery</code> hook from Apollo Client to fetch the list of users. The <code>GET_USERS</code> query retrieves the data from the server and displays it in a list format. This approach minimizes the amount of data being sent over the network, as clients can request only the data they need.</p>

<h2 id="contributing">Contributing</h2>
<p>If you'd like to contribute to this project, please follow these steps:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
    <li>Make your changes and commit them (<code>git commit -m 'Add some feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature-branch</code>).</li>
    <li>Open a pull request.</li>
</ol>

<h2 id="resources">Resources</h2>
<p>Here are some important resources to learn more about Apollo:</p>
<ul>
    <li><a href="https://www.apollographql.com/docs/">Apollo Documentation</a> - Comprehensive documentation on Apollo Server, Apollo Client, and more.</li>
    <li><a href="https://graphql.org/learn/">GraphQL Documentation</a> - Official documentation for GraphQL, covering queries, mutations, and schemas.</li>
</ul>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>LinkedIn</h2>
<p>Feel free to connect with me on LinkedIn: <a href="https://www.linkedin.com/in/mokamaleldin/" target="_blank">Mokamaleldin</a></p>

</body>
</html>
