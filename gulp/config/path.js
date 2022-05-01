//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        js: `${buildFolder}/js/`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.sass`,
        images: `${srcFolder}/img/*.{jpg,jpeg,png,gif,webp}`,
        ico: `${srcFolder}/img/*.ico`,
        svg: `${srcFolder}/img/*.svg`,
        js: `${srcFolder}/js/app.js`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.sass`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        js: `${srcFolder}/js/**/*.js`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}