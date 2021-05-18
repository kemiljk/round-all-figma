figma.showUI(__html__, { width: 300, height: 105 });

const layers = figma.currentPage.findAll();
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
  if (msg.type === "run") {
    async function roundPixels(): Promise<String> {
      figma.root.children.flatMap((pageNode) =>
        pageNode.selection.forEach(async (node) => {
          node.x = Math.round(node.x);
          node.y = Math.round(node.y);
          node.resize(Math.round(node.width), Math.round(node.height));
          node.rotation = Math.round(node.rotation);
          node.strokeWeight = Math.round(node.strokeWeight);
          if (node.type === "TEXT") {
            await figma.loadFontAsync(node.fontName as FontName);
            if (node.textAutoResize == "NONE") {
              node.textAutoResize = "NONE";
            } else if (node.textAutoResize == "HEIGHT") {
              node.textAutoResize = "HEIGHT";
            } else {
              node.textAutoResize = "WIDTH_AND_HEIGHT";
            }
            node.strokeWeight = Math.round(node.strokeWeight);
            node.fontSize = Math.round(Number(node.fontSize));
            let LH = node.getRangeLineHeight(0, node.characters.length);
            if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
              node.setRangeLineHeight(0, node.characters.length, {
                value: Math.round(Number(LH.value)),
                unit: "PIXELS",
              });
            }
            if (LH.unit === "PERCENT") {
              node.setRangeLineHeight(0, node.characters.length, {
                value: Math.round(Number(LH.value)),
                unit: "PERCENT",
              });
            }
            let LS = node.getRangeLetterSpacing(0, node.characters.length);
            if (LS.unit === "PIXELS") {
              node.setRangeLetterSpacing(0, node.characters.length, {
                value: Math.round(LS.value),
                unit: "PIXELS",
              });
            }
            if (LS.unit === "PERCENT") {
              node.setRangeLetterSpacing(0, node.characters.length, {
                value: Math.round(LS.value),
                unit: "PERCENT",
              });
            }
            node.paragraphSpacing = Math.round(node.paragraphSpacing);
          }
          if (nodeshapetypes.includes(node.type)) {
            node.strokeWeight = Math.round(node.strokeWeight);
            node.cornerRadius = Math.round(Number(node.cornerRadius));
            node.rotation = Math.round(node.rotation);
          }
          if (nodetypes.includes(node.type)) {
            node.x = Math.round(node.x);
            node.y = Math.round(node.y);
            node.resize(Math.round(node.width), Math.round(node.height));
            node.rotation = Math.round(node.rotation);
            node.strokeWeight = Math.round(node.strokeWeight);
            node.cornerRadius = Math.round(Number(node.cornerRadius));
            for (let property of propertiesToRound) {
              node[property] = Math.round(node[property]);
            }
            for (let innerNode of node.children) {
              innerNode.x = Math.round(innerNode.x);
              innerNode.y = Math.round(innerNode.y);
              innerNode.cornerRadius = Math.round(innerNode.cornerRadius);
              innerNode.rotation = Math.round(innerNode.rotation);
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
                innerNode.rotation = Math.round(innerNode.rotation);
              }
              if (nodeshapetypes.includes(innerNode.type)) {
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.cornerRadius = Math.round(
                  Number(innerNode.cornerRadius)
                );
                innerNode.rotation = Math.round(innerNode.rotation);
              }
              if (innerNode.type === "TEXT") {
                await figma.loadFontAsync(innerNode.fontName as FontName);
                if (innerNode.textAutoResize == "NONE") {
                  innerNode.textAutoResize = "NONE";
                } else if (innerNode.textAutoResize == "HEIGHT") {
                  innerNode.textAutoResize = "HEIGHT";
                } else {
                  innerNode.textAutoResize = "WIDTH_AND_HEIGHT";
                }
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.fontSize = Math.round(Number(innerNode.fontSize));
                innerNode.rotation = Math.round(innerNode.rotation);
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
                if (LS.unit === "PIXELS") {
                  innerNode.setRangeLetterSpacing(0, node.characters.length, {
                    value: Math.round(Number(LS.value)),
                    unit: "PIXELS",
                  });
                }
                if (LS.unit === "PERCENT") {
                  innerNode.setRangeLetterSpacing(0, node.characters.length, {
                    value: Math.round(Number(LS.value)),
                    unit: "PERCENT",
                  });
                }
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
    if (layers.length > 0) {
      figma.notify("All cleaned up!");
    }
    if (msg.checkboxOn === true) {
      figma.closePlugin();
    }
  }

  if (msg.type === "select-and-run") {
    async function selectAndRound(): Promise<String> {
      figma.currentPage.selection = layers;
      figma.notify("All cleaned up!");
      figma.root.children.flatMap((pageNode) =>
        pageNode.findAll().forEach(async (node) => {
          node.x = Math.round(node.x);
          node.y = Math.round(node.y);
          node.resize(Math.round(node.width), Math.round(node.height));
          node.rotation = Math.round(node.rotation);
          node.strokeWeight = Math.round(node.strokeWeight);
          node.cornerRadius = Math.round(node.cornerRadius);
          if (node.type === "TEXT") {
            await figma.loadFontAsync(node.fontName as FontName);
            if (node.textAutoResize == "NONE") {
              node.textAutoResize = "NONE";
            } else if (node.textAutoResize == "HEIGHT") {
              node.textAutoResize = "HEIGHT";
            } else {
              node.textAutoResize = "WIDTH_AND_HEIGHT";
            }
            node.strokeWeight = Math.round(node.strokeWeight);
            node.fontSize = Math.round(Number(node.fontSize));
            node.rotation = Math.round(node.rotation);
            let LH = node.getRangeLineHeight(0, node.characters.length);
            if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
              node.setRangeLineHeight(0, node.characters.length, {
                value: Math.round(Number(LH.value)),
                unit: "PIXELS",
              });
            }
            if (LH.unit === "PERCENT") {
              node.setRangeLineHeight(0, node.characters.length, {
                value: Math.round(Number(LH.value)),
                unit: "PERCENT",
              });
            }
            let LS = node.getRangeLetterSpacing(0, node.characters.length);
            if (LS.unit === "PIXELS") {
              node.setRangeLetterSpacing(0, node.characters.length, {
                value: Math.round(LS.value),
                unit: "PIXELS",
              });
            }
            if (LS.unit === "PERCENT") {
              node.setRangeLetterSpacing(0, node.characters.length, {
                value: Math.round(LS.value),
                unit: "PERCENT",
              });
            }
            node.paragraphSpacing = Math.round(node.paragraphSpacing);
          }
          if (nodetypes.includes(node.type)) {
            node.x = Math.round(node.x);
            node.y = Math.round(node.y);
            node.resize(Math.round(node.width), Math.round(node.height));
            node.rotation = Math.round(node.rotation);
            node.strokeWeight = Math.round(node.strokeWeight);
            node.cornerRadius = Math.round(node.cornerRadius);
            for (let property of propertiesToRound) {
              node[property] = Math.round(node[property]);
            }
            node.cornerRadius = Math.round(Number(node.cornerRadius));
            for (let innerNode of node.children) {
              innerNode.x = Math.round(innerNode.x);
              innerNode.y = Math.round(innerNode.y);
              innerNode.cornerRadius = Math.round(innerNode.cornerRadius);
              innerNode.rotation = Math.round(innerNode.rotation);
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
                innerNode.rotation = Math.round(innerNode.rotation);
              }
              if (nodeshapetypes.includes(innerNode.type)) {
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.cornerRadius = Math.round(
                  Number(innerNode.cornerRadius)
                );
                innerNode.rotation = Math.round(innerNode.rotation);
              }
              if (innerNode.type === "TEXT") {
                await figma.loadFontAsync(innerNode.fontName as FontName);
                if (innerNode.textAutoResize == "NONE") {
                  innerNode.textAutoResize = "NONE";
                } else if (innerNode.textAutoResize == "HEIGHT") {
                  innerNode.textAutoResize = "HEIGHT";
                } else {
                  innerNode.textAutoResize = "WIDTH_AND_HEIGHT";
                }
                innerNode.width = "AUTO";
                innerNode.strokeWeight = Math.round(innerNode.strokeWeight);
                innerNode.fontSize = Math.round(Number(innerNode.fontSize));
                innerNode.rotation = Math.round(innerNode.rotation);
                let LH = innerNode.getRangeLineHeight(
                  0,
                  innerNode.characters.length
                );
                if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
                  innerNode.setRangeLineHeight(0, innerNode.characters.length, {
                    value: Math.round(Number(LH.value)),
                    unit: "PIXELS",
                  });
                }
                let LS = innerNode.getRangeLetterSpacing(
                  0,
                  innerNode.characters.length
                );
                if (LS.unit === "PIXELS") {
                  innerNode.setRangeLetterSpacing(
                    0,
                    innerNode.characters.length,
                    {
                      value: Math.round(LS.value),
                      unit: "PIXELS",
                    }
                  );
                }
                if (LS.unit === "PERCENT") {
                  innerNode.setRangeLetterSpacing(
                    0,
                    innerNode.characters.length,
                    {
                      value: Math.round(LS.value),
                      unit: "PERCENT",
                    }
                  );
                }
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
    if (layers.length > 0) {
      figma.notify("All cleaned up!");
    }
    if (msg.checkboxOn === true) {
      figma.closePlugin();
    }
  }
};
