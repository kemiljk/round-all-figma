var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 300, height: 100 });
figma.ui.onmessage = (msg) => {
    // if (msg.type === "select-and-run") {
    //   const { selection } = figma.currentPage;
    //   async function selectAndRound(node): Promise<String> {
    //     figma.root.children.flatMap((pageNode) =>
    //       pageNode.findAll().forEach(async (node) => {
    //         await figma.loadFontAsync(node.fontName as FontName);
    //         let Y = node.y;
    //         let X = node.x;
    //         let W = node.width;
    //         let H = node.height;
    //         node.x = Math.round(X);
    //         node.y = Math.round(Y);
    //         node.resize(Math.round(W), Math.round(H));
    //         let S = node.strokeWeight;
    //         node.strokeWeight = Math.round(S);
    //         if (node.type === "TEXT") {
    //           await figma.loadFontAsync(node.fontName as FontName);
    //           let Y = node.y;
    //           let X = node.x;
    //           let W = node.width;
    //           let H = node.height;
    //           node.x = Math.round(X);
    //           node.y = Math.round(Y);
    //           node.resize(Math.round(W), Math.round(H));
    //           let S = node.strokeWeight;
    //           node.strokeWeight = Math.round(S);
    //           let text = node.fontSize.toString();
    //           let T = parseFloat(text);
    //           node.fontSize = Math.round(T);
    //           let LH = node.getRangeLineHeight(0, selection.length);
    //           if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
    //             node.setRangeLineHeight(0, node.characters.length, {
    //               value: Math.round(LH.value),
    //               unit: "PIXELS",
    //             });
    //           }
    //           let LS = node.getRangeLetterSpacing(0, selection.length);
    //           node.setRangeLetterSpacing(0, node.characters.length, {
    //             value: Math.round(LS.value),
    //             unit: "PIXELS",
    //           });
    //           let PS = node.paragraphSpacing;
    //           node.paragraphSpacing = Math.round(PS);
    //         }
    //         if (node.type === "FRAME") {
    //           let Y = node.y;
    //           let X = node.x;
    //           let W = node.width;
    //           let H = node.height;
    //           node.x = Math.round(X);
    //           node.y = Math.round(Y);
    //           node.resize(Math.round(W), Math.round(H));
    //           let S = node.strokeWeight;
    //           node.strokeWeight = Math.round(S);
    //           let PL = node.paddingLeft;
    //           let PR = node.paddingRight;
    //           let PT = node.paddingTop;
    //           let PB = node.paddingBottom;
    //           let IS = node.itemSpacing;
    //           node.paddingLeft = Math.round(PL);
    //           node.paddingRight = Math.round(PR);
    //           node.paddingTop = Math.round(PT);
    //           node.paddingBottom = Math.round(PB);
    //           node.itemSpacing = Math.round(IS);
    //           let radius = node.cornerRadius.toString();
    //           let CR = parseInt(radius);
    //           node.cornerRadius = Math.round(CR);
    //           for (node of node.children) {
    //             if (node.type === "FRAME") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               let PL = node.paddingLeft;
    //               let PR = node.paddingRight;
    //               let PT = node.paddingTop;
    //               let PB = node.paddingBottom;
    //               let IS = node.itemSpacing;
    //               node.paddingLeft = Math.round(PL);
    //               node.paddingRight = Math.round(PR);
    //               node.paddingTop = Math.round(PT);
    //               node.paddingBottom = Math.round(PB);
    //               node.itemSpacing = Math.round(IS);
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //             if (node.type === "GROUP") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //             }
    //             if (node.type === "COMPONENT") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //             if (node.type === "INSTANCE") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //             if (node.type === "VECTOR") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //             if (node.type === "STAR") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //             if (node.type === "ELLIPSE") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //             if (node.type === "POLYGON") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //             if (node.type === "TEXT") {
    //               await figma.loadFontAsync(node.fontName as FontName);
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let text = node.fontSize.toString();
    //               let T = parseFloat(text);
    //               node.fontSize = Math.round(T);
    //               let LH = node.getRangeLineHeight(0, selection.length);
    //               if (LH.unit !== "AUTO" || LH.unit !== "PERCENT") {
    //                 node.setRangeLineHeight(0, node.characters.length, {
    //                   value: Math.round(LH.value),
    //                   unit: "PIXELS",
    //                 });
    //               }
    //               let LS = node.getRangeLetterSpacing(0, selection.length);
    //               node.setRangeLetterSpacing(0, node.characters.length, {
    //                 value: Math.round(LS.value),
    //                 unit: "PIXELS",
    //               });
    //               let PS = node.paragraphSpacing;
    //               node.paragraphSpacing = Math.round(PS);
    //             }
    //             if (node.type === "RECTANGLE") {
    //               let Y = node.y;
    //               let X = node.x;
    //               let W = node.width;
    //               let H = node.height;
    //               node.x = Math.round(X);
    //               node.y = Math.round(Y);
    //               node.resize(Math.round(W), Math.round(H));
    //               let S = node.strokeWeight;
    //               node.strokeWeight = Math.round(S);
    //               let radius = node.cornerRadius.toString();
    //               let CR = parseInt(radius);
    //               node.cornerRadius = Math.round(CR);
    //             }
    //           }
    //         }
    //       })
    //     );
    //     console.log(node);
    //     return Promise.resolve("Done!");
    //   }
    //   selectAndRound(selection);
    // }
    if (msg.type === "run") {
        const { selection } = figma.currentPage;
        function hasValidSelection(nodes) {
            return !(!nodes || nodes.length === 0);
        }
        function roundPixels(nodes) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!hasValidSelection(nodes))
                    return Promise.resolve("No valid selection");
                for (let n of nodes) {
                    if (n.type === "TEXT") {
                        yield figma.loadFontAsync(n.fontName);
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
                        n.setRangeLineHeight(0, n.characters.length, {
                            value: Math.round(LH.value),
                            unit: "PIXELS",
                        });
                        let LS = n.getRangeLetterSpacing(0, selection.length);
                        n.setRangeLetterSpacing(0, n.characters.length, {
                            value: Math.round(LS.value),
                            unit: "PIXELS",
                        });
                        let PS = n.paragraphSpacing;
                        n.paragraphSpacing = Math.round(PS);
                    }
                    if (n.type === "FRAME") {
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
                            if (n.type === "FRAME") {
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
                            if (n.type === "COMPONENT") {
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
                            if (n.type === "INSTANCE") {
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
                            if (n.type === "VECTOR") {
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
                            if (n.type === "STAR") {
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
                            if (n.type === "ELLIPSE") {
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
                            if (n.type === "POLYGON") {
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
                                yield figma.loadFontAsync(n.fontName);
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
                                if (LH.unit !== "AUTO" || "PERCENT") {
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
                            if (n.type === "RECTANGLE") {
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
                        }
                    }
                    if (n.type === "RECTANGLE") {
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
                    if (n.type === "COMPONENT") {
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
                    if (n.type === "COMPONENT_SET") {
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
                    if (n.type === "INSTANCE") {
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
                    if (n.type === "VECTOR") {
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
                    if (n.type === "STAR") {
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
                    if (n.type === "ELLIPSE") {
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
                    if (n.type === "POLYGON") {
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
                    if (n.type === "COMPONENT") {
                        for (n of n.children) {
                            if (n.type === "FRAME") {
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
                            }
                            if (n.type === "TEXT") {
                                yield figma.loadFontAsync(n.fontName);
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
                                if (LH.unit !== "AUTO" || "PERCENT") {
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
                            if (n.type === "RECTANGLE") {
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
                            if (n.type === "COMPONENT") {
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
                            if (n.type === "COMPONENT_SET") {
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
                            if (n.type === "INSTANCE") {
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
                            if (n.type === "VECTOR") {
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
                            if (n.type === "STAR") {
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
                            if (n.type === "ELLIPSE") {
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
                            if (n.type === "POLYGON") {
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
                        }
                    }
                    if (n.type === "INSTANCE") {
                        for (n of n.children) {
                            if (n.type === "FRAME") {
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
                            }
                            if (n.type === "TEXT") {
                                yield figma.loadFontAsync(n.fontName);
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
                                if (LH.unit !== "AUTO" || "PERCENT") {
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
                            if (n.type === "RECTANGLE") {
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
                            if (n.type === "COMPONENT") {
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
                            if (n.type === "COMPONENT_SET") {
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
                            if (n.type === "INSTANCE") {
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
                            if (n.type === "VECTOR") {
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
                            if (n.type === "STAR") {
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
                            if (n.type === "ELLIPSE") {
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
                            if (n.type === "POLYGON") {
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
                        }
                    }
                    if (n.type === "COMPONENT_SET") {
                        for (n of n.children) {
                            if (n.type === "FRAME") {
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
                            }
                            if (n.type === "TEXT") {
                                yield figma.loadFontAsync(n.fontName);
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
                                if (LH.unit !== "AUTO" || "PERCENT") {
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
                            if (n.type === "RECTANGLE") {
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
                            if (n.type === "COMPONENT") {
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
                            if (n.type === "COMPONENT_SET") {
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
                            if (n.type === "INSTANCE") {
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
                            if (n.type === "VECTOR") {
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
                            if (n.type === "STAR") {
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
                            if (n.type === "ELLIPSE") {
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
                            if (n.type === "POLYGON") {
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
                        }
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
                            if (n.type === "TEXT") {
                                yield figma.loadFontAsync(n.fontName);
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
                                if (LH.unit !== "AUTO" || "PERCENT") {
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
                            if (n.type === "RECTANGLE") {
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
                            if (n.type === "COMPONENT") {
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
                            if (n.type === "COMPONENT_SET") {
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
                            if (n.type === "INSTANCE") {
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
                            if (n.type === "VECTOR") {
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
                            if (n.type === "STAR") {
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
                            if (n.type === "ELLIPSE") {
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
                            if (n.type === "POLYGON") {
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
                        }
                    }
                    if (n.type === "LINE") {
                        let X = n.x;
                        let Y = n.y;
                        let W = n.width;
                        let H = n.height;
                        n.x = Math.round(X);
                        n.y = Math.round(Y);
                        n.resize(Math.round(W), Math.round(H));
                        let S = n.strokeWeight;
                        n.strokeWeight = Math.round(S);
                    }
                    else {
                        let X = n.x;
                        let Y = n.y;
                        let W = n.width;
                        let H = n.height;
                        n.x = Math.round(X);
                        n.y = Math.round(Y);
                        n.resize(Math.round(W), Math.round(H));
                    }
                }
                return Promise.resolve("Done!");
            });
        }
        roundPixels(selection);
        figma.notify(`Cleaned up ${selection.length} node(s)`);
    }
};
