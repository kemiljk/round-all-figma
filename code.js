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
    if (msg.type === "select-and-run") {
        const selection = figma.currentPage.findAll();
        figma.currentPage.selection = selection;
        function selectAndRoundPixels() {
            return __awaiter(this, void 0, void 0, function* () {
                if (selection.length > 0) {
                    for (let n of selection) {
                        if (n.type === "TEXT") {
                            yield figma.loadFontAsync(n.fontName);
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
                        }
                        if (n.type === "FRAME") {
                            let X = n.x;
                            let Y = n.y;
                            let W = n.width;
                            let H = n.height;
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
                            n.x = Math.round(X);
                            n.y = Math.round(Y);
                            n.resize(Math.round(W), Math.round(H));
                            let radius = n.cornerRadius.toString();
                            let CR = parseInt(radius);
                            n.cornerRadius = Math.round(CR);
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                if (n.type === "TEXT") {
                                    yield figma.loadFontAsync(n.fontName);
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
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                        if (n.type === "COMPONENT") {
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                        if (n.type === "INSTANCE") {
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                        if (n.type === "COMPONENT_SET") {
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                }
            });
        }
        selectAndRoundPixels();
        figma.notify(`Cleaned up ${selection.length} node(s)`);
    }
    if (msg.type === "run") {
        const selection = figma.currentPage.selection;
        function roundPixels() {
            return __awaiter(this, void 0, void 0, function* () {
                if (selection.length > 0) {
                    for (let n of selection) {
                        if (n.type === "TEXT") {
                            yield figma.loadFontAsync(n.fontName);
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
                            n.x = Math.round(X);
                            n.y = Math.round(Y);
                            n.resize(Math.round(W), Math.round(H));
                            let radius = n.cornerRadius.toString();
                            let CR = parseInt(radius);
                            n.cornerRadius = Math.round(CR);
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                if (n.type === "TEXT") {
                                    yield figma.loadFontAsync(n.fontName);
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
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                        if (n.type === "COMPONENT") {
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                        if (n.type === "INSTANCE") {
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                        if (n.type === "COMPONENT_SET") {
                            for (n of n.children) {
                                if (n.type === "FRAME") {
                                    let X = n.x;
                                    let Y = n.y;
                                    let W = n.width;
                                    let H = n.height;
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
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
                                    let S = n.strokeWeight;
                                    n.strokeWeight = Math.round(S);
                                    n.x = Math.round(X);
                                    n.y = Math.round(Y);
                                    n.resize(Math.round(W), Math.round(H));
                                    let text = n.fontSize.toString();
                                    let T = parseFloat(text);
                                    n.fontSize = Math.round(T);
                                    let LH = n.getRangeLineHeight(0, selection.length);
                                    if (LH.unit !== "AUTO" && "PERCENT") {
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
                }
            });
        }
        roundPixels();
        figma.notify(`Cleaned up ${selection.length} node(s)`);
    }
};
