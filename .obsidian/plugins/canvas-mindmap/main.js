/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/canvasMindMap.ts
var canvasMindMap_exports = {};
__export(canvasMindMap_exports, {
  default: () => CanvasMindMap
});
module.exports = __toCommonJS(canvasMindMap_exports);
var import_obsidian2 = require("obsidian");

// node_modules/monkey-around/mjs/index.js
function around(obj, factories) {
  const removers = Object.keys(factories).map((key) => around1(obj, key, factories[key]));
  return removers.length === 1 ? removers[0] : function() {
    removers.forEach((r) => r());
  };
}
function around1(obj, method, createWrapper) {
  const original = obj[method], hadOwn = obj.hasOwnProperty(method);
  let current = createWrapper(original);
  if (original)
    Object.setPrototypeOf(current, original);
  Object.setPrototypeOf(wrapper, current);
  obj[method] = wrapper;
  return remove;
  function wrapper(...args) {
    if (current === original && obj[method] === wrapper)
      remove();
    return current.apply(this, args);
  }
  function remove() {
    if (obj[method] === wrapper) {
      if (hadOwn)
        obj[method] = original;
      else
        delete obj[method];
    }
    if (current === original)
      return;
    current = original;
    Object.setPrototypeOf(wrapper, original || Function);
  }
}

// src/utils.ts
var random = (e) => {
  let t = [];
  for (let n = 0; n < e; n++) {
    t.push((16 * Math.random() | 0).toString(16));
  }
  return t.join("");
};
var createChildFileNode = (canvas, parentNode, file, path, y) => {
  const node = addNode(canvas, random(16), {
    x: parentNode.x + parentNode.width + 200,
    y,
    width: parentNode.width,
    height: parentNode.height * 0.6,
    type: "file",
    content: file.path,
    subpath: path
  });
  addEdge(canvas, random(16), {
    fromOrTo: "from",
    side: "right",
    node: parentNode
  }, {
    fromOrTo: "to",
    side: "left",
    node
  });
  canvas.requestSave();
  return node;
};
var addNode = (canvas, id, {
  x,
  y,
  width,
  height,
  type,
  content,
  subpath
}) => {
  if (!canvas)
    return;
  const data = canvas.getData();
  if (!data)
    return;
  const node = {
    "id": id,
    "x": x,
    "y": y,
    "width": width,
    "height": height,
    "type": type
  };
  switch (type) {
    case "text":
      node.text = content;
      break;
    case "file":
      node.file = content;
      if (subpath)
        node.subpath = subpath;
      break;
  }
  canvas.importData({
    "nodes": [
      ...data.nodes,
      node
    ],
    "edges": data.edges
  });
  canvas.requestFrame();
  return node;
};
var addEdge = (canvas, edgeID, fromEdge, toEdge) => {
  if (!canvas)
    return;
  const data = canvas.getData();
  if (!data)
    return;
  canvas.importData({
    "edges": [
      ...data.edges,
      {
        "id": edgeID,
        "fromNode": fromEdge.node.id,
        "fromSide": fromEdge.side,
        "toNode": toEdge.node.id,
        "toSide": toEdge.side
      }
    ],
    "nodes": data.nodes
  });
  canvas.requestFrame();
};

