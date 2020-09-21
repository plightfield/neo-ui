module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // main color
          primary: "#4894ff",
          // success color, handle success state, so do error text
          success: "#1dd55d",
          error: "#ff416c",
          text: "#7a88b5",
          // title color, use for emphase
          title: "#253156",
          background: "#eff2f5",
          // card button etc. border radius
          radius: ".4em",
          // the gutter bettween some elements
          gutter: ".8em",
          // content background
          content: "#ffffff",
          // box shadow,text shadow
          shadow: "0 .5em 1em 0",
          border: "#e2e5e8",
        },
      },
    },
  },
};
