figma.showUI(__html__, { width: 300, height: 100 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "select-and-run") {
    async function selectAndRoundPixels() {
      const layers = figma.currentPage.findAll();
      figma.currentPage.selection = layers;

      if (layers.length > 0) {
        for (let n of layers) {
          if (n.type === "TEXT") {
            await figma.loadFontAsync(n.fontName as FontName);
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            let S = n.strokeWeight;
            n.strokeWeight = Math.round(S);
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
            let text = n.fontSize.toString();
            let T = parseFloat(text);
            n.fontSize = Math.round(T);
          }
          if (
            n.type === "FRAME" ||
            n.type === "RECTANGLE" ||
            n.type === "COMPONENT" ||
            n.type === "COMPONENT_SET" ||
            n.type === "INSTANCE" ||
            n.type === "VECTOR" ||
            n.type === "STAR" ||
            n.type === "ELLIPSE" ||
            n.type === "POLYGON"
          ) {
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            let S = n.strokeWeight;
            n.strokeWeight = Math.round(S);
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
            let radius = n.cornerRadius.toString();
            let CR = parseInt(radius);
            n.cornerRadius = Math.round(CR);
          }
          if (n.type === "GROUP") {
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
          }
          if (n.type === "LINE") {
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            let S = n.strokeWeight;
            n.strokeWeight = Math.round(S);
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
          }
        }
      }
    }
    selectAndRoundPixels();
  }

  if (msg.type === "run") {
    async function roundPixels() {
      const layers = figma.currentPage.selection;
      if (layers.length > 0) {
        for (let n of layers) {
          if (n.type === "TEXT") {
            await figma.loadFontAsync(n.fontName as FontName);
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            let S = n.strokeWeight;
            n.strokeWeight = Math.round(S);
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
            let text = n.fontSize.toString();
            let T = parseFloat(text);
            n.fontSize = Math.round(T);
          }
          if (
            n.type === "FRAME" ||
            n.type === "RECTANGLE" ||
            n.type === "COMPONENT" ||
            n.type === "COMPONENT_SET" ||
            n.type === "INSTANCE" ||
            n.type === "VECTOR" ||
            n.type === "STAR" ||
            n.type === "ELLIPSE" ||
            n.type === "TEXT" ||
            n.type === "POLYGON"
          ) {
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            let S = n.strokeWeight;
            n.strokeWeight = Math.round(S);
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
          }
          if (n.type === "GROUP") {
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
            for (n of n.children) {
              if (n.type === "FRAME") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "TEXT") {
                await figma.loadFontAsync(n.fontName as FontName);
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let text = n.fontSize.toString();
                let T = parseFloat(text);
                n.fontSize = Math.round(T);
              }
              if (n.type === "RECTANGLE") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "COMPONENT") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "COMPONENT_SET") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "INSTANCE") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "VECTOR") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "STAR") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "ELLIPSE") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
              if (n.type === "POLYGON") {
                let X = n.x;
                let Y = n.y;
                let W = n.width;
                let H = n.height;
                let S = n.strokeWeight;
                n.strokeWeight = Math.round(S);
                n.x = Math.round(X);
                n.y = Math.round(Y);
                n.resize(Math.round(W), Math.round(H));
                let radius = n.cornerRadius.toString();
                let CR = parseInt(radius);
                n.cornerRadius = Math.round(CR);
              }
            }
          }
          if (n.type === "LINE") {
            let X = n.x;
            let Y = n.y;
            let W = n.width;
            let H = n.height;
            let S = n.strokeWeight;
            n.strokeWeight = Math.round(S);
            n.x = Math.round(X);
            n.y = Math.round(Y);
            n.resize(Math.round(W), Math.round(H));
          }
        }
      }
    }
    roundPixels();
  }
};
