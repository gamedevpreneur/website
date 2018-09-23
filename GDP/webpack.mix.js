let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
   .js('assets/js/front.js', 'public')
   .combine(['assets/js/cash.min.js', 'assets/js/front.js', ], 'public/front.js')
   .babel('public/front.js', 'public/front.js')
   .minify('public/front.js')
   .sass('assets/sass/main.scss', 'public/style.css')
   .minify('public/style.css')
   .copy('assets/img', 'public/img')
   .copy('assets/favicon.ico', 'public')

mix.options({
    postCss: [
        require('autoprefixer')({
            grid: true,
        }),
    ],
});

mix.browserSync({
    files: [
        './public/*.min.css',
        './public/*.min.js',
        './pages/*.html',
        './views/**/*.hbs',
    ],
    proxy: "localhost:3000/",
    notify: false,
})
