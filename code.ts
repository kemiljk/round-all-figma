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
          n.x = Math.round(n.x);
          n.y = Math.round(n.y);
          n.resize(Math.round(n.width), Math.round(n.height));
          n.strokeWeight = Math.round(n.strokeWeight);
          n.fontSize = Math.round(parseFloat(n.fontSize.toString()));
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
          n.paragraphSpacing = Math.round(n.paragraphSpacing);
        }
        if (
          n.type === "FRAME" ||
          n.type === "COMPONENT" ||
          n.type === "INSTANCE"
        ) {
          n.x = Math.round(n.x);
          n.y = Math.round(n.y);
          n.resize(Math.round(n.width), Math.round(n.height));
          n.paddingLeft = Math.round(n.paddingLeft);
          n.paddingRight = Math.round(n.paddingRight);
          n.paddingTop = Math.round(n.paddingTop);
          n.paddingBottom = Math.round(n.paddingBottom);
          n.itemSpacing = Math.round(n.itemSpacing);
          n.cornerRadius = Math.round(parseInt(n.cornerRadius.toString()));
          for (n of n.children) {
            if (
              n.type === "FRAME" ||
              n.type === "COMPONENT" ||
              n.type === "INSTANCE"
            ) {
              n.x = Math.round(n.x);
              n.y = Math.round(n.y);
              n.resize(Math.round(n.width), Math.round(n.height));
              n.paddingLeft = Math.round(n.paddingLeft);
              n.paddingRight = Math.round(n.paddingRight);
              n.paddingTop = Math.round(n.paddingTop);
              n.paddingBottom = Math.round(n.paddingBottom);
              n.itemSpacing = Math.round(n.itemSpacing);
              n.cornerRadius = Math.round(parseInt(n.cornerRadius.toString()));
            }
            if (
              n.type === "VECTOR" ||
              n.type === "STAR" ||
              n.type === "ELLIPSE" ||
              n.type === "RECTANGLE" ||
              n.type === "POLYGON"
            ) {
              n.x = Math.round(n.x);
              n.y = Math.round(n.y);
              n.resize(Math.round(n.width), Math.round(n.height));
              n.cornerRadius = Math.round(parseInt(n.cornerRadius.toString()));
            }
            if (n.type === "TEXT") {
              await figma.loadFontAsync(n.fontName as FontName);
              n.x = Math.round(n.x);
              n.y = Math.round(n.y);
              n.resize(Math.round(n.width), Math.round(n.height));
              n.strokeWeight = Math.round(n.strokeWeight);
              n.fontSize = Math.round(parseFloat(n.fontSize.toString()));
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
              n.paragraphSpacing = Math.round(n.paragraphSpacing);
            }
          }
        }
      }
      return Promise.resolve("Done!");
    }
    roundPixels();
    if (selection.length > 0) {
      figma.notify("All cleaned up!");
    }
  }
};
