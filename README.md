### TUUXSTART v1.0.0 ###

Starter template for HTML/CSS/JS projects with Gulp as task runner

#### REQUIREMENTS ####

1. [Node.js](https://nodejs.org/en/download/)
2. Basic knowledge about [Gulp](http://gulpjs.com/)

#### INSTALL ####

First, download the master zip from GitHub or clone the repository:
````
$ git clone https://github.com/tuuxdev/tuuxstart.git
````
Go into the repository
````
$ cd tuuxstart
````
Then, install dependencies
````
$ npm install
````
And run Gulp
````
$ gulp
````

If everything goes well, your browser opens new tab on *localhost:8000/www/index.html* where you can see the new project. (*livereload is enabled by default via "webserver" task on `./gulpfile.js`*)

You can start coding your project on `./www/index.html` `./sass/*` and `./javascripts/*` files.  

Your "compiled" project lives on `./www` folder.
<br>`./sass/*` files compiles in `./www/css/style.min.css`
<br>`./javascripts/*` files compiles in `./www/js/plugins.min.js`

#### TEMPLATE WORKFLOW & ENVIRONMENT: ####

1. [Gulp](http://gulpjs.com/)
2. [gulp-webserver](https://www.npmjs.com/package/gulp-webserver)
3. [gulp-sass](https://www.npmjs.com/package/gulp-sass)
4. [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
5. [gulp-concat](https://www.npmjs.com/package/gulp-concat)
6. [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
7. [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
8. [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
9. [gulp-rename](https://www.npmjs.com/package/gulp-rename)
10. Custom [HTML5 initializr](http://www.initializr.com/) 
11. [Normalize.css](https://necolas.github.io/normalize.css/Normalize.css)
12. [Bootstrap grid](http://getbootstrap.com/css/#grid)
13. [Fontawesome](http://fontawesome.io/)
14. [jQuery](https://jquery.com/)
14. Some helper SASS classes
