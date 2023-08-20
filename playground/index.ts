import { Fontmin } from "../packages/converter/src/index";

const fontmin = new Fontmin();

fontmin
  .src("fonts/*.ttf")
  .use(
    Fontmin.glyph({
      text: "Hello World!",
      hinting: false,
    }),
  )
  .use(Fontmin.ttf2eot())
  .use(Fontmin.ttf2svg())
  .use(Fontmin.ttf2woff())
  .use(Fontmin.ttf2woff2())
  .use(
    Fontmin.css({
      fontPath: "./",
    }),
  )
  .dest("dist")
  .runAsync();
