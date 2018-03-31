# `Caavo` — A basic user interface between the admin and the user or client.

Develop a full stack web app that lets users store their government documents details online in a secure fashion and let them access it whenever needed.

You are expected to create an End-to-End Web app in any tech stack that you are comfortable with, which primarily presents user with forms for filling details of different documents like driving license(license no, name, vehicle category), aadhar card(aadhar no, name, dob); etc, store them and and display them whenever required.

We expect you to write Backend and Frontend for this web app and use a database to store above mentioned details.
their are mainly four modules are their in this project that is registration module,
login module,client module and fourth is Admin module.


## Getting Started

To get you started you can simply clone the `Caavo` repository and install the dependencies:

### Prerequisites

You need git to clone the `Caavo` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `Caavo`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `Caavo`

Clone the `angular-seed` repository using git:

```
https://github.com/ohm1993/Caavo.git
```

If you just want to start a new project without the `health_heal` commit history then you can do:

```
git clone --depth=1 https://github.com/ohm1993/Caavo.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  admin/
     admin.controller.js   -->this is the controller of the admin part
     admin.html          -->this is the view page of admin page
  client/
     client.controller.js  -->this is the controller of the client or user part
     client.html          -->this is the view page for client page      
  Login/                --> this is for login part
    view1.html            --> the login template
    view1.js              --> this is the login controller
    view1_test.js         --> tests of the controller
  Registration/                --> the register template and logic
    view2.html            --> the registration template
    view2.js              --> the registration controller
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```


