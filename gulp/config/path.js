const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/scss/*.scss`,
    js: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/img/**/*.*`,
  },

  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.*`,
  },
  clean: buildFolder,
};