// src/mindMapSettings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  navigate: {
    useNavigate: true,
    modifierKey: ["Alt"]
  },
  create: {
    createFloat: true,
    childDirection: "right",
    siblingWidth: 200,
    siblingHeight: 100
  },
  layout: {
    direction: "LR",
    autoLayout: true,
    autoLayoutDirection: "LR",
    autoHeight: true
  },
  advanced: {
    transferToCommands: false
  }
};
var MindMapSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.applySettingsUpdate = (0, import_obsidian.debounce)(async () => {
      await this.plugin.saveSettings();
      console.log("debounce");
    }, 300, true);
    this.plugin = plugin;
  }
  updateSettings(key, value) {
    this.plugin.settings = {
      ...this.plugin.settings,
      [key.split(".")[0]]: {
        ...this.plugin.settings[key.split(".")[0]],
        [key.split(".")[1]]: value
      }
    };
    this.applySettingsUpdate();
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Canvas MindMap" });
    this.useNavigateHotkeySetting(containerEl, this.plugin.settings);
    this.createHotkeySetting(containerEl, this.plugin.settings);
    new import_obsidian.Setting(containerEl).setName("Donate").setDesc("If you like this plugin, consider donating to support continued development:").addButton((bt) => {
      bt.buttonEl.outerHTML = `<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>`;
    });
  }
  useNavigateHotkeySetting(containerEl, setting) {
    new import_obsidian.Setting(containerEl).setName("Use Navigate Hotkey").setDesc("Use the hotkey to navigate the mind map").addToggle((toggle) => {
      toggle.setValue(setting.navigate.useNavigate);
      toggle.onChange((value) => {
        this.updateSettings("navigate.useNavigate", value);
        setTimeout(() => {
          this.display();
        }, 700);
      });
    });
  }
  createHotkeySetting(containerEl, setting) {
    new import_obsidian.Setting(containerEl).setName("Create Float").setDesc("Create a float node").addToggle((toggle) => {
      toggle.setValue(setting.create.createFloat);
      toggle.onChange((value) => {
        this.updateSettings("create.createFloat", value);
      });
    });
  }
};

