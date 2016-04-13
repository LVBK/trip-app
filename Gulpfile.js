var gulp = require('gulp'),
    path = require('path'),
    jspm = require('jspm'),
    rename = require('gulp-rename'),
    template = require('gulp-template'),
    uglify = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    ngAnnotate = require('gulp-ng-annotate'),
    serve = require('browser-sync'),
    replace = require('gulp-replace'),
    yargs = require('yargs').argv

var root = 'client';

// helper method to resolveToApp paths
var resolveTo = function (resolvePath) {
    return function (glob) {
        glob = glob || '';
        return path.join(root, resolvePath, glob);
    }
};

var resolveToApp = resolveTo('app'); // app/{glob}
var resolveToComponents = resolveTo('app/components'); // app/components/{glob}
var resolveToPages = resolveTo('app/pages'); // app/components/{glob}
var resolveToServices = resolveTo('app/services'); // app/components/{glob}

// map of all our paths
var paths = {
    js: resolveToApp('**/*.js'),
    css: resolveToApp('**/*.css'),
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
    blankPageTemplates: path.join(__dirname, 'generator', 'page/**/*.**'),
    blankServiceGroupTemplates: path.join(__dirname, 'generator', 'service_group/**/*.**'),
    blankServiceTemplates: path.join(__dirname, 'generator', 'service/*.js'),
    dist: path.join(__dirname, 'www/')
};

gulp.task('serve', function () {
    serve({
        port: process.env.PORT || 3000,
        open: false,
        files: [].concat(
            [paths.js],
            [paths.css],
            paths.html
        ),
        server: {
            baseDir: root,
            // serve our jspm dependencies with the client folder
            routes: {
                '/jspm.config.js': './jspm.config.js',
                '/jspm_packages': './jspm_packages'
            }
        },
    });
});

gulp.task('build', function () {
    var dist = path.join(paths.dist + 'app.js');
    // Use JSPM to bundle our app
    return jspm.bundleSFX(resolveToApp('app'), dist, {})
        .then(function () {
            // Also create a fully annotated minified copy
            return gulp.src(dist)
                .pipe(ngAnnotate())
                .pipe(replace('background-image:url(/images/', 'background-image:url(images/'))
                .pipe(replace('background-image: url(/images/', 'background-image:url(images/'))
                .pipe(uglify())
                .pipe(rename('app.min.js'))
                .pipe(gulp.dest(paths.dist))
        })
        .then(function () {
            // Inject minified script into index
            return gulp.src('client/index.html')
                .pipe(htmlreplace({
                    'js': 'app.min.js'
                }))
                .pipe(gulp.dest(paths.dist));
        });
});

gulp.task('build_dev', function () {
    var dist = path.join(paths.dist + 'app.js');
    // Use JSPM to bundle our app
    return jspm.bundleSFX(resolveToApp('app'), dist, {})
        .then(function () {
            // Also create a fully annotated minified copy
            return gulp.src(dist)
                .pipe(ngAnnotate())
                .pipe(replace('background-image:url(/images/', 'background-image:url(images/'))
                .pipe(replace('background-image: url(/images/', 'background-image:url(images/'))
                .pipe(rename('app.js'))
                .pipe(gulp.dest(paths.dist))
        })
        .then(function () {
            // Inject minified script into index
            return gulp.src('client/index.html')
                .pipe(htmlreplace({
                    'js': 'app.js'
                }))
                .pipe(gulp.dest(paths.dist));
        });
});

gulp.task('component', function () {
    var toCamelCase = function (str) {
        return str.replace(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2, offset) {
            if (p2) return p2.toUpperCase();
            return p1.toLowerCase();
        });
    };

    var toSpecial = function (oldStr, sperator) {
        return oldStr.replace(/[a-z][A-Z]/g, function (str, offset) {
            return str[0] + sperator + str[1].toLowerCase();
        });
    };

    var cap = function (val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var name = yargs.name;
    var parentPath = yargs.parent || '';
    var destPath = path.join(resolveToComponents(), parentPath, name);
    var directive_name = parentPath.length > 0 ? parentPath + '/' : '';
    directive_name += name;
    directive_name = directive_name.replace(/\//gi, '-');
    var directive_name_tmp = directive_name;
    directive_name = toCamelCase(directive_name);
    var directive_ele = toSpecial(directive_name, "-");
    var module_name = toSpecial(directive_name, ".");

    console.log("Creating component " + name + " with directive:" + directive_name_tmp);

    return gulp.src(paths.blankTemplates)
        .pipe(template({
            name: name,
            directive_name: directive_name,
            directive_ele: directive_ele,
            module_name: module_name,
            upCaseName: cap(name)
        }))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('page', function () {
    var toCamelCase = function (str) {
        return str.replace(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2, offset) {
            if (p2) return p2.toUpperCase();
            return p1.toLowerCase();
        });
    };

    var toSpecial = function (oldStr, sperator) {
        return oldStr.replace(/[a-z][A-Z]/g, function (str, offset) {
            return str[0] + sperator + str[1].toLowerCase();
        });
    };


    var cap = function (val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var name = yargs.name;
    var parentPath = yargs.parent || '';
    var preDirective = 'page-';
    var destPath = path.join(resolveToPages(), parentPath, name);
    var directive_name = parentPath.length > 0 ? parentPath + '/' : '';
    directive_name = preDirective + directive_name;
    directive_name += name;
    directive_name = directive_name.replace(/\//gi, '-');
    var directive_name_tmp = directive_name;
    directive_name = toCamelCase(directive_name);
    var directive_ele = toSpecial(directive_name, "-");
    var module_name = toSpecial(directive_name, ".");
    console.log("Creating page " + name + " with directive:" + directive_name_tmp);

    return gulp.src(paths.blankPageTemplates)
        .pipe(template({
            name: name,
            directive_name: directive_name,
            directive_ele: directive_ele,
            module_name: module_name,
            upCaseName: cap(name)
        }))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('service_group', function () {
    var cap = function (val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var name = yargs.name;
    var parentPath = yargs.parent || '';
    var destPath = path.join(resolveToServices(), parentPath, name);

    return gulp.src(paths.blankServiceGroupTemplates)
        .pipe(template({
            name: name,
            upCaseName: cap(name)
        }))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('service', function () {
    var cap = function (val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var name = yargs.name;
    var parentPath = yargs.parent || '';

    if (parentPath == '') {
        console.log("Using: --name name --parent parent");
        return null;
    }
    var destPath = path.join(resolveToServices(), parentPath);

    return gulp.src(paths.blankServiceTemplates)
        .pipe(template({
            name: name,
            upCaseName: cap(name)
        }))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('default', ['serve'])