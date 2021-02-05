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
        function selectAndRoundPixels() {
            return __awaiter(this, void 0, void 0, function* () {
                const layers = figma.currentPage.findAll();
                figma.currentPage.selection = layers;
                if (layers.length > 0) {
                    for (let n of layers) {
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
                        }
                        if (n.type === "FRAME" ||
                            n.type === "RECTANGLE" ||
                            n.type === "COMPONENT" ||
                            n.type === "COMPONENT_SET" ||
                            n.type === "INSTANCE" ||
                            n.type === "VECTOR" ||
                            n.type === "STAR" ||
                            n.type === "ELLIPSE" ||
                            n.type === "POLYGON") {
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
            });
        }
        selectAndRoundPixels();
    }
    if (msg.type === "run") {
        function roundPixels() {
            return __awaiter(this, void 0, void 0, function* () {
                const layers = figma.currentPage.selection;
                if (layers.length > 0) {
                    for (let n of layers) {
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
                        }
                        if (n.type === "FRAME" ||
                            n.type === "RECTANGLE" ||
                            n.type === "COMPONENT" ||
                            n.type === "COMPONENT_SET" ||
                            n.type === "INSTANCE" ||
                            n.type === "VECTOR" ||
                            n.type === "STAR" ||
                            n.type === "ELLIPSE" ||
                            n.type === "POLYGON") {
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
            });
        }
        roundPixels();
    }
};
