figma.showUI(__html__, { width: 300, height: 105 });

const { selection } = figma.currentPage;
let nodetypes = ["FRAME", "COMPONENT", "INSTANCE", "GROUP"];
let nodeshapetypes = [
  "VECTOR",
  "LINE",
  "STAR",
  "ELLIPSE",
  "RECTANGLE",
  "POLYGON",
];
let propertiesToRound = [
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "itemSpacing",
];

figma.ui.onmessage = (msg) => {
  if (msg.type === "select-and-run") {
    async function selectAndRound(): Promise<String> {
      figma.root.children.flatMap((pageNode) =>
        pageNode.findAll().forEach(async (node) => {
          node.x = Math.round(node.x);
          node.y = Math.round(node.y);
          node.resize(Math.round(node.width), Math.round(node.height));
          if (nodetypes.includes(node.type)) {
            node.x = Math.round(node.x);
            node.y = Math.round(node.y);
            node.resize(Math.round(node.width), Math.round(node.height));
            for (let property of propertiesToRound) {
              node[property] = Math.round(node[property]);
            }
            node.cornerRadius = Math.round(Number(node.cornerRadius));
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
                  Number(innerNode.cornerRadius)
                );
              }
              if (nodeshapetypes.includes(innerNode.type)) {
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.cornerRadius = Math.round(
                  Number(innerNode.cornerRadius)
                );
              }
              if (innerNode.type === "TEXT") {
                await figma.loadFontAsync(innerNode.fontName as FontName);
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.fontSize = Math.round(Number(innerNode.fontSize));
                let LH = innerNode.getRangeLineHeight(
                  0,
                  node.characters.length
                );
                if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
                  innerNode.setRangeLineHeight(0, innerNode.characters.length, {
                    value: Math.round(Number(LH.value)),
                    unit: "PIXELS",
                  });
                }
                let LS = innerNode.getRangeLetterSpacing(
                  0,
                  node.characters.length
                );
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
    if (selection.length > 0) {
      figma.notify("All cleaned up!");
    }
  }

  if (msg.type === "run") {
    async function roundPixels(): Promise<String> {
      figma.root.children.flatMap((pageNode) =>
        pageNode.selection.forEach(async (node) => {
          node.x = Math.round(node.x);
          node.y = Math.round(node.y);
          node.resize(Math.round(node.width), Math.round(node.height));
          if (nodetypes.includes(node.type)) {
            node.x = Math.round(node.x);
            node.y = Math.round(node.y);
            node.resize(Math.round(node.width), Math.round(node.height));
            for (let property of propertiesToRound) {
              node[property] = Math.round(node[property]);
            }
            node.cornerRadius = Math.round(Number(node.cornerRadius));
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
                  Number(innerNode.cornerRadius)
                );
              }
              if (nodeshapetypes.includes(innerNode.type)) {
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.cornerRadius = Math.round(
                  Number(innerNode.cornerRadius)
                );
              }
              if (innerNode.type === "TEXT") {
                await figma.loadFontAsync(innerNode.fontName as FontName);
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.fontSize = Math.round(Number(innerNode.fontSize));
                innerNode.getRangeLineHeight();
                let LH = innerNode.getRangeLineHeight(
                  0,
                  innerNode.characters.length
                );
                if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
                  innerNode.setRangeLineHeight(0, node.characters.length, {
                    value: Math.round(Number(LH.value)),
                    unit: "PIXELS",
                  });
                }
                if (LH.unit === "PERCENT") {
                  innerNode.setRangeLineHeight(0, node.characters.length, {
                    value: Math.round(Number(LH.value)),
                    unit: "PERCENT",
                  });
                }
                let LS = innerNode.getRangeLetterSpacing(
                  0,
                  node.characters.length
                );
                innerNode.setRangeLetterSpacing(
                  0,
                  innerNode.characters.length,
                  {
                    value: Math.round(Number(LS.value)),
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
    roundPixels();
    if (selection.length > 0) {
      figma.notify("All cleaned up!");
    }
  }
};