// src/canvasMindMap.ts
var createEdge = async (node1, node2, canvas) => {
  addEdge(canvas, random(16), {
    fromOrTo: "from",
    side: "right",
    node: node1
  }, {
    fromOrTo: "to",
    side: "left",
    node: node2
  });
};
var navigate = (canvas, direction) => {
  const currentSelection = canvas.selection;
  if (currentSelection.size !== 1)
    return;
  if (currentSelection.values().next().value.isEditing)
    return;
  const selectedItem = currentSelection.values().next().value;
  const viewportNodes = canvas.getViewportNodes();
  const { x, y, width, height } = selectedItem;
  canvas.deselectAll();
  const isVertical = direction === "top" || direction === "bottom";
  const comparePrimary = isVertical ? (a, b) => a.y - b.y : (a, b) => a.x - b.x;
  const compareSecondary = isVertical ? (a, b) => a.x - b.x : (a, b) => a.y - b.y;
  const filterCondition = (node) => {
    const inRange = isVertical ? node.x < x + width / 2 && node.x + node.width > x + width / 2 : node.y < y + height / 2 && node.y + node.height > y + height / 2;
    const directionCondition = direction === "top" ? node.y < y : direction === "bottom" ? node.y > y : direction === "left" ? node.x < x : node.x > x;
    return inRange && directionCondition;
  };
  const filteredNodes = viewportNodes.filter(filterCondition);
  const sortedNodes = filteredNodes.length > 0 ? filteredNodes.sort(comparePrimary) : viewportNodes.filter((node) => direction === "top" ? node.y < y : direction === "bottom" ? node.y > y : direction === "left" ? node.x < x : node.x > x).sort(compareSecondary);
  const nextNode = sortedNodes[0];
  if (nextNode) {
    canvas.selectOnly(nextNode);
    canvas.zoomToSelection();
  }
  return nextNode;
};
var createFloatingNode = (canvas, direction) => {
  var _a;
  let selection = canvas.selection;
  if (selection.size !== 1)
    return;
  if (selection.values().next().value.isEditing)
    return;
  let node = selection.values().next().value;
  let x = direction === "left" ? node.x - node.width - 50 : direction === "right" ? node.x + node.width + 50 : node.x;
  let y = direction === "top" ? node.y - node.height - 100 : direction === "bottom" ? node.y + node.height + 100 : node.y;
  const tempChildNode = addNode(canvas, random(16), {
    x,
    y,
    width: node.width,
    height: node.height,
    type: "text",
    content: ""
  });
  canvas == null ? void 0 : canvas.requestSave();
  const currentNode = (_a = canvas.nodes) == null ? void 0 : _a.get(tempChildNode == null ? void 0 : tempChildNode.id);
  if (!currentNode)
    return;
  canvas.selectOnly(currentNode);
  canvas.zoomToSelection();
  setTimeout(() => {
    currentNode.startEditing();
  }, 100);
  return tempChildNode;
};
var childNode = async (canvas, parentNode, y) => {
  var _a;
  let tempChildNode = addNode(canvas, random(16), {
    x: parentNode.x + parentNode.width + 200,
    y,
    width: parentNode.width,
    height: parentNode.height,
    type: "text",
    content: ""
  });
  await createEdge(parentNode, tempChildNode, canvas);
  canvas.deselectAll();
  const node = (_a = canvas.nodes) == null ? void 0 : _a.get(tempChildNode == null ? void 0 : tempChildNode.id);
  if (!node)
    return;
  canvas.selectOnly(node);
  canvas.requestSave();
  return tempChildNode;
};
var createChildNode = async (canvas, ignored) => {
  if (canvas.selection.size !== 1)
    return;
  const parentNode = canvas.selection.entries().next().value[1];
  if (parentNode.isEditing && !ignored)
    return;
  let wholeHeight = 0;
  let tempChildNode;
  const canvasData = canvas.getData();
  const prevParentEdges = canvasData.edges.filter((item) => {
    return item.fromNode === parentNode.id && item.toSide === "left";
  });
  if (prevParentEdges.length === 0) {
    tempChildNode = await childNode(canvas, parentNode, parentNode.y);
  } else {
    tempChildNode = await siblingNode(canvas, parentNode, prevParentEdges);
  }
  return tempChildNode;
};
var siblingNode = async (canvas, parentNode, prevParentEdges) => {
  const allEdges = canvas.getEdgesForNode(parentNode).filter((item) => {
    return prevParentEdges.some((edge) => {
      return item.to.node.id === edge.toNode;
    });
  });
  const allNodes = allEdges.map((edge) => edge.to.node);
  allNodes.sort((a, b) => a.y - b.y);
  const lastNode = allNodes[allNodes.length - 1];
  canvas.selectOnly(lastNode);
  return await createSiblingNode(canvas, false);
};
var createSiblingNode = async (canvas, ignored) => {
  var _a;
  if (canvas.selection.size !== 1)
    return;
  const selectedNode = canvas.selection.entries().next().value[1];
  if (selectedNode.isEditing && !ignored)
    return;
  const incomingEdges = canvas.getEdgesForNode(selectedNode).filter((edge) => edge.to.node.id === selectedNode.id);
  if (incomingEdges.length === 0)
    return;
  const parentNode = incomingEdges[0].from.node;
  const newYPosition = selectedNode.y + selectedNode.height / 2 + 110;
  const newChildNode = await childNode(canvas, parentNode, newYPosition);
  const leftSideEdges = canvas.getEdgesForNode(parentNode).filter((edge) => edge.from.node.id === parentNode.id && edge.to.side === "left");
  let nodes = leftSideEdges.map((edge) => edge.to.node);
  let totalHeight = nodes.reduce((acc, node) => acc + node.height + 20, 0);
  nodes.sort((a, b) => a.y - b.y);
  if (nodes.length <= 1)
    return;
  if (nodes.length > 1 && nodes[0].x === ((_a = nodes[1]) == null ? void 0 : _a.x)) {
    nodes.forEach((node, index) => {
      const yPos = index === 0 ? parentNode.y + parentNode.height / 2 - totalHeight / 2 : nodes[index - 1].y + nodes[index - 1].height + 20;
      node.moveTo({ x: selectedNode.x, y: yPos });
    });
  }
  canvas.requestSave();
  return newChildNode;
};
var CanvasMindMap = class extends import_obsidian2.Plugin {
  async onload() {
    await this.registerSettings();
    this.registerCommands();
    this.patchCanvas();
    this.patchMarkdownFileInfo();
    this.patchCanvasNode();
  }
  onunload() {
  }
  async registerSettings() {
    this.settingTab = new MindMapSettingTab(this.app, this);
    this.addSettingTab(this.settingTab);
    await this.loadSettings();
  }
  registerCommands() {
    this.addCommand({
      id: "split-heading-into-mindmap",
      name: "Split Heading into mindmap based on H1",
      checkCallback: (checking) => {
        var _a;
        const canvasView = app.workspace.getActiveViewOfType(import_obsidian2.ItemView);
        if ((canvasView == null ? void 0 : canvasView.getViewType()) === "canvas") {
          if (!checking) {
            const canvas = canvasView == null ? void 0 : canvasView.canvas;
            const currentSelection = canvas == null ? void 0 : canvas.selection;
            if (currentSelection.size > 1) {
              return;
            }
            const currentSelectionItem = currentSelection.values().next().value;
            if (!currentSelectionItem.filePath)
              return;
            const currentSelectionItemFile = currentSelectionItem.file;
            if (!(currentSelectionItemFile.extension === "md"))
              return;
            const currentFileHeadings = (_a = app.metadataCache.getFileCache(currentSelectionItemFile)) == null ? void 0 : _a.headings;
            if (!currentFileHeadings)
              return;
            const currentFileHeadingH1 = currentFileHeadings.filter((heading) => heading.level === 1);
            if (currentFileHeadingH1.length === 0)
              return;
            const nodeGroupHeight = (currentSelectionItem.height * 0.6 + 20) * currentFileHeadingH1.length;
            let direction = -1;
            const nodeGroupY = currentSelectionItem.y + currentSelectionItem.height / 2 + nodeGroupHeight / 2 * direction;
            currentFileHeadingH1.forEach((item, index) => {
              createChildFileNode(canvas, currentSelectionItem, currentSelectionItemFile, "#" + item.heading, nodeGroupY - direction * (currentSelectionItem.height * 0.6 + 20) * index);
            });
          }
          return true;
        }
      }
    });
    this.addCommand({
      id: "create-floating-node",
      name: "Create floating node",
      checkCallback: (checking) => {
        const canvasView = this.app.workspace.getActiveViewOfType(import_obsidian2.ItemView);
        if ((canvasView == null ? void 0 : canvasView.getViewType()) === "canvas") {
          if (!checking) {
            const canvas = canvasView == null ? void 0 : canvasView.canvas;
            const node = canvas.createTextNode({
              pos: {
                x: 0,
                y: 0,
                height: 500,
                width: 400
              },
              size: {
                x: 0,
                y: 0,
                height: 500,
                width: 400
              },
              text: "",
              focus: true,
              save: true
            });
            canvas.addNode(node);
            canvas.requestSave();
            if (!node)
              return;
            setTimeout(() => {
              node.startEditing();
              canvas.zoomToSelection();
            }, 0);
          }
          return true;
        }
      }
    });
    this.addCommand({
      id: "create-child-node",
      name: "Create child node",
      checkCallback: (checking) => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian2.ItemView);
        const canvasView = this.app.workspace.getActiveViewOfType(import_obsidian2.ItemView);
        if ((canvasView == null ? void 0 : canvasView.getViewType()) === "canvas") {
          if (!checking) {
            const canvas = canvasView == null ? void 0 : canvasView.canvas;
            createChildNode(canvas, true).then((node) => {
              if (!node)
                return;
              setTimeout(() => {
                var _a;
                const realNode = (_a = canvas.nodes) == null ? void 0 : _a.get(node.id);
                canvas.zoomToSelection();
                realNode == null ? void 0 : realNode.startEditing();
              }, 0);
            });
          }
          return true;
        }
      }
    });
    this.addCommand({
      id: "create-sibling-node",
      name: "Create sibling node",
      checkCallback: (checking) => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian2.ItemView);
        const canvasView = this.app.workspace.getActiveViewOfType(import_obsidian2.ItemView);
        if ((canvasView == null ? void 0 : canvasView.getViewType()) === "canvas") {
          if (!checking) {
            const canvas = canvasView == null ? void 0 : canvasView.canvas;
            createSiblingNode(canvas, true).then((node) => {
              if (!node)
                return;
              setTimeout(() => {
                var _a;
                const realNode = (_a = canvas.nodes) == null ? void 0 : _a.get(node.id);
                canvas.zoomToSelection();
                realNode == null ? void 0 : realNode.startEditing();
              }, 0);
            });
          }
          return true;
        }
      }
    });
  }
  patchCanvas() {
    const patchCanvas = () => {
      var _a;
      const self = this;
      const canvasView = (_a = this.app.workspace.getLeavesOfType("canvas").first()) == null ? void 0 : _a.view;
      const canvas = canvasView == null ? void 0 : canvasView.canvas;
      if (!canvasView)
        return false;
      const patchCanvasView = canvas.constructor;
      const canvasViewunistaller = around(canvasView.constructor.prototype, {
        onOpen: (next) => async function() {
          if (self.settings.create.createFloat) {
            this.scope.register(["Mod"], "ArrowUp", () => {
              createFloatingNode(this.canvas, "top");
            });
            this.scope.register(["Mod"], "ArrowDown", () => {
              createFloatingNode(this.canvas, "bottom");
            });
            this.scope.register(["Mod"], "ArrowLeft", () => {
              createFloatingNode(this.canvas, "left");
            });
            this.scope.register(["Mod"], "ArrowRight", () => {
              createFloatingNode(this.canvas, "right");
            });
          }
          if (self.settings.navigate.useNavigate) {
            this.scope.register(["Alt"], "ArrowUp", () => {
              navigate(this.canvas, "top");
            });
            this.scope.register(["Alt"], "ArrowDown", () => {
              navigate(this.canvas, "bottom");
            });
            this.scope.register(["Alt"], "ArrowLeft", () => {
              navigate(this.canvas, "left");
            });
            this.scope.register(["Alt"], "ArrowRight", () => {
              navigate(this.canvas, "right");
            });
          }
          this.scope.register([], "Enter", async () => {
            const node = await createSiblingNode(this.canvas, false);
            if (!node)
              return;
            setTimeout(() => {
              var _a2;
              const realNode = (_a2 = this.canvas.nodes) == null ? void 0 : _a2.get(node.id);
              realNode == null ? void 0 : realNode.startEditing();
              this.canvas.zoomToSelection();
            }, 0);
          });
          this.scope.register([], "Tab", async (ev) => {
            const node = await createChildNode(this.canvas, false);
            if (!node)
              return;
            setTimeout(() => {
              var _a2;
              const realNode = (_a2 = this.canvas.nodes) == null ? void 0 : _a2.get(node.id);
              realNode == null ? void 0 : realNode.startEditing();
              this.canvas.zoomToSelection();
            }, 0);
          });
          this.scope.register([], "Space", async (ev) => {
            const selection = this.canvas.selection;
            if (selection.size !== 1)
              return;
            const node = selection.entries().next().value[1];
            if ((node == null ? void 0 : node.label) || (node == null ? void 0 : node.url))
              return;
            if (node.isEditing)
              return;
            node.startEditing();
          });
          return next.call(this);
        }
      });
      const uninstaller = around(patchCanvasView.prototype, {
        onKeydown: (next) => async function(e) {
          if (e.key === "Backspace" || e.key === "Delete") {
            if (this.selection.size !== 1) {
              return next.call(this, e);
            }
            const childNode2 = this.selection.entries().next().value[1];
            if (childNode2.isEditing)
              return;
            const edges = this.getEdgesForNode(childNode2).filter((item) => {
              return item.to.node.id === childNode2.id;
            });
            if (edges.length === 0)
              return;
            const parentNode = edges[0].from.node;
            next.call(this, e);
            let wholeHeight = 0;
            let parentEdges = this.getEdgesForNode(parentNode).filter((item) => {
              return item.from.node.id === parentNode.id && item.to.side === "left";
            });
            let allnodes = [];
            for (let i = 0; i < parentEdges.length; i++) {
              let node = parentEdges[i].to.node;
              allnodes.push(node);
              wholeHeight += node.height + 20;
            }
            allnodes.sort((a, b) => {
              return a.y - b.y;
            });
            if (allnodes.length === 1)
              return;
            if (allnodes.length > 1) {
              if (allnodes[0].x !== allnodes[0].x) {
                return;
              }
            }
            let preNode;
            for (let i = 0; i < allnodes.length; i++) {
              let tempNode;
              if (i === 0) {
                (tempNode = allnodes[i]).moveTo({
                  x: childNode2.x,
                  y: parentNode.y + parentNode.height - wholeHeight / 2
                });
              } else {
                (tempNode = allnodes[i]).moveTo({
                  x: childNode2.x,
                  y: preNode.y + preNode.height + 20
                });
              }
              this.requestSave();
              preNode = tempNode;
            }
            this.requestSave();
            this.selectOnly(parentNode);
            this.zoomToSelection();
            parentNode.startEditing();
            return;
          }
          if (e.key === " ") {
            const selection = this.selection;
            if (selection.size !== 1)
              return;
            const node = selection.entries().next().value[1];
            if ((node == null ? void 0 : node.label) || (node == null ? void 0 : node.url))
              return;
            if (node.isEditing)
              return;
            node.startEditing();
          }
          next.call(this, e);
        }
      });
      this.register(uninstaller);
      this.register(canvasViewunistaller);
      canvas == null ? void 0 : canvas.view.leaf.rebuildView();
      console.log("Obsidian-Canvas-MindMap: canvas view patched");
      return true;
    };
    this.app.workspace.onLayoutReady(() => {
      if (!patchCanvas()) {
        const evt = this.app.workspace.on("layout-change", () => {
          patchCanvas() && this.app.workspace.offref(evt);
        });
        this.registerEvent(evt);
      }
    });
  }
  patchCanvasNode() {
    const patchNode = () => {
      var _a;
      const canvasView = (_a = app.workspace.getLeavesOfType("canvas").first()) == null ? void 0 : _a.view;
      const canvas = canvasView == null ? void 0 : canvasView.canvas;
      if (!canvas)
        return false;
      const node = Array.from(canvas.nodes).first();
      if (!node)
        return false;
      const nodeInstance = node[1];
      const uninstaller = around(nodeInstance.constructor.prototype, {
        setColor: (next) => function(e, t) {
          next.call(this, e, t);
          this.canvas.getEdgesForNode(this).forEach((edge) => {
            if (edge.from.node === this) {
              edge.setColor(e, true);
              edge.render();
            }
          });
          canvas.requestSave();
        }
      });
      this.register(uninstaller);
      console.log("Obsidian-Canvas-MindMap: canvas node patched");
      return true;
    };
    this.app.workspace.onLayoutReady(() => {
      if (!patchNode()) {
        const evt = app.workspace.on("layout-change", () => {
          patchNode() && app.workspace.offref(evt);
        });
        this.registerEvent(evt);
      }
    });
  }
  patchMarkdownFileInfo() {
    const patchEditor = () => {
      const editorInfo = app.workspace.activeEditor;
      if (!editorInfo)
        return false;
      const patchEditorInfo = editorInfo.constructor;
      const uninstaller = around(patchEditorInfo.prototype, {
        showPreview: (next) => function(e) {
          var _a, _b;
          next.call(this, e);
          if (e) {
            (_a = this.node) == null ? void 0 : _a.canvas.wrapperEl.focus();
            (_b = this.node) == null ? void 0 : _b.setIsEditing(false);
          }
        }
      });
      this.register(uninstaller);
      console.log("Obsidian-Canvas-MindMap: markdown file info patched");
      return true;
    };
    this.app.workspace.onLayoutReady(() => {
      if (!patchEditor()) {
        const evt = app.workspace.on("file-open", () => {
          setTimeout(() => {
            patchEditor() && app.workspace.offref(evt);
          }, 100);
        });
        this.registerEvent(evt);
      }
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};