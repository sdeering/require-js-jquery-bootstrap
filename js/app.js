
// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    "baseUrl": "js/vendor",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "backbone": ["jquery, underscore"],
        "backbone.layoutmanager": ["backbone"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);

/*
       <link rel="stylesheet" href="app/css/bootstrap.min.css">
        <link rel="stylesheet" href="app/css/bootstrap-responsive.min.css">
        <link rel="stylesheet" href="app/css/main.css">

        <script src="app/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

    </head>
    <body>

        <!-- Backbone Powered Web App -->
        <div id="main" class="container"></div>

        <script src="app/js/vendor/jquery-1.9.1.min.js"></script>
        <script src="app/js/vendor/underscore.min.js"></script>
        <script src="app/js/vendor/backbone.min.js"></script>
        <script src="app/js/vendor/backbone.layoutmanager.js"></script>
        <script src="app/js/vendor/bootstrap.min.js"></script>
        <script src="app/js/main.js"></script>

*/