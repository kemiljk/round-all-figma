figma.showUI(__html__, { width: 300, height: 100 });

const { selection } = figma.currentPage;
let nodetypes = ["FRAME", "COMPONENT", "INSTANCE"];
let nodeshapetypes = ["VECTOR", "STAR", "ELLIPSE", "RECTANGLE", "POLYGON"];
let propertiesToRound = [
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "itemSpacing",
];

figma.ui.onmessage = (msg) => {
  if (msg.type === "select-and-run") {
    const layers = figma.currentPage.findAll();
    figma.currentPage.selection = layers;
    async function selectAndRound(): Promise<String> {
      figma.root.children.flatMap((pageNode) =>
        pageNode.findAll().forEach(async (node) => {
          if (nodetypes.includes(node.type)) {
            node.x = Math.round(node.x);
            node.y = Math.round(node.y);
            node.resize(Math.round(node.width), Math.round(node.height));
            for (let property of propertiesToRound) {
              node[property] = Math.round(node[property]);
            }
            node.cornerRadius = Math.round(
              parseInt(node.cornerRadius.toString())
            );
            for (let innerNode of node.children) {
              innerNode.x = Math.round(innerNode.x);
              innerNode.y = Math.round(innerNode.y);
              innerNode.resize(
                Math.round(innerNode.width),
                Math.round(innerNode.height)
              );
              if (nodetypes.includes(innerNode.type)) {
                for (let property of propertiesToRound) {
                  innerNode[property] = Math.round(innerNode[property]);
                }
                innerNode.cornerRadius = Math.round(
                  parseInt(innerNode.cornerRadius.toString())
                );
              }
              if (nodeshapetypes.includes(innerNode.type)) {
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.cornerRadius = Math.round(
                  parseInt(innerNode.cornerRadius.toString())
                );
              }
              if (innerNode.type === "TEXT") {
                await figma.loadFontAsync(innerNode.fontName as FontName);
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.fontSize = Math.round(
                  parseFloat(innerNode.fontSize.toString())
                );
                let LH = innerNode.getRangeLineHeight(0, selection.length);
                if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
                  innerNode.setRangeLineHeight(0, innerNode.characters.length, {
                    value: Math.round(LH.value),
                    unit: "PIXELS",
                  });
                }
                let LS = innerNode.getRangeLetterSpacing(0, selection.length);
                innerNode.setRangeLetterSpacing(
                  0,
                  innerNode.characters.length,
                  {
                    value: Math.round(LS.value),
                    unit: "PIXELS",
                  }
                );
                innerNode.paragraphSpacing = Math.round(
                  innerNode.paragraphSpacing
                );
              }
            }
          }
        })
      );
      return Promise.resolve("Done!");
    }
    selectAndRound();
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
