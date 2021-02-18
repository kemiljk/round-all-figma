figma.showUI(__html__, { width: 300, height: 100 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "select-and-run") {
    const layers = figma.currentPage.findAll();
    figma.currentPage.selection = layers;

    const { selection } = figma.currentPage;

    async function selectAndRound(node): Promise<String> {
      figma.root.children.flatMap((pageNode) =>
        pageNode.findAll().forEach(async (node) => {
          if (node.type === "TEXT") {
            await figma.loadFontAsync(node.fontName as FontName);
            let X = node.x;
            let Y = node.y;
            let W = node.width;
            let H = node.height;
            node.x = Math.round(X);
            node.y = Math.round(Y);
            node.resize(Math.round(W), Math.round(H));
            let S = node.strokeWeight;
            node.strokeWeight = Math.round(S);
            let text = node.fontSize.toString();
            let T = parseFloat(text);
            node.fontSize = Math.round(T);
            let LH = node.getRangeLineHeight(0, selection.length);
            if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
              node.setRangeLineHeight(0, node.characters.length, {
                value: Math.round(LH.value),
                unit: "PIXELS",
              });
            }
            let LS = node.getRangeLetterSpacing(0, selection.length);
            node.setRangeLetterSpacing(0, node.characters.length, {
              value: Math.round(LS.value),
              unit: "PIXELS",
            });
            let PS = node.paragraphSpacing;
            node.paragraphSpacing = Math.round(PS);
          }
          if (
            node.type === "FRAME" ||
            node.type === "COMPONENT" ||
            node.type === "INSTANCE"
          ) {
            let X = node.x;
            let Y = node.y;
            let W = node.width;
            let H = node.height;
            node.x = Math.round(X);
            node.y = Math.round(Y);
            node.resize(Math.round(W), Math.round(H));
            let PL = node.paddingLeft;
            let PR = node.paddingRight;
            let PT = node.paddingTop;
            let PB = node.paddingBottom;
            let IS = node.itemSpacing;
            node.paddingLeft = Math.round(PL);
            node.paddingRight = Math.round(PR);
            node.paddingTop = Math.round(PT);
            node.paddingBottom = Math.round(PB);
            node.itemSpacing = Math.round(IS);
            let radius = node.cornerRadius.toString();
            let CR = parseInt(radius);
            node.cornerRadius = Math.round(CR);
            for (node of node.children) {
              if (
                node.type === "FRAME" ||
                node.type === "COMPONENT" ||
                node.type === "INSTANCE"
              ) {
                let X = node.x;
                let Y = node.y;
                let W = node.width;
                let H = node.height;
                node.x = Math.round(X);
                node.y = Math.round(Y);
                node.resize(Math.round(W), Math.round(H));
                let S = node.strokeWeight;
                let PL = node.paddingLeft;
                let PR = node.paddingRight;
                let PT = node.paddingTop;
                let PB = node.paddingBottom;
                let IS = node.itemSpacing;
                node.paddingLeft = Math.round(PL);
                node.paddingRight = Math.round(PR);
                node.paddingTop = Math.round(PT);
                node.paddingBottom = Math.round(PB);
                node.itemSpacing = Math.round(IS);
                node.strokeWeight = Math.round(S);
                let radius = node.cornerRadius.toString();
                let CR = parseInt(radius);
                node.cornerRadius = Math.round(CR);
              }
              if (node.type === "GROUP") {
                let X = node.x;
                let Y = node.y;
                let W = node.width;
                let H = node.height;
                node.x = Math.round(X);
                node.y = Math.round(Y);
                node.resize(Math.round(W), Math.round(H));
              }
              if (
                node.type === "VECTOR" ||
                node.type === "STAR" ||
                node.type === "ELLIPSE" ||
                node.type === "RECTANGLE" ||
                node.type === "POLYGON"
              ) {
                let X = node.x;
                let Y = node.y;
                let W = node.width;
                let H = node.height;
                node.x = Math.round(X);
                node.y = Math.round(Y);
                node.resize(Math.round(W), Math.round(H));
                let S = node.strokeWeight;
                node.strokeWeight = Math.round(S);
                let radius = node.cornerRadius.toString();
                let CR = parseInt(radius);
                node.cornerRadius = Math.round(CR);
              }
              if (node.type === "TEXT") {
                await figma.loadFontAsync(node.fontName as FontName);
                let X = node.x;
                let Y = node.y;
                let W = node.width;
                let H = node.height;
                node.x = Math.round(X);
                node.y = Math.round(Y);
                node.resize(Math.round(W), Math.round(H));
                let S = node.strokeWeight;
                node.strokeWeight = Math.round(S);
                let text = node.fontSize.toString();
                let T = parseFloat(text);
                node.fontSize = Math.round(T);
                let LH = node.getRangeLineHeight(0, selection.length);
                if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
                  node.setRangeLineHeight(0, node.characters.length, {
                    value: Math.round(LH.value),
                    unit: "PIXELS",
                  });
                }
                let LS = node.getRangeLetterSpacing(0, selection.length);
                node.setRangeLetterSpacing(0, node.characters.length, {
                  value: Math.round(LS.value),
                  unit: "PIXELS",
                });
                let PS = node.paragraphSpacing;
                node.paragraphSpacing = Math.round(PS);
              }
            }
          }
        })
      );
      console.log(node);
      return Promise.resolve("Done!");
    }
    selectAndRound(selection);
  }

  if (msg.type === "run") {
    const { selection } = figma.currentPage;

    async function roundPixels(): Promise<String> {
      for (let n of selection) {
        if (n.type === "TEXT") {
          await figma.loadFontAsync(n.fontName as FontName);
          let X = n.x;
          let Y = n.y;
          let W = n.width;
          let H = n.height;
          n.x = Math.round(X);
          n.y = Math.round(Y);
          n.resize(Math.round(W), Math.round(H));
          let S = n.strokeWeight;
          n.strokeWeight = Math.round(S);
          let text = n.fontSize.toString();
          let T = parseFloat(text);
          n.fontSize = Math.round(T);
          let LH = n.getRangeLineHeight(0, selection.length);
          if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
            n.setRangeLineHeight(0, n.characters.length, {
              value: Math.round(LH.value),
              unit: "PIXELS",
            });
          }
          let LS = n.getRangeLetterSpacing(0, selection.length);
          n.setRangeLetterSpacing(0, n.characters.length, {
            value: Math.round(LS.value),
            unit: "PIXELS",
          });
          let PS = n.paragraphSpacing;
          n.paragraphSpacing = Math.round(PS);
        }
        if (
          n.type === "FRAME" ||
          n.type === "COMPONENT" ||
          n.type === "INSTANCE"
        ) {
          let X = n.x;
          let Y = n.y;
          let W = n.width;
          let H = n.height;
          n.x = Math.round(X);
          n.y = Math.round(Y);
          n.resize(Math.round(W), Math.round(H));
          let PL = n.paddingLeft;
          let PR = n.paddingRight;
          let PT = n.paddingTop;
          let PB = n.paddingBottom;
          let IS = n.itemSpacing;
          n.paddingLeft = Math.round(PL);
          n.paddingRight = Math.round(PR);
          n.paddingTop = Math.round(PT);
          n.paddingBottom = Math.round(PB);
          n.itemSpacing = Math.round(IS);
          let radius = n.cornerRadius.toString();
          let CR = parseInt(radius);
          n.cornerRadius = Math.round(CR);
          for (n of n.children) {
            if (
              n.type === "FRAME" ||
              n.type === "COMPONENT" ||
              n.type === "INSTANCE"
            ) {
              let X = n.x;
              let Y = n.y;
              let W = n.width;
              let H = n.height;
              n.x = Math.round(X);
              n.y = Math.round(Y);
              n.resize(Math.round(W), Math.round(H));
              let S = n.strokeWeight;
              let PL = n.paddingLeft;
              let PR = n.paddingRight;
              let PT = n.paddingTop;
              let PB = n.paddingBottom;
              let IS = n.itemSpacing;
              n.paddingLeft = Math.round(PL);
              n.paddingRight = Math.round(PR);
              n.paddingTop = Math.round(PT);
              n.paddingBottom = Math.round(PB);
              n.itemSpacing = Math.round(IS);
              n.strokeWeight = Math.round(S);
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
            if (
              n.type === "VECTOR" ||
              n.type === "STAR" ||
              n.type === "ELLIPSE" ||
              n.type === "RECTANGLE" ||
              n.type === "POLYGON"
            ) {
              let X = n.x;
              let Y = n.y;
              let W = n.width;
              let H = n.height;
              n.x = Math.round(X);
              n.y = Math.round(Y);
              n.resize(Math.round(W), Math.round(H));
              let S = n.strokeWeight;
              n.strokeWeight = Math.round(S);
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
              n.x = Math.round(X);
              n.y = Math.round(Y);
              n.resize(Math.round(W), Math.round(H));
              let S = n.strokeWeight;
              n.strokeWeight = Math.round(S);
              let text = n.fontSize.toString();
              let T = parseFloat(text);
              n.fontSize = Math.round(T);
              let LH = n.getRangeLineHeight(0, selection.length);
              if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
                n.setRangeLineHeight(0, n.characters.length, {
                  value: Math.round(LH.value),
                  unit: "PIXELS",
                });
              }
              let LS = n.getRangeLetterSpacing(0, selection.length);
              n.setRangeLetterSpacing(0, n.characters.length, {
                value: Math.round(LS.value),
                unit: "PIXELS",
              });
              let PS = n.paragraphSpacing;
              n.paragraphSpacing = Math.round(PS);
            }
          }
        }
      }
      return Promise.resolve("Done!");
    }
    roundPixels();
    figma.notify(`Cleaned up ${selection.length} node(s)`);
  }
};
