  (() => {
    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a4, b2) => {
      for (var prop in b2 || (b2 = {}))
        if (__hasOwnProp.call(b2, prop))
          __defNormalProp(a4, prop, b2[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b2)) {
          if (__propIsEnum.call(b2, prop))
            __defNormalProp(a4, prop, b2[prop]);
        }
      return a4;
    };
    var __spreadProps = (a4, b2) => __defProps(a4, __getOwnPropDescs(b2));
    var __restKey = (key) => typeof key === "symbol" ? key : key + "";
    var __objRest = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
        if (decorator = decorators[i5])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.S6TJZ6NJ.js
    var basePath = "";
    function setBasePath(path) {
      basePath = path;
    }
    function getBasePath() {
      return basePath.replace(/\/$/, "");
    }
    var scripts = [...document.getElementsByTagName("script")];
    var configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
    if (configScript) {
      setBasePath(configScript.getAttribute("data-shoelace"));
    } else {
      const fallbackScript = scripts.find((s6) => /shoelace(\.min)?\.js$/.test(s6.src));
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FGIYSBZ6.js
    var library = {
      name: "default",
      resolver: (name) => `${getBasePath()}/assets/icons/${name}.svg`
    };
    var library_default_default = library;

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.73PEGQ4K.js
    var icons = {
      check: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
      </svg>
    `,
      "chevron-down": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    `,
      "chevron-left": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    `,
      "chevron-right": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `,
      eye: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
      </svg>
    `,
      "eye-slash": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
      </svg>
    `,
      "grip-vertical": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    `,
      "person-fill": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    `,
      "star-fill": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    `,
      x: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `,
      "x-circle": `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `
    };
    var systemLibrary = {
      name: "system",
      resolver: (name) => {
        if (icons[name]) {
          return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
        } else {
          return "";
        }
      }
    };
    var library_system_default = systemLibrary;

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.L23EKU34.js
    var registry = [library_default_default, library_system_default];
    var watchedIcons = [];
    function watchIcon(icon) {
      watchedIcons.push(icon);
    }
    function unwatchIcon(icon) {
      watchedIcons = watchedIcons.filter((el) => el !== icon);
    }
    function getIconLibrary(name) {
      return registry.filter((lib) => lib.name === name)[0];
    }
    function registerIconLibrary(name, options) {
      unregisterIconLibrary(name);
      registry.push({
        name,
        resolver: options.resolver,
        mutator: options.mutator
      });
      watchedIcons.map((icon) => {
        if (icon.library === name) {
          icon.redraw();
        }
      });
    }
    function unregisterIconLibrary(name) {
      registry = registry.filter((lib) => lib.name !== name);
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IHGPZX35.js
    var __defProp2 = Object.defineProperty;
    var __defProps2 = Object.defineProperties;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
    var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
    var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues2 = (a4, b2) => {
      for (var prop in b2 || (b2 = {}))
        if (__hasOwnProp2.call(b2, prop))
          __defNormalProp2(a4, prop, b2[prop]);
      if (__getOwnPropSymbols2)
        for (var prop of __getOwnPropSymbols2(b2)) {
          if (__propIsEnum2.call(b2, prop))
            __defNormalProp2(a4, prop, b2[prop]);
        }
      return a4;
    };
    var __spreadProps2 = (a4, b2) => __defProps2(a4, __getOwnPropDescs2(b2));
    var __decorateClass2 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
      for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
        if (decorator = decorators[i5])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp2(target, key, result);
      return result;
    };

    // src/internal/icons.ts
    function registerIcons() {
      const icons2 = {
        search: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
        `,
        "caret-down-full": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>`,
        "arrow-right-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>`
      };
      const searchLibrary = {
        name: "medblocks",
        resolver: (name) => {
          if (icons2[name]) {
            return `data:image/svg+xml,${encodeURIComponent(icons2[name])}`;
          } else {
            return "";
          }
        }
      };
      registerIconLibrary("medblocks", searchLibrary);
    }

    // node_modules/lit-html/lib/dom.js
    var isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
    var removeNodes = (container, start2, end2 = null) => {
      while (start2 !== end2) {
        const n6 = start2.nextSibling;
        container.removeChild(start2);
        start2 = n6;
      }
    };

    // node_modules/lit-html/lib/template.js
    var marker = `{{lit-${String(Math.random()).slice(2)}}}`;
    var nodeMarker = `<!--${marker}-->`;
    var markerRegex = new RegExp(`${marker}|${nodeMarker}`);
    var boundAttributeSuffix = "$lit$";
    var Template = class {
      constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        const walker = document.createTreeWalker(element.content, 133, null, false);
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
          const node = walker.nextNode();
          if (node === null) {
            walker.currentNode = stack.pop();
            continue;
          }
          index++;
          if (node.nodeType === 1) {
            if (node.hasAttributes()) {
              const attributes = node.attributes;
              const { length: length2 } = attributes;
              let count = 0;
              for (let i5 = 0; i5 < length2; i5++) {
                if (endsWith(attributes[i5].name, boundAttributeSuffix)) {
                  count++;
                }
              }
              while (count-- > 0) {
                const stringForPart = strings[partIndex];
                const name = lastAttributeNameRegex.exec(stringForPart)[2];
                const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                const attributeValue = node.getAttribute(attributeLookupName);
                node.removeAttribute(attributeLookupName);
                const statics = attributeValue.split(markerRegex);
                this.parts.push({ type: "attribute", index, name, strings: statics });
                partIndex += statics.length - 1;
              }
            }
            if (node.tagName === "TEMPLATE") {
              stack.push(node);
              walker.currentNode = node.content;
            }
          } else if (node.nodeType === 3) {
            const data = node.data;
            if (data.indexOf(marker) >= 0) {
              const parent = node.parentNode;
              const strings2 = data.split(markerRegex);
              const lastIndex = strings2.length - 1;
              for (let i5 = 0; i5 < lastIndex; i5++) {
                let insert;
                let s6 = strings2[i5];
                if (s6 === "") {
                  insert = createMarker();
                } else {
                  const match = lastAttributeNameRegex.exec(s6);
                  if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                    s6 = s6.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                  }
                  insert = document.createTextNode(s6);
                }
                parent.insertBefore(insert, node);
                this.parts.push({ type: "node", index: ++index });
              }
              if (strings2[lastIndex] === "") {
                parent.insertBefore(createMarker(), node);
                nodesToRemove.push(node);
              } else {
                node.data = strings2[lastIndex];
              }
              partIndex += lastIndex;
            }
          } else if (node.nodeType === 8) {
            if (node.data === marker) {
              const parent = node.parentNode;
              if (node.previousSibling === null || index === lastPartIndex) {
                index++;
                parent.insertBefore(createMarker(), node);
              }
              lastPartIndex = index;
              this.parts.push({ type: "node", index });
              if (node.nextSibling === null) {
                node.data = "";
              } else {
                nodesToRemove.push(node);
                index--;
              }
              partIndex++;
            } else {
              let i5 = -1;
              while ((i5 = node.data.indexOf(marker, i5 + 1)) !== -1) {
                this.parts.push({ type: "node", index: -1 });
                partIndex++;
              }
            }
          }
        }
        for (const n6 of nodesToRemove) {
          n6.parentNode.removeChild(n6);
        }
      }
    };
    var endsWith = (str, suffix) => {
      const index = str.length - suffix.length;
      return index >= 0 && str.slice(index) === suffix;
    };
    var isTemplatePartActive = (part) => part.index !== -1;
    var createMarker = () => document.createComment("");
    var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

    // node_modules/lit-html/lib/modify-template.js
    var walkerNodeFilter = 133;
    function removeNodesFromTemplate(template, nodesToRemove) {
      const { element: { content }, parts: parts2 } = template;
      const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
      let partIndex = nextActiveIndexInTemplateParts(parts2);
      let part = parts2[partIndex];
      let nodeIndex = -1;
      let removeCount = 0;
      const nodesToRemoveInTemplate = [];
      let currentRemovingNode = null;
      while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        if (node.previousSibling === currentRemovingNode) {
          currentRemovingNode = null;
        }
        if (nodesToRemove.has(node)) {
          nodesToRemoveInTemplate.push(node);
          if (currentRemovingNode === null) {
            currentRemovingNode = node;
          }
        }
        if (currentRemovingNode !== null) {
          removeCount++;
        }
        while (part !== void 0 && part.index === nodeIndex) {
          part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
          partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
          part = parts2[partIndex];
        }
      }
      nodesToRemoveInTemplate.forEach((n6) => n6.parentNode.removeChild(n6));
    }
    var countNodes = (node) => {
      let count = node.nodeType === 11 ? 0 : 1;
      const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
      while (walker.nextNode()) {
        count++;
      }
      return count;
    };
    var nextActiveIndexInTemplateParts = (parts2, startIndex = -1) => {
      for (let i5 = startIndex + 1; i5 < parts2.length; i5++) {
        const part = parts2[i5];
        if (isTemplatePartActive(part)) {
          return i5;
        }
      }
      return -1;
    };
    function insertNodeIntoTemplate(template, node, refNode = null) {
      const { element: { content }, parts: parts2 } = template;
      if (refNode === null || refNode === void 0) {
        content.appendChild(node);
        return;
      }
      const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
      let partIndex = nextActiveIndexInTemplateParts(parts2);
      let insertCount = 0;
      let walkerIndex = -1;
      while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
          insertCount = countNodes(node);
          refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts2[partIndex].index === walkerIndex) {
          if (insertCount > 0) {
            while (partIndex !== -1) {
              parts2[partIndex].index += insertCount;
              partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
            }
            return;
          }
          partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
        }
      }
    }

    // node_modules/lit-html/lib/directive.js
    var directives = new WeakMap();
    var directive = (f3) => (...args) => {
      const d2 = f3(...args);
      directives.set(d2, true);
      return d2;
    };
    var isDirective = (o7) => {
      return typeof o7 === "function" && directives.has(o7);
    };

    // node_modules/lit-html/lib/part.js
    var noChange = {};
    var nothing = {};

    // node_modules/lit-html/lib/template-instance.js
    var TemplateInstance = class {
      constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
      }
      update(values) {
        let i5 = 0;
        for (const part of this.__parts) {
          if (part !== void 0) {
            part.setValue(values[i5]);
          }
          i5++;
        }
        for (const part of this.__parts) {
          if (part !== void 0) {
            part.commit();
          }
        }
      }
      _clone() {
        const fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        const stack = [];
        const parts2 = this.template.parts;
        const walker = document.createTreeWalker(fragment, 133, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        while (partIndex < parts2.length) {
          part = parts2[partIndex];
          if (!isTemplatePartActive(part)) {
            this.__parts.push(void 0);
            partIndex++;
            continue;
          }
          while (nodeIndex < part.index) {
            nodeIndex++;
            if (node.nodeName === "TEMPLATE") {
              stack.push(node);
              walker.currentNode = node.content;
            }
            if ((node = walker.nextNode()) === null) {
              walker.currentNode = stack.pop();
              node = walker.nextNode();
            }
          }
          if (part.type === "node") {
            const part2 = this.processor.handleTextExpression(this.options);
            part2.insertAfterNode(node.previousSibling);
            this.__parts.push(part2);
          } else {
            this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
          }
          partIndex++;
        }
        if (isCEPolyfill) {
          document.adoptNode(fragment);
          customElements.upgrade(fragment);
        }
        return fragment;
      }
    };

    // node_modules/lit-html/lib/template-result.js
    var policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (s6) => s6 });
    var commentMarker = ` ${marker} `;
    var TemplateResult = class {
      constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
      }
      getHTML() {
        const l6 = this.strings.length - 1;
        let html2 = "";
        let isCommentBinding = false;
        for (let i5 = 0; i5 < l6; i5++) {
          const s6 = this.strings[i5];
          const commentOpen = s6.lastIndexOf("<!--");
          isCommentBinding = (commentOpen > -1 || isCommentBinding) && s6.indexOf("-->", commentOpen + 1) === -1;
          const attributeMatch = lastAttributeNameRegex.exec(s6);
          if (attributeMatch === null) {
            html2 += s6 + (isCommentBinding ? commentMarker : nodeMarker);
          } else {
            html2 += s6.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
          }
        }
        html2 += this.strings[l6];
        return html2;
      }
      getTemplateElement() {
        const template = document.createElement("template");
        let value = this.getHTML();
        if (policy !== void 0) {
          value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
      }
    };

    // node_modules/lit-html/lib/parts.js
    var isPrimitive = (value) => {
      return value === null || !(typeof value === "object" || typeof value === "function");
    };
    var isIterable = (value) => {
      return Array.isArray(value) || !!(value && value[Symbol.iterator]);
    };
    var AttributeCommitter = class {
      constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i5 = 0; i5 < strings.length - 1; i5++) {
          this.parts[i5] = this._createPart();
        }
      }
      _createPart() {
        return new AttributePart(this);
      }
      _getValue() {
        const strings = this.strings;
        const l6 = strings.length - 1;
        const parts2 = this.parts;
        if (l6 === 1 && strings[0] === "" && strings[1] === "") {
          const v2 = parts2[0].value;
          if (typeof v2 === "symbol") {
            return String(v2);
          }
          if (typeof v2 === "string" || !isIterable(v2)) {
            return v2;
          }
        }
        let text = "";
        for (let i5 = 0; i5 < l6; i5++) {
          text += strings[i5];
          const part = parts2[i5];
          if (part !== void 0) {
            const v2 = part.value;
            if (isPrimitive(v2) || !isIterable(v2)) {
              text += typeof v2 === "string" ? v2 : String(v2);
            } else {
              for (const t4 of v2) {
                text += typeof t4 === "string" ? t4 : String(t4);
              }
            }
          }
        }
        text += strings[l6];
        return text;
      }
      commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element.setAttribute(this.name, this._getValue());
        }
      }
    };
    var AttributePart = class {
      constructor(committer) {
        this.value = void 0;
        this.committer = committer;
      }
      setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
          this.value = value;
          if (!isDirective(value)) {
            this.committer.dirty = true;
          }
        }
      }
      commit() {
        while (isDirective(this.value)) {
          const directive2 = this.value;
          this.value = noChange;
          directive2(this);
        }
        if (this.value === noChange) {
          return;
        }
        this.committer.commit();
      }
    };
    var NodePart = class {
      constructor(options) {
        this.value = void 0;
        this.__pendingValue = void 0;
        this.options = options;
      }
      appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
      }
      insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
      }
      appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());
        part.__insert(this.endNode = createMarker());
      }
      insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
      }
      setValue(value) {
        this.__pendingValue = value;
      }
      commit() {
        if (this.startNode.parentNode === null) {
          return;
        }
        while (isDirective(this.__pendingValue)) {
          const directive2 = this.__pendingValue;
          this.__pendingValue = noChange;
          directive2(this);
        }
        const value = this.__pendingValue;
        if (value === noChange) {
          return;
        }
        if (isPrimitive(value)) {
          if (value !== this.value) {
            this.__commitText(value);
          }
        } else if (value instanceof TemplateResult) {
          this.__commitTemplateResult(value);
        } else if (value instanceof Node) {
          this.__commitNode(value);
        } else if (isIterable(value)) {
          this.__commitIterable(value);
        } else if (value === nothing) {
          this.value = nothing;
          this.clear();
        } else {
          this.__commitText(value);
        }
      }
      __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
      __commitNode(value) {
        if (this.value === value) {
          return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
      }
      __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? "" : value;
        const valueAsString = typeof value === "string" ? value : String(value);
        if (node === this.endNode.previousSibling && node.nodeType === 3) {
          node.data = valueAsString;
        } else {
          this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
      }
      __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance && this.value.template === template) {
          this.value.update(value.values);
        } else {
          const instance = new TemplateInstance(template, value.processor, this.options);
          const fragment = instance._clone();
          instance.update(value.values);
          this.__commitNode(fragment);
          this.value = instance;
        }
      }
      __commitIterable(value) {
        if (!Array.isArray(this.value)) {
          this.value = [];
          this.clear();
        }
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
          itemPart = itemParts[partIndex];
          if (itemPart === void 0) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);
            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }
          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
        if (partIndex < itemParts.length) {
          itemParts.length = partIndex;
          this.clear(itemPart && itemPart.endNode);
        }
      }
      clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    };
    var BooleanAttributePart = class {
      constructor(element, name, strings) {
        this.value = void 0;
        this.__pendingValue = void 0;
        if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") {
          throw new Error("Boolean attributes can only contain a single expression");
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
      }
      setValue(value) {
        this.__pendingValue = value;
      }
      commit() {
        while (isDirective(this.__pendingValue)) {
          const directive2 = this.__pendingValue;
          this.__pendingValue = noChange;
          directive2(this);
        }
        if (this.__pendingValue === noChange) {
          return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
          if (value) {
            this.element.setAttribute(this.name, "");
          } else {
            this.element.removeAttribute(this.name);
          }
          this.value = value;
        }
        this.__pendingValue = noChange;
      }
    };
    var PropertyCommitter = class extends AttributeCommitter {
      constructor(element, name, strings) {
        super(element, name, strings);
        this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
      }
      _createPart() {
        return new PropertyPart(this);
      }
      _getValue() {
        if (this.single) {
          return this.parts[0].value;
        }
        return super._getValue();
      }
      commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element[this.name] = this._getValue();
        }
      }
    };
    var PropertyPart = class extends AttributePart {
    };
    var eventOptionsSupported = false;
    (() => {
      try {
        const options = {
          get capture() {
            eventOptionsSupported = true;
            return false;
          }
        };
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (_e) {
      }
    })();
    var EventPart = class {
      constructor(element, eventName, eventContext) {
        this.value = void 0;
        this.__pendingValue = void 0;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e5) => this.handleEvent(e5);
      }
      setValue(value) {
        this.__pendingValue = value;
      }
      commit() {
        while (isDirective(this.__pendingValue)) {
          const directive2 = this.__pendingValue;
          this.__pendingValue = noChange;
          directive2(this);
        }
        if (this.__pendingValue === noChange) {
          return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
          this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
          this.__options = getOptions(newListener);
          this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = noChange;
      }
      handleEvent(event2) {
        if (typeof this.value === "function") {
          this.value.call(this.eventContext || this.element, event2);
        } else {
          this.value.handleEvent(event2);
        }
      }
    };
    var getOptions = (o7) => o7 && (eventOptionsSupported ? { capture: o7.capture, passive: o7.passive, once: o7.once } : o7.capture);

    // node_modules/lit-html/lib/template-factory.js
    function templateFactory(result) {
      let templateCache = templateCaches.get(result.type);
      if (templateCache === void 0) {
        templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
      }
      let template = templateCache.stringsArray.get(result.strings);
      if (template !== void 0) {
        return template;
      }
      const key = result.strings.join(marker);
      template = templateCache.keyString.get(key);
      if (template === void 0) {
        template = new Template(result, result.getTemplateElement());
        templateCache.keyString.set(key, template);
      }
      templateCache.stringsArray.set(result.strings, template);
      return template;
    }
    var templateCaches = new Map();

    // node_modules/lit-html/lib/render.js
    var parts = new WeakMap();
    var render = (result, container, options) => {
      let part = parts.get(container);
      if (part === void 0) {
        removeNodes(container, container.firstChild);
        parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
        part.appendInto(container);
      }
      part.setValue(result);
      part.commit();
    };

    // node_modules/lit-html/lib/default-template-processor.js
    var DefaultTemplateProcessor = class {
      handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === ".") {
          const committer2 = new PropertyCommitter(element, name.slice(1), strings);
          return committer2.parts;
        }
        if (prefix === "@") {
          return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === "?") {
          return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        const committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
      }
      handleTextExpression(options) {
        return new NodePart(options);
      }
    };
    var defaultTemplateProcessor = new DefaultTemplateProcessor();

    // node_modules/lit-html/lit-html.js
    if (typeof window !== "undefined") {
      (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.4.1");
    }
    var html = (strings, ...values) => new TemplateResult(strings, values, "html", defaultTemplateProcessor);

    // node_modules/lit-html/lib/shady-render.js
    var getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
    var compatibleShadyCSSVersion = true;
    if (typeof window.ShadyCSS === "undefined") {
      compatibleShadyCSSVersion = false;
    } else if (typeof window.ShadyCSS.prepareTemplateDom === "undefined") {
      console.warn(`Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.`);
      compatibleShadyCSSVersion = false;
    }
    var shadyTemplateFactory = (scopeName) => (result) => {
      const cacheKey = getTemplateCacheKey(result.type, scopeName);
      let templateCache = templateCaches.get(cacheKey);
      if (templateCache === void 0) {
        templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
      }
      let template = templateCache.stringsArray.get(result.strings);
      if (template !== void 0) {
        return template;
      }
      const key = result.strings.join(marker);
      template = templateCache.keyString.get(key);
      if (template === void 0) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new Template(result, element);
        templateCache.keyString.set(key, template);
      }
      templateCache.stringsArray.set(result.strings, template);
      return template;
    };
    var TEMPLATE_TYPES = ["html", "svg"];
    var removeStylesFromLitTemplates = (scopeName) => {
      TEMPLATE_TYPES.forEach((type) => {
        const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
        if (templates !== void 0) {
          templates.keyString.forEach((template) => {
            const { element: { content } } = template;
            const styles = new Set();
            Array.from(content.querySelectorAll("style")).forEach((s6) => {
              styles.add(s6);
            });
            removeNodesFromTemplate(template, styles);
          });
        }
      });
    };
    var shadyRenderSet = new Set();
    var prepareTemplateStyles = (scopeName, renderedDOM, template) => {
      shadyRenderSet.add(scopeName);
      const templateElement = !!template ? template.element : document.createElement("template");
      const styles = renderedDOM.querySelectorAll("style");
      const { length } = styles;
      if (length === 0) {
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
      }
      const condensedStyle = document.createElement("style");
      for (let i5 = 0; i5 < length; i5++) {
        const style3 = styles[i5];
        style3.parentNode.removeChild(style3);
        condensedStyle.textContent += style3.textContent;
      }
      removeStylesFromLitTemplates(scopeName);
      const content = templateElement.content;
      if (!!template) {
        insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
      } else {
        content.insertBefore(condensedStyle, content.firstChild);
      }
      window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
      const style2 = content.querySelector("style");
      if (window.ShadyCSS.nativeShadow && style2 !== null) {
        renderedDOM.insertBefore(style2.cloneNode(true), renderedDOM.firstChild);
      } else if (!!template) {
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        removeNodesFromTemplate(template, removes);
      }
    };
    var render2 = (result, container, options) => {
      if (!options || typeof options !== "object" || !options.scopeName) {
        throw new Error("The `scopeName` option is required.");
      }
      const scopeName = options.scopeName;
      const hasRendered = parts.has(container);
      const needsScoping = compatibleShadyCSSVersion && container.nodeType === 11 && !!container.host;
      const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
      const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
      render(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
      if (firstScopeRender) {
        const part = parts.get(renderContainer);
        parts.delete(renderContainer);
        const template = part.value instanceof TemplateInstance ? part.value.template : void 0;
        prepareTemplateStyles(scopeName, renderContainer, template);
        removeNodes(container, container.firstChild);
        container.appendChild(renderContainer);
        parts.set(container, part);
      }
      if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
      }
    };

    // node_modules/lit-element/lib/updating-element.js
    var _a;
    window.JSCompiler_renameProperty = (prop, _obj) => prop;
    var defaultConverter = {
      toAttribute(value, type) {
        switch (type) {
          case Boolean:
            return value ? "" : null;
          case Object:
          case Array:
            return value == null ? value : JSON.stringify(value);
        }
        return value;
      },
      fromAttribute(value, type) {
        switch (type) {
          case Boolean:
            return value !== null;
          case Number:
            return value === null ? null : Number(value);
          case Object:
          case Array:
            return JSON.parse(value);
        }
        return value;
      }
    };
    var notEqual = (value, old) => {
      return old !== value && (old === old || value === value);
    };
    var defaultPropertyDeclaration = {
      attribute: true,
      type: String,
      converter: defaultConverter,
      reflect: false,
      hasChanged: notEqual
    };
    var STATE_HAS_UPDATED = 1;
    var STATE_UPDATE_REQUESTED = 1 << 2;
    var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
    var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
    var finalized = "finalized";
    var UpdatingElement = class extends HTMLElement {
      constructor() {
        super();
        this.initialize();
      }
      static get observedAttributes() {
        this.finalize();
        const attributes = [];
        this._classProperties.forEach((v2, p2) => {
          const attr = this._attributeNameForProperty(p2, v2);
          if (attr !== void 0) {
            this._attributeToPropertyMap.set(attr, p2);
            attributes.push(attr);
          }
        });
        return attributes;
      }
      static _ensureClassProperties() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
          this._classProperties = new Map();
          const superProperties = Object.getPrototypeOf(this)._classProperties;
          if (superProperties !== void 0) {
            superProperties.forEach((v2, k2) => this._classProperties.set(k2, v2));
          }
        }
      }
      static createProperty(name, options = defaultPropertyDeclaration) {
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
          return;
        }
        const key = typeof name === "symbol" ? Symbol() : `__${name}`;
        const descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== void 0) {
          Object.defineProperty(this.prototype, name, descriptor);
        }
      }
      static getPropertyDescriptor(name, key, options) {
        return {
          get() {
            return this[key];
          },
          set(value) {
            const oldValue = this[name];
            this[key] = value;
            this.requestUpdateInternal(name, oldValue, options);
          },
          configurable: true,
          enumerable: true
        };
      }
      static getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
      }
      static finalize() {
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
          superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        this._attributeToPropertyMap = new Map();
        if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
          const props = this.properties;
          const propKeys = [
            ...Object.getOwnPropertyNames(props),
            ...typeof Object.getOwnPropertySymbols === "function" ? Object.getOwnPropertySymbols(props) : []
          ];
          for (const p2 of propKeys) {
            this.createProperty(p2, props[p2]);
          }
        }
      }
      static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : void 0;
      }
      static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
      }
      static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = typeof converter === "function" ? converter : converter.fromAttribute;
        return fromAttribute ? fromAttribute(value, type) : value;
      }
      static _propertyValueToAttribute(value, options) {
        if (options.reflect === void 0) {
          return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
        return toAttribute(value, type);
      }
      initialize() {
        this._updateState = 0;
        this._updatePromise = new Promise((res) => this._enableUpdatingResolver = res);
        this._changedProperties = new Map();
        this._saveInstanceProperties();
        this.requestUpdateInternal();
      }
      _saveInstanceProperties() {
        this.constructor._classProperties.forEach((_v, p2) => {
          if (this.hasOwnProperty(p2)) {
            const value = this[p2];
            delete this[p2];
            if (!this._instanceProperties) {
              this._instanceProperties = new Map();
            }
            this._instanceProperties.set(p2, value);
          }
        });
      }
      _applyInstanceProperties() {
        this._instanceProperties.forEach((v2, p2) => this[p2] = v2);
        this._instanceProperties = void 0;
      }
      connectedCallback() {
        this.enableUpdating();
      }
      enableUpdating() {
        if (this._enableUpdatingResolver !== void 0) {
          this._enableUpdatingResolver();
          this._enableUpdatingResolver = void 0;
        }
      }
      disconnectedCallback() {
      }
      attributeChangedCallback(name, old, value) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
      }
      _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== void 0) {
          const attrValue = ctor._propertyValueToAttribute(value, options);
          if (attrValue === void 0) {
            return;
          }
          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
          if (attrValue == null) {
            this.removeAttribute(attr);
          } else {
            this.setAttribute(attr, attrValue);
          }
          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
      }
      _attributeToProperty(name, value) {
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
          return;
        }
        const ctor = this.constructor;
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== void 0) {
          const options = ctor.getPropertyOptions(propName);
          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
          this[propName] = ctor._propertyValueFromAttribute(value, options);
          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
      }
      requestUpdateInternal(name, oldValue, options) {
        let shouldRequestUpdate = true;
        if (name !== void 0) {
          const ctor = this.constructor;
          options = options || ctor.getPropertyOptions(name);
          if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
            if (!this._changedProperties.has(name)) {
              this._changedProperties.set(name, oldValue);
            }
            if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
              if (this._reflectingProperties === void 0) {
                this._reflectingProperties = new Map();
              }
              this._reflectingProperties.set(name, options);
            }
          } else {
            shouldRequestUpdate = false;
          }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
          this._updatePromise = this._enqueueUpdate();
        }
      }
      requestUpdate(name, oldValue) {
        this.requestUpdateInternal(name, oldValue);
        return this.updateComplete;
      }
      async _enqueueUpdate() {
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        try {
          await this._updatePromise;
        } catch (e5) {
        }
        const result = this.performUpdate();
        if (result != null) {
          await result;
        }
        return !this._hasRequestedUpdate;
      }
      get _hasRequestedUpdate() {
        return this._updateState & STATE_UPDATE_REQUESTED;
      }
      get hasUpdated() {
        return this._updateState & STATE_HAS_UPDATED;
      }
      performUpdate() {
        if (!this._hasRequestedUpdate) {
          return;
        }
        if (this._instanceProperties) {
          this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
          shouldUpdate = this.shouldUpdate(changedProperties);
          if (shouldUpdate) {
            this.update(changedProperties);
          } else {
            this._markUpdated();
          }
        } catch (e5) {
          shouldUpdate = false;
          this._markUpdated();
          throw e5;
        }
        if (shouldUpdate) {
          if (!(this._updateState & STATE_HAS_UPDATED)) {
            this._updateState = this._updateState | STATE_HAS_UPDATED;
            this.firstUpdated(changedProperties);
          }
          this.updated(changedProperties);
        }
      }
      _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
      }
      get updateComplete() {
        return this._getUpdateComplete();
      }
      _getUpdateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._updatePromise;
      }
      shouldUpdate(_changedProperties) {
        return true;
      }
      update(_changedProperties) {
        if (this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0) {
          this._reflectingProperties.forEach((v2, k2) => this._propertyToAttribute(k2, this[k2], v2));
          this._reflectingProperties = void 0;
        }
        this._markUpdated();
      }
      updated(_changedProperties) {
      }
      firstUpdated(_changedProperties) {
      }
    };
    _a = finalized;
    UpdatingElement[_a] = true;

    // node_modules/lit-element/lib/decorators.js
    var legacyCustomElement = (tagName, clazz) => {
      window.customElements.define(tagName, clazz);
      return clazz;
    };
    var standardCustomElement = (tagName, descriptor) => {
      const { kind, elements } = descriptor;
      return {
        kind,
        elements,
        finisher(clazz) {
          window.customElements.define(tagName, clazz);
        }
      };
    };
    var customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
    var standardProperty = (options, element) => {
      if (element.kind === "method" && element.descriptor && !("value" in element.descriptor)) {
        return Object.assign(Object.assign({}, element), { finisher(clazz) {
          clazz.createProperty(element.key, options);
        } });
      } else {
        return {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          initializer() {
            if (typeof element.initializer === "function") {
              this[element.key] = element.initializer.call(this);
            }
          },
          finisher(clazz) {
            clazz.createProperty(element.key, options);
          }
        };
      }
    };
    var legacyProperty = (options, proto, name) => {
      proto.constructor.createProperty(name, options);
    };
    function property(options) {
      return (protoOrDescriptor, name) => name !== void 0 ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
    }
    function internalProperty(options) {
      return property({ attribute: false, hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged });
    }
    var state = (options) => internalProperty(options);
    var ElementProto = Element.prototype;
    var legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;

    // node_modules/lit-element/lib/css-tag.js
    var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    var constructionToken = Symbol();
    var CSSResult = class {
      constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
          throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        }
        this.cssText = cssText;
      }
      get styleSheet() {
        if (this._styleSheet === void 0) {
          if (supportsAdoptingStyleSheets) {
            this._styleSheet = new CSSStyleSheet();
            this._styleSheet.replaceSync(this.cssText);
          } else {
            this._styleSheet = null;
          }
        }
        return this._styleSheet;
      }
      toString() {
        return this.cssText;
      }
    };
    var unsafeCSS = (value) => {
      return new CSSResult(String(value), constructionToken);
    };
    var textFromCSSResult = (value) => {
      if (value instanceof CSSResult) {
        return value.cssText;
      } else if (typeof value === "number") {
        return value;
      } else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
              take care to ensure page security.`);
      }
    };
    var css = (strings, ...values) => {
      const cssText = values.reduce((acc, v2, idx) => acc + textFromCSSResult(v2) + strings[idx + 1], strings[0]);
      return new CSSResult(cssText, constructionToken);
    };

    // node_modules/lit-element/lit-element.js
    (window["litElementVersions"] || (window["litElementVersions"] = [])).push("2.5.1");
    var renderNotImplemented = {};
    var LitElement = class extends UpdatingElement {
      static getStyles() {
        return this.styles;
      }
      static _getUniqueStyles() {
        if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) {
          return;
        }
        const userStyles = this.getStyles();
        if (Array.isArray(userStyles)) {
          const addStyles = (styles2, set2) => styles2.reduceRight((set3, s6) => Array.isArray(s6) ? addStyles(s6, set3) : (set3.add(s6), set3), set2);
          const set = addStyles(userStyles, new Set());
          const styles = [];
          set.forEach((v2) => styles.unshift(v2));
          this._styles = styles;
        } else {
          this._styles = userStyles === void 0 ? [] : [userStyles];
        }
        this._styles = this._styles.map((s6) => {
          if (s6 instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
            const cssText = Array.prototype.slice.call(s6.cssRules).reduce((css2, rule) => css2 + rule.cssText, "");
            return unsafeCSS(cssText);
          }
          return s6;
        });
      }
      initialize() {
        super.initialize();
        this.constructor._getUniqueStyles();
        this.renderRoot = this.createRenderRoot();
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
          this.adoptStyles();
        }
      }
      createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
      }
      adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
          return;
        }
        if (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow) {
          window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s6) => s6.cssText), this.localName);
        } else if (supportsAdoptingStyleSheets) {
          this.renderRoot.adoptedStyleSheets = styles.map((s6) => s6 instanceof CSSStyleSheet ? s6 : s6.styleSheet);
        } else {
          this._needsShimAdoptedStyleSheets = true;
        }
      }
      connectedCallback() {
        super.connectedCallback();
        if (this.hasUpdated && window.ShadyCSS !== void 0) {
          window.ShadyCSS.styleElement(this);
        }
      }
      update(changedProperties) {
        const templateResult = this.render();
        super.update(changedProperties);
        if (templateResult !== renderNotImplemented) {
          this.constructor.render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        if (this._needsShimAdoptedStyleSheets) {
          this._needsShimAdoptedStyleSheets = false;
          this.constructor._styles.forEach((s6) => {
            const style2 = document.createElement("style");
            style2.textContent = s6.cssText;
            this.renderRoot.appendChild(style2);
          });
        }
      }
      render() {
        return renderNotImplemented;
      }
    };
    LitElement["finalized"] = true;
    LitElement.render = render2;
    LitElement.shadowRootOptions = { mode: "open" };

    // src/internal/decorators.ts
    function event(eventName) {
      function legacyEvent(descriptor, protoOrDescriptor, name) {
        Object.defineProperty(protoOrDescriptor, name, descriptor);
      }
      function standardEvent(descriptor, element) {
        return {
          kind: "method",
          placement: "prototype",
          key: element.key,
          descriptor
        };
      }
      return (protoOrDescriptor, name) => {
        const descriptor = {
          get() {
            return new EventEmitter(this, eventName || (name !== void 0 ? name : protoOrDescriptor.key));
          },
          enumerable: true,
          configurable: true
        };
        return name !== void 0 ? legacyEvent(descriptor, protoOrDescriptor, name) : standardEvent(descriptor, protoOrDescriptor);
      };
    }
    var EventEmitter = class {
      constructor(target, eventName) {
        this.target = target;
        this.eventName = eventName;
      }
      emit(eventOptions) {
        const event2 = new CustomEvent(this.eventName, Object.assign({
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {}
        }, eventOptions));
        this.target.dispatchEvent(event2);
        return event2;
      }
    };
    function watch(propName) {
      return (protoOrDescriptor, name) => {
        const { firstUpdated, update } = protoOrDescriptor;
        protoOrDescriptor.firstUpdated = function(changedProps) {
          firstUpdated.call(this, changedProps);
          this.__didFirstUpdate = true;
        };
        protoOrDescriptor.update = function(changedProps) {
          if (this.__didFirstUpdate && changedProps.has(propName)) {
            const oldValue = changedProps.get(propName);
            const newValue = this[propName];
            if (oldValue !== newValue) {
              this[name].call(this, oldValue, newValue);
            }
          }
          update.call(this, changedProps);
        };
      };
    }

    // src/medblocks/form/utils.ts
    var flatten = function(isArray, wrapped) {
      return function(table) {
        return reduce("", {}, table);
      };
      function reduce(path, accumulator, table) {
        if (isArray(table)) {
          var length = table.length;
          if (length) {
            var index = 0;
            while (index < length) {
              var property2 = path + "[" + index + "]", item = table[index++];
              if (wrapped(item) !== item)
                accumulator[property2] = item;
              else
                reduce(property2, accumulator, item);
            }
          } else
            accumulator[path] = table;
        } else {
          var empty = true;
          if (path) {
            for (var property2 in table) {
              var item = table[property2], property2 = path + "." + property2, empty = false;
              if (wrapped(item) !== item)
                accumulator[property2] = item;
              else
                reduce(property2, accumulator, item);
            }
          } else {
            for (var property2 in table) {
              var item = table[property2], empty = false;
              if (wrapped(item) !== item)
                accumulator[property2] = item;
              else
                reduce(property2, accumulator, item);
            }
          }
          if (empty)
            accumulator[path] = table;
        }
        return accumulator;
      }
    }(Array.isArray, Object);
    function unflatten(table) {
      var result = {};
      for (var path in table) {
        var cursor = result, length = path.length, property2 = "", index = 0;
        while (index < length) {
          var char = path.charAt(index);
          if (char === "[") {
            var start2 = index + 1, end2 = path.indexOf("]", start2), cursor = cursor[property2] = cursor[property2] || [], property2 = path.slice(start2, end2), index = end2 + 1;
          } else {
            var cursor = cursor[property2] = cursor[property2] || {}, start2 = char === "." ? index + 1 : index, bracket = path.indexOf("[", start2), dot = path.indexOf(".", start2);
            if (bracket < 0 && dot < 0)
              var end2 = index = length;
            else if (bracket < 0)
              var end2 = index = dot;
            else if (dot < 0)
              var end2 = index = bracket;
            else
              var end2 = index = bracket < dot ? bracket : dot;
            var property2 = path.slice(start2, end2);
          }
        }
        cursor[property2] = table[path];
      }
      return result[""];
    }

    // src/medblocks/form/plugins/openEHRFlat.ts
    function multipleSelectArray(value, path, flat) {
      value.forEach((val, i5) => {
        if (typeof val === "object") {
          Object.keys(val).forEach((item) => {
            flat[`${path}:${i5}|${item}`] = val[item];
          });
        } else {
          flat[`${path}:${i5}`] = val;
        }
      });
    }
    function toFlat(data) {
      const flat = {};
      Object.keys(data).forEach((path) => {
        const value = data[path];
        if (typeof value === "object") {
          if (Array.isArray(value)) {
            multipleSelectArray(value, path, flat);
          } else {
            Object.keys(value).forEach((frag) => {
              if (frag !== "_root") {
                flat[`${path}|${frag}`] = value[frag];
              } else {
                flat[path] = value[frag];
              }
            });
          }
        } else {
          flat[path] = value;
        }
      });
      return flat;
    }
    function fromFlat(flat) {
      let data = {};
      Object.keys(flat).map((path) => {
        const value = flat[path];
        const [subpath, frag] = path.split("|");
        if (frag) {
          if (typeof data[subpath] !== "object") {
            data[subpath] = { "_root": data[subpath] };
          }
          data[subpath] = __spreadProps(__spreadValues({}, data[subpath]), { [frag]: value });
        } else {
          if (data[subpath]) {
            data[subpath] = __spreadProps(__spreadValues({}, data[subpath]), { "_root": value });
          } else {
            data[subpath] = value;
          }
        }
      });
      return data;
    }
    function formatPath(path) {
      return path.replace(/\//g, ".").replace(/\|/g, ".").replace(/:(\d)/g, (_2, number) => `[${number}]`);
    }
    function formatFlatComposition(flat) {
      let newComposition = {};
      Object.entries(flat).forEach(([path, value]) => {
        const formattedPath = formatPath(path);
        newComposition[formattedPath] = value;
      });
      return newComposition;
    }
    function unflattenComposition(flat, path) {
      if (!path) {
        return unflatten(formatFlatComposition(flat));
      }
      let newObject = {};
      const paths = Object.keys(flat).filter((p2) => p2.includes(path));
      paths.forEach((p2) => {
        const newPath = p2.replace(path, "");
        newObject[newPath] = flat[p2];
      });
      return unflatten(formatFlatComposition(newObject));
    }
    function toInsertContext(path, nonNullPaths) {
      const segments = path.split("/");
      if (segments.length <= 2) {
        return true;
      }
      let previousPath;
      previousPath = segments.slice(0, -1).join("/");
      const previousSegment = segments[segments.length - 2];
      if (previousSegment === "context") {
        return true;
      }
      if (previousSegment === "ism_transition") {
        previousPath = segments.slice(0, -2).join("/");
      }
      if (nonNullPaths.some((p2) => p2.startsWith(previousPath))) {
        return true;
      }
      return false;
    }
    var openEHRFlatPlugin = {
      parse(mbElements, data) {
        const parsedData = fromFlat(data);
        const mbElementsWithMultiple = Object.keys(mbElements).filter((path) => {
          const element = mbElements[path];
          return element.multiple;
        });
        let pathWithMultiple = [];
        let dataWithMultiple = {};
        mbElementsWithMultiple.forEach((basePath2) => {
          const elementsWithBasePath = Object.keys(parsedData).filter((path) => path.startsWith(basePath2));
          const arrayOfValues = elementsWithBasePath.map((path) => parsedData[path]);
          dataWithMultiple = __spreadProps(__spreadValues({}, dataWithMultiple), { [basePath2]: arrayOfValues });
          pathWithMultiple = [...pathWithMultiple, ...elementsWithBasePath];
        });
        pathWithMultiple.forEach((path) => {
          delete parsedData[path];
        });
        return __spreadValues(__spreadValues({}, parsedData), dataWithMultiple);
      },
      serialize(mbElements) {
        let data = {};
        Object.entries(mbElements).map(([path, node]) => {
          data[path] = node.data;
        });
        return JSON.parse(JSON.stringify(toFlat(data)));
      },
      getContext(path, ctx = {}, nonNullPaths) {
        if (!toInsertContext(path, nonNullPaths)) {
          return;
        }
        let parts2 = path.split("/");
        const contextId = parts2[parts2.length - 1];
        if (ctx[contextId] != null) {
          return ctx[contextId];
        }
        switch (contextId) {
          case "start_time":
          case "time":
            return ctx.time || new Date().toISOString();
          case "category":
            return {
              code: "433",
              value: "event",
              terminology: "openehr"
            };
          case "setting":
            return {
              code: "238",
              value: "other care",
              terminology: "openehr"
            };
          case "language":
            return {
              code: ctx.language || "en",
              terminology: "ISO_639-1"
            };
          case "territory":
            return {
              code: ctx.territory || "IN",
              terminology: "ISO_3166-1"
            };
          case "encoding":
            return {
              code: "UTF-8",
              terminology: "IANA_character-sets"
            };
          case "composer":
            if (ctx.composer_name) {
              return {
                name: ctx.composer_name
              };
            } else {
              return {
                name: "Medblocks UI"
              };
            }
          default:
            return;
        }
      }
    };

    // src/medblocks/form/form.ts
    var MedblockForm = class extends LitElement {
      constructor() {
        super(...arguments);
        this.overwritectx = false;
        this.novalidate = false;
        this.plugin = openEHRFlatPlugin;
        this.mbElements = {};
        this.export = this.serialize.bind(this);
      }
      validate() {
        if (this.novalidate) {
          return true;
        }
        const report = Object.values(this.mbElements).map((el) => {
          return el.reportValidity();
        });
        return report.every((a4) => a4 === true);
      }
      parse(data) {
        return this.plugin.parse(this.mbElements, data);
      }
      serialize(mbElements = this.mbElements) {
        return this.plugin.serialize(mbElements);
      }
      import(data) {
        this.data = this.parse(data);
      }
      getStructured(flat, path) {
        return unflattenComposition(flat, path);
      }
      async handleSubmit() {
        if (this.validate()) {
          this.insertContext();
          await 0;
          const data = this.serialize();
          console.log(data);
          this.submit.emit({ detail: data, cancelable: true });
        }
      }
      insertContext() {
        const nonNullPaths = Object.keys(this.mbElements).filter((k2) => this.mbElements[k2].data != null && this.mbElements[k2].data != (Array.isArray(this.mbElements[k2].data) && this.mbElements[k2].data.length > 0));
        Object.values(this.mbElements).filter((element) => !!element.autocontext).forEach((element) => {
          var _a2;
          const path = element.path;
          const contextData = this.overwritectx ? this.plugin.getContext(path, this.ctx, nonNullPaths) : (_a2 = element.data) != null ? _a2 : this.plugin.getContext(path, this.ctx, nonNullPaths);
          element.data = contextData;
        });
      }
      get submitButton() {
        return this.querySelector("mb-submit");
      }
      get data() {
        let newValue = {};
        Object.entries(this.mbElements).map(([path, node]) => {
          newValue[path] = node.data;
        });
        return newValue;
      }
      set data(data) {
        const mbElementPaths = Object.keys(this.mbElements);
        const dataPaths = Object.keys(data);
        mbElementPaths.forEach((path) => {
          let element = this.mbElements[path];
          const value = data[path];
          element.data = value;
        });
        const inDataButNotElements = dataPaths.filter((path) => !mbElementPaths.includes(path));
        if (inDataButNotElements.length > 0) {
          console.warn(`These paths are not present in the current form, but were set: ${inDataButNotElements.join(", ")}.
  Try the "parse" method before setting the data on the form.`);
        }
      }
      handleInput(e5) {
        e5.stopPropagation();
        this.input.emit();
      }
      handleSlotChange() {
        this.input.emit();
      }
      handleChildConnect(e5) {
        const path = e5.detail;
        this.mbElements[path] = e5.target;
        this.input.emit();
      }
      handleChildPathChange(e5) {
        const detail = e5.detail;
        const element = this.mbElements[detail.oldPath];
        this.removeMbElement(detail.oldPath);
        this.mbElements[detail.newPath] = element;
        this.input.emit();
      }
      removeMbElement(path) {
        const _a2 = this.mbElements, { [path]: _2 } = _a2, rest = __objRest(_a2, [__restKey(path)]);
        this.mbElements = rest;
      }
      handleDependency(e5) {
        const dependencies = {
          hermes: this.hermes
        };
        e5.detail.value = dependencies[e5.detail.key];
      }
      async connectedCallback() {
        super.connectedCallback();
        this.observer = new MutationObserver((mutationList, _2) => {
          let updated = false;
          mutationList.forEach((record) => {
            if (record.removedNodes.length > 0) {
              record.removedNodes.forEach((node) => {
                var _a2;
                if (node.isMbElement) {
                  const _b = this.mbElements, { [_a2 = node.path]: _3 } = _b, rest = __objRest(_b, [__restKey(_a2)]);
                  this.mbElements = rest;
                  updated = true;
                } else {
                  if (node.nodeType === node.ELEMENT_NODE) {
                    const allNodes = node.querySelectorAll("*");
                    allNodes.forEach((node2) => {
                      var _a3;
                      if (node2.isMbElement) {
                        const _b2 = this.mbElements, { [_a3 = node2.path]: _3 } = _b2, rest = __objRest(_b2, [__restKey(_a3)]);
                        this.mbElements = rest;
                        updated = true;
                      }
                    });
                  }
                }
              });
            }
            if (updated) {
              this.input.emit();
            }
          });
        });
        this.observer.observe(this, { childList: true, subtree: true, attributes: false });
        this.addEventListener("mb-connect", this.handleChildConnect);
        this.addEventListener("mb-dependency", this.handleDependency);
        this.addEventListener("mb-path-change", this.handleChildPathChange);
        this.load.emit();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("mb-connect", this.handleChildConnect);
        this.removeEventListener("mb-dependency", this.handleDependency);
        this.removeEventListener("mb-path-change", this.handleChildPathChange);
        this.observer.disconnect();
      }
      render() {
        return html`<slot @slotchange=${this.handleSlotChange} @mb-input=${this.handleInput} @mb-trigger-submit=${this.handleSubmit}></slot>`;
      }
    };
    MedblockForm.styles = css`
      :host {
        display: block;
      }
    `;
    __decorateClass([
      property({ type: Object })
    ], MedblockForm.prototype, "ctx", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MedblockForm.prototype, "overwritectx", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MedblockForm.prototype, "novalidate", 2);
    __decorateClass([
      event("mb-input")
    ], MedblockForm.prototype, "input", 2);
    __decorateClass([
      event("mb-load")
    ], MedblockForm.prototype, "load", 2);
    __decorateClass([
      property({ type: Object })
    ], MedblockForm.prototype, "plugin", 2);
    __decorateClass([
      property({ type: Object })
    ], MedblockForm.prototype, "hermes", 2);
    __decorateClass([
      state()
    ], MedblockForm.prototype, "mbElements", 2);
    __decorateClass([
      event("mb-submit")
    ], MedblockForm.prototype, "submit", 2);
    __decorateClass([
      state()
    ], MedblockForm.prototype, "observer", 2);
    MedblockForm = __decorateClass([
      customElement("mb-form")
    ], MedblockForm);

    // src/medblocks/form/plugins/fhir.ts
    var serialize = (mbElement) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      if (mbElement.datatype === "CodableConcept") {
        const codable = mbElement;
        if ((_a2 = codable.data) == null ? void 0 : _a2.code) {
          return {
            text: (_b = codable.data) == null ? void 0 : _b.value,
            coding: [
              {
                system: (_c = codable.data) == null ? void 0 : _c.terminology,
                code: (_d = codable.data) == null ? void 0 : _d.code,
                display: (_e = codable.data) == null ? void 0 : _e.value
              }
            ]
          };
        }
        return;
      } else if (mbElement.datatype === "code") {
        const code = mbElement;
        if ((_f = code.data) == null ? void 0 : _f.code) {
          return (_g = code.data) == null ? void 0 : _g.code;
        }
        return;
      }
      return mbElement.data;
    };
    var deserialize = (mbElement, data) => {
      var _a2, _b, _c;
      if (mbElement.datatype === "CodableConcept") {
        const terminology = (_a2 = data == null ? void 0 : data.coding) == null ? void 0 : _a2[0].system;
        const code = (_b = data == null ? void 0 : data.coding) == null ? void 0 : _b[0].code;
        const value = (_c = data == null ? void 0 : data.coding) == null ? void 0 : _c[0].display;
        if (terminology || code || value) {
          return {
            terminology,
            code,
            value
          };
        }
        return;
      } else if (mbElement.datatype === "code") {
        const el = mbElement;
        const code = data;
        const terminology = el.terminology;
        if (terminology || code) {
          return {
            terminology,
            code
          };
        }
        return;
      }
      return data;
    };
    var isEmpty = (value) => {
      if (value == null) {
        return true;
      }
      if (value && (value == null ? void 0 : value.constructor) === Object && Object.keys(value).length === 0) {
        return true;
      }
      return false;
    };
    var FHIRPlugin = {
      serialize(mbElements) {
        let transformed = {};
        Object.keys(mbElements).forEach((path) => {
          const value = mbElements[path];
          if (!isEmpty(value.data)) {
            transformed[path] = serialize(value);
          }
        });
        const filtered = JSON.parse(JSON.stringify(transformed));
        return unflatten(filtered);
      },
      parse(mbElements, data) {
        const flat = flatten(data);
        let newObj = {};
        Object.keys(mbElements).forEach((path) => {
          const value = flat[path];
          if (value) {
            newObj[path] = deserialize(mbElements[path], value);
          } else {
            const includesPath = Object.keys(flat).filter((p2) => p2.startsWith(path));
            let simplifiedObject = {};
            includesPath.forEach((p2) => {
              let simplifiedPath = p2.replace(path, "");
              if (simplifiedPath.startsWith(".")) {
                simplifiedPath = simplifiedPath.replace(".", "");
              }
              simplifiedObject[simplifiedPath] = flat[p2];
            });
            const simplifiedUnflattened = unflatten(simplifiedObject);
            newObj[path] = deserialize(mbElements[path], simplifiedUnflattened);
          }
        });
        return newObj;
      },
      getContext(path, ctx) {
        console.log({ path, ctx });
      }
    };

    // src/medblocks/form/fhirForm.ts
    var FHIRForm = class extends MedblockForm {
      constructor() {
        super(...arguments);
        this.plugin = FHIRPlugin;
      }
    };
    FHIRForm = __decorateClass([
      customElement("mb-fhir-form")
    ], FHIRForm);

    // node_modules/lit-html/directives/until.js
    var _state = new WeakMap();
    var _infinity = 2147483647;
    var until = directive((...args) => (part) => {
      let state2 = _state.get(part);
      if (state2 === void 0) {
        state2 = {
          lastRenderedIndex: _infinity,
          values: []
        };
        _state.set(part, state2);
      }
      const previousValues2 = state2.values;
      let previousLength = previousValues2.length;
      state2.values = args;
      for (let i5 = 0; i5 < args.length; i5++) {
        if (i5 > state2.lastRenderedIndex) {
          break;
        }
        const value = args[i5];
        if (isPrimitive(value) || typeof value.then !== "function") {
          part.setValue(value);
          state2.lastRenderedIndex = i5;
          break;
        }
        if (i5 < previousLength && value === previousValues2[i5]) {
          continue;
        }
        state2.lastRenderedIndex = _infinity;
        previousLength = 0;
        Promise.resolve(value).then((resolvedValue) => {
          const index = state2.values.indexOf(value);
          if (index > -1 && index < state2.lastRenderedIndex) {
            state2.lastRenderedIndex = index;
            part.setValue(resolvedValue);
            part.commit();
          }
        });
      }
    });

    // node_modules/lit-html/directives/class-map.js
    var ClassList = class {
      constructor(element) {
        this.classes = new Set();
        this.changed = false;
        this.element = element;
        const classList = (element.getAttribute("class") || "").split(/\s+/);
        for (const cls of classList) {
          this.classes.add(cls);
        }
      }
      add(cls) {
        this.classes.add(cls);
        this.changed = true;
      }
      remove(cls) {
        this.classes.delete(cls);
        this.changed = true;
      }
      commit() {
        if (this.changed) {
          let classString = "";
          this.classes.forEach((cls) => classString += cls + " ");
          this.element.setAttribute("class", classString);
        }
      }
    };
    var previousClassesCache = new WeakMap();
    var classMap = directive((classInfo) => (part) => {
      if (!(part instanceof AttributePart) || part instanceof PropertyPart || part.committer.name !== "class" || part.committer.parts.length > 1) {
        throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
      }
      const { committer } = part;
      const { element } = committer;
      let previousClasses = previousClassesCache.get(part);
      if (previousClasses === void 0) {
        element.setAttribute("class", committer.strings.join(" "));
        previousClassesCache.set(part, previousClasses = new Set());
      }
      const classList = element.classList || new ClassList(element);
      previousClasses.forEach((name) => {
        if (!(name in classInfo)) {
          classList.remove(name);
          previousClasses.delete(name);
        }
      });
      for (const name in classInfo) {
        const value = classInfo[name];
        if (value != previousClasses.has(name)) {
          if (value) {
            classList.add(name);
            previousClasses.add(name);
          } else {
            classList.remove(name);
            previousClasses.delete(name);
          }
        }
      }
      if (typeof classList.commit === "function") {
        classList.commit();
      }
    });

    // node_modules/lit-html/directives/if-defined.js
    var previousValues = new WeakMap();
    var ifDefined = directive((value) => (part) => {
      const previousValue = previousValues.get(part);
      if (value === void 0 && part instanceof AttributePart) {
        if (previousValue !== void 0 || !previousValues.has(part)) {
          const name = part.committer.name;
          part.committer.element.removeAttribute(name);
        }
      } else if (value !== previousValue) {
        part.setValue(value);
      }
      previousValues.set(part, value);
    });

    // src/medblocks/EhrElement.ts
    var EhrElement = class extends LitElement {
      constructor() {
        super(...arguments);
        this.isMbElement = true;
      }
      reportValidity() {
        return true;
      }
      handlePathChange(oldPath, newPath) {
        this._pathChangeHandler.emit({ detail: { oldPath, newPath } });
      }
      connectedCallback() {
        super.connectedCallback();
        this._mbConnect.emit({ detail: this.path });
      }
      _handleDataChange() {
        this._mbInput.emit();
      }
    };
    __decorateClass([
      property({ type: String, reflect: true })
    ], EhrElement.prototype, "path", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], EhrElement.prototype, "label", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], EhrElement.prototype, "datatype", 2);
    __decorateClass([
      event("mb-input")
    ], EhrElement.prototype, "_mbInput", 2);
    __decorateClass([
      event("mb-dependency")
    ], EhrElement.prototype, "_mbDependency", 2);
    __decorateClass([
      event("mb-path-change")
    ], EhrElement.prototype, "_pathChangeHandler", 2);
    __decorateClass([
      event("mb-connect")
    ], EhrElement.prototype, "_mbConnect", 2);
    __decorateClass([
      watch("path")
    ], EhrElement.prototype, "handlePathChange", 1);
    __decorateClass([
      watch("data")
    ], EhrElement.prototype, "_handleDataChange", 1);

    // src/medblocks/codedtext/CodedTextElement.ts
    var CodedTextElement = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.terminology = "local";
        this.value = "";
      }
    };
    __decorateClass([
      property({ type: Object })
    ], CodedTextElement.prototype, "data", 2);
    __decorateClass([
      property({ type: String })
    ], CodedTextElement.prototype, "terminology", 2);
    __decorateClass([
      property({ type: String })
    ], CodedTextElement.prototype, "value", 2);
    __decorateClass([
      event("mb-input")
    ], CodedTextElement.prototype, "_mbInput", 2);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GADG7AUG.js
    function getBoundingClientRect(element) {
      var rect = element.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
      };
    }
    function getWindow(node) {
      if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
      }
      return node;
    }
    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft,
        scrollTop
      };
    }
    function isElement(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }
    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }
    function isShadowRoot(node) {
      if (typeof ShadowRoot === "undefined") {
        return false;
      }
      var OwnElement = getWindow(node).ShadowRoot;
      return node instanceof OwnElement || node instanceof ShadowRoot;
    }
    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }
    function getNodeName(element) {
      return element ? (element.nodeName || "").toLowerCase() : null;
    }
    function getDocumentElement(element) {
      return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
    }
    function getWindowScrollBarX(element) {
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }
    function getComputedStyle(element) {
      return getWindow(element).getComputedStyle(element);
    }
    function isScrollParent(element) {
      var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }
      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement);
      var isOffsetParentAnElement = isHTMLElement(offsetParent);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }
    function getLayoutRect(element) {
      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }
    function getParentNode(element) {
      if (getNodeName(element) === "html") {
        return element;
      }
      return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
    }
    function getScrollParent(node) {
      if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
        return node.ownerDocument.body;
      }
      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }
      return getScrollParent(getParentNode(node));
    }
    function listScrollParents(element, list) {
      var _element$ownerDocumen;
      if (list === void 0) {
        list = [];
      }
      var scrollParent = getScrollParent(element);
      var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
    }
    function isTableElement(element) {
      return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
    }
    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
        return null;
      }
      return element.offsetParent;
    }
    function getContainingBlock(element) {
      var isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
      var currentNode = getParentNode(element);
      while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
        var css2 = getComputedStyle(currentNode);
        if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].includes(css2.willChange) || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
          return currentNode;
        } else {
          currentNode = currentNode.parentNode;
        }
      }
      return null;
    }
    function getOffsetParent(element) {
      var window2 = getWindow(element);
      var offsetParent = getTrueOffsetParent(element);
      while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
        offsetParent = getTrueOffsetParent(offsetParent);
      }
      if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
        return window2;
      }
      return offsetParent || getContainingBlock(element) || window2;
    }
    var top = "top";
    var bottom = "bottom";
    var right = "right";
    var left = "left";
    var auto = "auto";
    var basePlacements = [top, bottom, right, left];
    var start = "start";
    var end = "end";
    var clippingParents = "clippingParents";
    var viewport = "viewport";
    var popper = "popper";
    var reference = "reference";
    var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
      return acc.concat([placement + "-" + start, placement + "-" + end]);
    }, []);
    var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
      return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
    }, []);
    var beforeRead = "beforeRead";
    var read = "read";
    var afterRead = "afterRead";
    var beforeMain = "beforeMain";
    var main = "main";
    var afterMain = "afterMain";
    var beforeWrite = "beforeWrite";
    var write = "write";
    var afterWrite = "afterWrite";
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
    function order(modifiers) {
      var map = new Map();
      var visited = new Set();
      var result = [];
      modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
      });
      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);
            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }
      modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) {
          sort(modifier);
        }
      });
      return result;
    }
    function orderModifiers(modifiers) {
      var orderedModifiers = order(modifiers);
      return modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }
    function debounce(fn2) {
      var pending;
      return function() {
        if (!pending) {
          pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
              pending = void 0;
              resolve(fn2());
            });
          });
        }
        return pending;
      };
    }
    function getBasePlacement(placement) {
      return placement.split("-")[0];
    }
    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function(merged2, current) {
        var existing = merged2[current.name];
        merged2[current.name] = existing ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged2;
      }, {});
      return Object.keys(merged).map(function(key) {
        return merged[key];
      });
    }
    function getViewportRect(element) {
      var win = getWindow(element);
      var html2 = getDocumentElement(element);
      var visualViewport = win.visualViewport;
      var width = html2.clientWidth;
      var height = html2.clientHeight;
      var x2 = 0;
      var y2 = 0;
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          x2 = visualViewport.offsetLeft;
          y2 = visualViewport.offsetTop;
        }
      }
      return {
        width,
        height,
        x: x2 + getWindowScrollBarX(element),
        y: y2
      };
    }
    var max = Math.max;
    var min = Math.min;
    var round = Math.round;
    function getDocumentRect(element) {
      var _element$ownerDocumen;
      var html2 = getDocumentElement(element);
      var winScroll = getWindowScroll(element);
      var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
      var width = max(html2.scrollWidth, html2.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
      var height = max(html2.scrollHeight, html2.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
      var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
      var y2 = -winScroll.scrollTop;
      if (getComputedStyle(body || html2).direction === "rtl") {
        x2 += max(html2.clientWidth, body ? body.clientWidth : 0) - width;
      }
      return {
        width,
        height,
        x: x2,
        y: y2
      };
    }
    function contains(parent, child) {
      var rootNode = child.getRootNode && child.getRootNode();
      if (parent.contains(child)) {
        return true;
      } else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
          if (next && parent.isSameNode(next)) {
            return true;
          }
          next = next.parentNode || next.host;
        } while (next);
      }
      return false;
    }
    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }
    function getInnerBoundingClientRect(element) {
      var rect = getBoundingClientRect(element);
      rect.top = rect.top + element.clientTop;
      rect.left = rect.left + element.clientLeft;
      rect.bottom = rect.top + element.clientHeight;
      rect.right = rect.left + element.clientWidth;
      rect.width = element.clientWidth;
      rect.height = element.clientHeight;
      rect.x = rect.left;
      rect.y = rect.top;
      return rect;
    }
    function getClientRectFromMixedType(element, clippingParent) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    }
    function getClippingParents(element) {
      var clippingParents2 = listScrollParents(getParentNode(element));
      var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
      if (!isElement(clipperElement)) {
        return [];
      }
      return clippingParents2.filter(function(clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
      });
    }
    function getClippingRect(element, boundary, rootBoundary) {
      var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
      var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents2[0];
      var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }
    function getVariation(placement) {
      return placement.split("-")[1];
    }
    function getMainAxisFromPlacement(placement) {
      return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
    }
    function computeOffsets(_ref) {
      var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference2.x + reference2.width / 2 - element.width / 2;
      var commonY = reference2.y + reference2.height / 2 - element.height / 2;
      var offsets;
      switch (basePlacement) {
        case top:
          offsets = {
            x: commonX,
            y: reference2.y - element.height
          };
          break;
        case bottom:
          offsets = {
            x: commonX,
            y: reference2.y + reference2.height
          };
          break;
        case right:
          offsets = {
            x: reference2.x + reference2.width,
            y: commonY
          };
          break;
        case left:
          offsets = {
            x: reference2.x - element.width,
            y: commonY
          };
          break;
        default:
          offsets = {
            x: reference2.x,
            y: reference2.y
          };
      }
      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
      if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch (variation) {
          case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
            break;
          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
            break;
          default:
        }
      }
      return offsets;
    }
    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), paddingObject);
    }
    function expandToHashMap(value, keys) {
      return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }
    function detectOverflow(state2, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === popper ? reference : popper;
      var referenceElement = state2.elements.reference;
      var popperRect = state2.rects.popper;
      var element = state2.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary);
      var referenceClientRect = getBoundingClientRect(referenceElement);
      var popperOffsets2 = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
      var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state2.modifiersData.offset;
      if (elementContext === popper && offsetData) {
        var offset2 = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
          overflowOffsets[key] += offset2[axis] * multiply;
        });
      }
      return overflowOffsets;
    }
    var DEFAULT_OPTIONS = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };
    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
      });
    }
    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }
      var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper2(reference2, popper2, options) {
        if (options === void 0) {
          options = defaultOptions;
        }
        var state2 = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference2,
            popper: popper2
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state: state2,
          setOptions: function setOptions(options2) {
            cleanupModifierEffects();
            state2.options = Object.assign({}, defaultOptions, state2.options, options2);
            state2.scrollParents = {
              reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
              popper: listScrollParents(popper2)
            };
            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state2.options.modifiers)));
            state2.orderedModifiers = orderedModifiers.filter(function(m2) {
              return m2.enabled;
            });
            if (false) {
              var modifiers = uniqueBy([].concat(orderedModifiers, state2.options.modifiers), function(_ref) {
                var name = _ref.name;
                return name;
              });
              validateModifiers(modifiers);
              if (getBasePlacement(state2.options.placement) === auto) {
                var flipModifier = state2.orderedModifiers.find(function(_ref2) {
                  var name = _ref2.name;
                  return name === "flip";
                });
                if (!flipModifier) {
                  console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                }
              }
              var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
              if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                return parseFloat(margin);
              })) {
                console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
              }
            }
            runModifierEffects();
            return instance.update();
          },
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }
            var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
            if (!areValidElements(reference3, popper3)) {
              if (false) {
                console.error(INVALID_ELEMENT_ERROR);
              }
              return;
            }
            state2.rects = {
              reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
              popper: getLayoutRect(popper3)
            };
            state2.reset = false;
            state2.placement = state2.options.placement;
            state2.orderedModifiers.forEach(function(modifier) {
              return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            var __debug_loops__ = 0;
            for (var index = 0; index < state2.orderedModifiers.length; index++) {
              if (false) {
                __debug_loops__ += 1;
                if (__debug_loops__ > 100) {
                  console.error(INFINITE_LOOP_ERROR);
                  break;
                }
              }
              if (state2.reset === true) {
                state2.reset = false;
                index = -1;
                continue;
              }
              var _state$orderedModifie = state2.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
              if (typeof fn2 === "function") {
                state2 = fn2({
                  state: state2,
                  options: _options,
                  name,
                  instance
                }) || state2;
              }
            }
          },
          update: debounce(function() {
            return new Promise(function(resolve) {
              instance.forceUpdate();
              resolve(state2);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };
        if (!areValidElements(reference2, popper2)) {
          if (false) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return instance;
        }
        instance.setOptions(options).then(function(state22) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state22);
          }
        });
        function runModifierEffects() {
          state2.orderedModifiers.forEach(function(_ref3) {
            var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
            if (typeof effect4 === "function") {
              var cleanupFn = effect4({
                state: state2,
                name,
                instance,
                options: options2
              });
              var noopFn = function noopFn2() {
              };
              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }
        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function(fn2) {
            return fn2();
          });
          effectCleanupFns = [];
        }
        return instance;
      };
    }
    var passive = {
      passive: true
    };
    function effect(_ref) {
      var state2 = _ref.state, instance = _ref.instance, options = _ref.options;
      var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
      var window2 = getWindow(state2.elements.popper);
      var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.addEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.addEventListener("resize", instance.update, passive);
      }
      return function() {
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.removeEventListener("resize", instance.update, passive);
        }
      };
    }
    var eventListeners_default = {
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function fn() {
      },
      effect,
      data: {}
    };
    function popperOffsets(_ref) {
      var state2 = _ref.state, name = _ref.name;
      state2.modifiersData[name] = computeOffsets({
        reference: state2.rects.reference,
        element: state2.rects.popper,
        strategy: "absolute",
        placement: state2.placement
      });
    }
    var popperOffsets_default = {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: popperOffsets,
      data: {}
    };
    var unsetSides = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
    function roundOffsetsByDPR(_ref) {
      var x2 = _ref.x, y2 = _ref.y;
      var win = window;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: round(round(x2 * dpr) / dpr) || 0,
        y: round(round(y2 * dpr) / dpr) || 0
      };
    }
    function mapToStyles(_ref2) {
      var _Object$assign2;
      var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
      var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x2 = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y2 = _ref3$y === void 0 ? 0 : _ref3$y;
      var hasX = offsets.hasOwnProperty("x");
      var hasY = offsets.hasOwnProperty("y");
      var sideX = left;
      var sideY = top;
      var win = window;
      if (adaptive) {
        var offsetParent = getOffsetParent(popper2);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === getWindow(popper2)) {
          offsetParent = getDocumentElement(popper2);
          if (getComputedStyle(offsetParent).position !== "static") {
            heightProp = "scrollHeight";
            widthProp = "scrollWidth";
          }
        }
        if (placement === top) {
          sideY = bottom;
          y2 -= offsetParent[heightProp] - popperRect.height;
          y2 *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left) {
          sideX = right;
          x2 -= offsetParent[widthProp] - popperRect.width;
          x2 *= gpuAcceleration ? 1 : -1;
        }
      }
      var commonStyles = Object.assign({
        position
      }, adaptive && unsetSides);
      if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
      }
      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
    }
    function computeStyles(_ref4) {
      var state2 = _ref4.state, options = _ref4.options;
      var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
      if (false) {
        var transitionProperty = getComputedStyle(state2.elements.popper).transitionProperty || "";
        if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property2) {
          return transitionProperty.indexOf(property2) >= 0;
        })) {
          console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
        }
      }
      var commonStyles = {
        placement: getBasePlacement(state2.placement),
        popper: state2.elements.popper,
        popperRect: state2.rects.popper,
        gpuAcceleration
      };
      if (state2.modifiersData.popperOffsets != null) {
        state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state2.modifiersData.popperOffsets,
          position: state2.options.strategy,
          adaptive,
          roundOffsets
        })));
      }
      if (state2.modifiersData.arrow != null) {
        state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state2.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets
        })));
      }
      state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
        "data-popper-placement": state2.placement
      });
    }
    var computeStyles_default = {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: computeStyles,
      data: {}
    };
    function applyStyles(_ref) {
      var state2 = _ref.state;
      Object.keys(state2.elements).forEach(function(name) {
        var style2 = state2.styles[name] || {};
        var attributes = state2.attributes[name] || {};
        var element = state2.elements[name];
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style2);
        Object.keys(attributes).forEach(function(name2) {
          var value = attributes[name2];
          if (value === false) {
            element.removeAttribute(name2);
          } else {
            element.setAttribute(name2, value === true ? "" : value);
          }
        });
      });
    }
    function effect2(_ref2) {
      var state2 = _ref2.state;
      var initialStyles = {
        popper: {
          position: state2.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state2.elements.popper.style, initialStyles.popper);
      state2.styles = initialStyles;
      if (state2.elements.arrow) {
        Object.assign(state2.elements.arrow.style, initialStyles.arrow);
      }
      return function() {
        Object.keys(state2.elements).forEach(function(name) {
          var element = state2.elements[name];
          var attributes = state2.attributes[name] || {};
          var styleProperties = Object.keys(state2.styles.hasOwnProperty(name) ? state2.styles[name] : initialStyles[name]);
          var style2 = styleProperties.reduce(function(style22, property2) {
            style22[property2] = "";
            return style22;
          }, {});
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style2);
          Object.keys(attributes).forEach(function(attribute) {
            element.removeAttribute(attribute);
          });
        });
      };
    }
    var applyStyles_default = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: applyStyles,
      effect: effect2,
      requires: ["computeStyles"]
    };
    function distanceAndSkiddingToXY(placement, rects, offset2) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
      var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
        placement
      })) : offset2, skidding = _ref[0], distance = _ref[1];
      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }
    function offset(_ref2) {
      var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
      var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
        return acc;
      }, {});
      var _data$state$placement = data[state2.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
      if (state2.modifiersData.popperOffsets != null) {
        state2.modifiersData.popperOffsets.x += x2;
        state2.modifiersData.popperOffsets.y += y2;
      }
      state2.modifiersData[name] = data;
    }
    var offset_default = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: offset
    };
    var hash = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
      });
    }
    var hash2 = {
      start: "end",
      end: "start"
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function(matched) {
        return hash2[matched];
      });
    }
    function computeAutoPlacement(state2, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
        return getVariation(placement2) === variation;
      }) : basePlacements;
      var allowedPlacements = placements2.filter(function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
      });
      if (allowedPlacements.length === 0) {
        allowedPlacements = placements2;
        if (false) {
          console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
        }
      }
      var overflows = allowedPlacements.reduce(function(acc, placement2) {
        acc[placement2] = detectOverflow(state2, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding
        })[getBasePlacement(placement2)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function(a4, b2) {
        return overflows[a4] - overflows[b2];
      });
    }
    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }
      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }
    function flip(_ref) {
      var state2 = _ref.state, options = _ref.options, name = _ref.name;
      if (state2.modifiersData[name]._skip) {
        return;
      }
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state2.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
        return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state2, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding,
          flipVariations,
          allowedAutoPlacements
        }) : placement2);
      }, []);
      var referenceRect = state2.rects.reference;
      var popperRect = state2.rects.popper;
      var checksMap = new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements2[0];
      for (var i5 = 0; i5 < placements2.length; i5++) {
        var placement = placements2[i5];
        var _basePlacement = getBasePlacement(placement);
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = detectOverflow(state2, {
          placement,
          boundary,
          rootBoundary,
          altBoundary,
          padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }
        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(function(check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }
        checksMap.set(placement, checks);
      }
      if (makeFallbackChecks) {
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop2(_i2) {
          var fittingPlacement = placements2.find(function(placement2) {
            var checks2 = checksMap.get(placement2);
            if (checks2) {
              return checks2.slice(0, _i2).every(function(check) {
                return check;
              });
            }
          });
          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };
        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);
          if (_ret === "break")
            break;
        }
      }
      if (state2.placement !== firstFittingPlacement) {
        state2.modifiersData[name]._skip = true;
        state2.placement = firstFittingPlacement;
        state2.reset = true;
      }
    }
    var flip_default = {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: flip,
      requiresIfExists: ["offset"],
      data: {
        _skip: false
      }
    };
    function getAltAxis(axis) {
      return axis === "x" ? "y" : "x";
    }
    function within(min2, value, max2) {
      return max(min2, min(value, max2));
    }
    function preventOverflow(_ref) {
      var state2 = _ref.state, options = _ref.options, name = _ref.name;
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state2, {
        boundary,
        rootBoundary,
        padding,
        altBoundary
      });
      var basePlacement = getBasePlacement(state2.placement);
      var variation = getVariation(state2.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets2 = state2.modifiersData.popperOffsets;
      var referenceRect = state2.rects.reference;
      var popperRect = state2.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
        placement: state2.placement
      })) : tetherOffset;
      var data = {
        x: 0,
        y: 0
      };
      if (!popperOffsets2) {
        return;
      }
      if (checkMainAxis || checkAltAxis) {
        var mainSide = mainAxis === "y" ? top : left;
        var altSide = mainAxis === "y" ? bottom : right;
        var len = mainAxis === "y" ? "height" : "width";
        var offset2 = popperOffsets2[mainAxis];
        var min2 = popperOffsets2[mainAxis] + overflow[mainSide];
        var max2 = popperOffsets2[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
        var arrowElement = state2.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide];
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement][mainAxis] : 0;
        var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
        if (checkMainAxis) {
          var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
      }
      state2.modifiersData[name] = data;
    }
    var preventOverflow_default = {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: preventOverflow,
      requiresIfExists: ["offset"]
    };
    var toPaddingObject = function toPaddingObject2(padding, state2) {
      padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
        placement: state2.placement
      })) : padding;
      return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    };
    function arrow(_ref) {
      var _state$modifiersData$;
      var state2 = _ref.state, name = _ref.name, options = _ref.options;
      var arrowElement = state2.elements.arrow;
      var popperOffsets2 = state2.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state2.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? "height" : "width";
      if (!arrowElement || !popperOffsets2) {
        return;
      }
      var paddingObject = toPaddingObject(options.padding, state2);
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === "y" ? top : left;
      var maxProp = axis === "y" ? bottom : right;
      var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
      var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2;
      var min2 = paddingObject[minProp];
      var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset2 = within(min2, center, max2);
      var axisProp = axis;
      state2.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
    }
    function effect3(_ref2) {
      var state2 = _ref2.state, options = _ref2.options;
      var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
      if (arrowElement == null) {
        return;
      }
      if (typeof arrowElement === "string") {
        arrowElement = state2.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
          return;
        }
      }
      if (false) {
        if (!isHTMLElement(arrowElement)) {
          console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
        }
      }
      if (!contains(state2.elements.popper, arrowElement)) {
        if (false) {
          console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
        }
        return;
      }
      state2.elements.arrow = arrowElement;
    }
    var arrow_default = {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: arrow,
      effect: effect3,
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };
    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }
      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }
    function isAnySideFullyClipped(overflow) {
      return [top, right, bottom, left].some(function(side) {
        return overflow[side] >= 0;
      });
    }
    function hide(_ref) {
      var state2 = _ref.state, name = _ref.name;
      var referenceRect = state2.rects.reference;
      var popperRect = state2.rects.popper;
      var preventedOffsets = state2.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state2, {
        elementContext: "reference"
      });
      var popperAltOverflow = detectOverflow(state2, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state2.modifiersData[name] = {
        referenceClippingOffsets,
        popperEscapeOffsets,
        isReferenceHidden,
        hasPopperEscaped
      };
      state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
      });
    }
    var hide_default = {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: hide
    };
    var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
    var createPopper = /* @__PURE__ */ popperGenerator({
      defaultModifiers
    });

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DTSUHNT6.js
    function isTabbable(el) {
      const tag = el.tagName.toLowerCase();
      if (el.getAttribute("tabindex") === "-1") {
        return false;
      }
      if (el.hasAttribute("disabled")) {
        return false;
      }
      if (el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") !== "false") {
        return false;
      }
      if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
        return false;
      }
      if (!el.offsetParent) {
        return false;
      }
      if (window.getComputedStyle(el).visibility === "hidden") {
        return false;
      }
      if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
        return true;
      }
      if (el.hasAttribute("tabindex")) {
        return true;
      }
      if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
        return true;
      }
      return ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(tag);
    }
    function getTabbableBoundary(root) {
      const allElements = [];
      function walk(el) {
        if (el instanceof HTMLElement) {
          allElements.push(el);
          if (el.shadowRoot && el.shadowRoot.mode === "open") {
            walk(el.shadowRoot);
          }
        }
        [...el.querySelectorAll("*")].map((e5) => walk(e5));
      }
      walk(root);
      const start2 = allElements.find((el) => isTabbable(el)) || null;
      const end2 = allElements.reverse().find((el) => isTabbable(el)) || null;
      return { start: start2, end: end2 };
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XAZN5AQ5.js
    function getOffset(element, parent) {
      return {
        top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
        left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
      };
    }
    var locks = new Set();
    function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
      const offset2 = getOffset(element, container);
      const offsetTop = offset2.top + container.scrollTop;
      const offsetLeft = offset2.left + container.scrollLeft;
      const minX = container.scrollLeft;
      const maxX = container.scrollLeft + container.offsetWidth;
      const minY = container.scrollTop;
      const maxY = container.scrollTop + container.offsetHeight;
      if (direction === "horizontal" || direction === "both") {
        if (offsetLeft < minX) {
          container.scrollTo({ left: offsetLeft, behavior });
        } else if (offsetLeft + element.clientWidth > maxX) {
          container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
        }
      }
      if (direction === "vertical" || direction === "both") {
        if (offsetTop < minY) {
          container.scrollTo({ top: offsetTop, behavior });
        } else if (offsetTop + element.clientHeight > maxY) {
          container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
        }
      }
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NVGT36PI.js
    function animateTo(el, keyframes, options) {
      return new Promise(async (resolve) => {
        if ((options == null ? void 0 : options.duration) === Infinity) {
          throw new Error("Promise-based animations must be finite.");
        }
        const animation = el.animate(keyframes, __spreadProps2(__spreadValues2({}, options), {
          duration: prefersReducedMotion() ? 0 : options.duration
        }));
        animation.addEventListener("cancel", resolve, { once: true });
        animation.addEventListener("finish", resolve, { once: true });
      });
    }
    function prefersReducedMotion() {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      return query == null ? void 0 : query.matches;
    }
    function stopAnimations(el) {
      return Promise.all(el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          const handleAnimationEvent = requestAnimationFrame(resolve);
          animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
          animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
          animation.cancel();
        });
      }));
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EVK2ASE6.js
    var defaultAnimationRegistry = new Map();
    var customAnimationRegistry = new WeakMap();
    function ensureAnimation(animation) {
      return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
    }
    function setDefaultAnimation(animationName, animation) {
      defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
    }
    function getAnimation(el, animationName) {
      const customAnimation = customAnimationRegistry.get(el);
      if (customAnimation && customAnimation[animationName]) {
        return customAnimation[animationName];
      }
      const defaultAnimation = defaultAnimationRegistry.get(animationName);
      if (defaultAnimation) {
        return defaultAnimation;
      }
      return {
        keyframes: [],
        options: { duration: 0 }
      };
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BD26TKS4.js
    function watch2(propName, options) {
      return (protoOrDescriptor, name) => {
        const { update } = protoOrDescriptor;
        options = Object.assign({ waitUntilFirstUpdate: false }, options);
        protoOrDescriptor.update = function(changedProps) {
          if (changedProps.has(propName)) {
            const oldValue = changedProps.get(propName);
            const newValue = this[propName];
            if (oldValue !== newValue) {
              if (!(options == null ? void 0 : options.waitUntilFirstUpdate) || this.hasUpdated) {
                this[name].call(this, oldValue, newValue);
              }
            }
          }
          update.call(this, changedProps);
        };
      };
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.I4TE3TJV.js
    function emit(el, name, options) {
      const event2 = new CustomEvent(name, Object.assign({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      el.dispatchEvent(event2);
      return event2;
    }
    function waitForEvent(el, eventName) {
      return new Promise((resolve) => {
        function done(event2) {
          if (event2.target === el) {
            el.removeEventListener(eventName, done);
            resolve();
          }
        }
        el.addEventListener(eventName, done);
      });
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2JQPDYNA.js
    var t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
    var e = (t24) => (...e24) => ({ _$litDirective$: t24, values: e24 });
    var i = class {
      constructor(t24) {
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AT(t24, e24, i23) {
        this._$Ct = t24, this._$AM = e24, this._$Ci = i23;
      }
      _$AS(t24, e24) {
        return this.update(t24, e24);
      }
      update(t24, e24) {
        return this.render(...e24);
      }
    };

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4HZWYGDJ.js
    var t2 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    var e2 = Symbol();
    var s = class {
      constructor(t32, s52) {
        if (s52 !== e2)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t32;
      }
      get styleSheet() {
        return t2 && this.t === void 0 && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
      }
      toString() {
        return this.cssText;
      }
    };
    var n = new Map();
    var o = (t32) => {
      let o52 = n.get(t32);
      return o52 === void 0 && n.set(t32, o52 = new s(t32, e2)), o52;
    };
    var r = (t32) => o(typeof t32 == "string" ? t32 : t32 + "");
    var i2 = (t32, ...e42) => {
      const n52 = t32.length === 1 ? t32[0] : e42.reduce((e5, n6, o52) => e5 + ((t4) => {
        if (t4 instanceof s)
          return t4.cssText;
        if (typeof t4 == "number")
          return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(n6) + t32[o52 + 1], t32[0]);
      return o(n52);
    };
    var S = (e42, s52) => {
      t2 ? e42.adoptedStyleSheets = s52.map((t32) => t32 instanceof CSSStyleSheet ? t32 : t32.styleSheet) : s52.forEach((t32) => {
        const s6 = document.createElement("style");
        s6.textContent = t32.cssText, e42.appendChild(s6);
      });
    };
    var u = t2 ? (t32) => t32 : (t32) => t32 instanceof CSSStyleSheet ? ((t4) => {
      let e42 = "";
      for (const s52 of t4.cssRules)
        e42 += s52.cssText;
      return r(e42);
    })(t32) : t32;
    var s2;
    var e22;
    var h;
    var r2;
    var o2 = { toAttribute(t32, i42) {
      switch (i42) {
        case Boolean:
          t32 = t32 ? "" : null;
          break;
        case Object:
        case Array:
          t32 = t32 == null ? t32 : JSON.stringify(t32);
      }
      return t32;
    }, fromAttribute(t32, i42) {
      let s52 = t32;
      switch (i42) {
        case Boolean:
          s52 = t32 !== null;
          break;
        case Number:
          s52 = t32 === null ? null : Number(t32);
          break;
        case Object:
        case Array:
          try {
            s52 = JSON.parse(t32);
          } catch (t4) {
            s52 = null;
          }
      }
      return s52;
    } };
    var n2 = (t32, i42) => i42 !== t32 && (i42 == i42 || t32 == t32);
    var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
    var a = class extends HTMLElement {
      constructor() {
        super(), this.\u03A0i = new Map(), this.\u03A0o = void 0, this.\u03A0l = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.\u03A0h = null, this.u();
      }
      static addInitializer(t32) {
        var i42;
        (i42 = this.v) !== null && i42 !== void 0 || (this.v = []), this.v.push(t32);
      }
      static get observedAttributes() {
        this.finalize();
        const t32 = [];
        return this.elementProperties.forEach((i42, s52) => {
          const e42 = this.\u03A0p(s52, i42);
          e42 !== void 0 && (this.\u03A0m.set(e42, s52), t32.push(e42));
        }), t32;
      }
      static createProperty(t32, i42 = l) {
        if (i42.state && (i42.attribute = false), this.finalize(), this.elementProperties.set(t32, i42), !i42.noAccessor && !this.prototype.hasOwnProperty(t32)) {
          const s52 = typeof t32 == "symbol" ? Symbol() : "__" + t32, e42 = this.getPropertyDescriptor(t32, s52, i42);
          e42 !== void 0 && Object.defineProperty(this.prototype, t32, e42);
        }
      }
      static getPropertyDescriptor(t32, i42, s52) {
        return { get() {
          return this[i42];
        }, set(e42) {
          const h4 = this[t32];
          this[i42] = e42, this.requestUpdate(t32, h4, s52);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t32) {
        return this.elementProperties.get(t32) || l;
      }
      static finalize() {
        if (this.hasOwnProperty("finalized"))
          return false;
        this.finalized = true;
        const t32 = Object.getPrototypeOf(this);
        if (t32.finalize(), this.elementProperties = new Map(t32.elementProperties), this.\u03A0m = new Map(), this.hasOwnProperty("properties")) {
          const t4 = this.properties, i42 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
          for (const s52 of i42)
            this.createProperty(s52, t4[s52]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
      }
      static finalizeStyles(i42) {
        const s52 = [];
        if (Array.isArray(i42)) {
          const e42 = new Set(i42.flat(1 / 0).reverse());
          for (const i5 of e42)
            s52.unshift(u(i5));
        } else
          i42 !== void 0 && s52.push(u(i42));
        return s52;
      }
      static \u03A0p(t32, i42) {
        const s52 = i42.attribute;
        return s52 === false ? void 0 : typeof s52 == "string" ? s52 : typeof t32 == "string" ? t32.toLowerCase() : void 0;
      }
      u() {
        var t32;
        this.\u03A0g = new Promise((t4) => this.enableUpdating = t4), this.L = new Map(), this.\u03A0_(), this.requestUpdate(), (t32 = this.constructor.v) === null || t32 === void 0 || t32.forEach((t4) => t4(this));
      }
      addController(t32) {
        var i42, s52;
        ((i42 = this.\u03A0U) !== null && i42 !== void 0 ? i42 : this.\u03A0U = []).push(t32), this.renderRoot !== void 0 && this.isConnected && ((s52 = t32.hostConnected) === null || s52 === void 0 || s52.call(t32));
      }
      removeController(t32) {
        var i42;
        (i42 = this.\u03A0U) === null || i42 === void 0 || i42.splice(this.\u03A0U.indexOf(t32) >>> 0, 1);
      }
      \u03A0_() {
        this.constructor.elementProperties.forEach((t32, i42) => {
          this.hasOwnProperty(i42) && (this.\u03A0i.set(i42, this[i42]), delete this[i42]);
        });
      }
      createRenderRoot() {
        var t32;
        const s52 = (t32 = this.shadowRoot) !== null && t32 !== void 0 ? t32 : this.attachShadow(this.constructor.shadowRootOptions);
        return S(s52, this.constructor.elementStyles), s52;
      }
      connectedCallback() {
        var t32;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t32 = this.\u03A0U) === null || t32 === void 0 || t32.forEach((t4) => {
          var i42;
          return (i42 = t4.hostConnected) === null || i42 === void 0 ? void 0 : i42.call(t4);
        }), this.\u03A0l && (this.\u03A0l(), this.\u03A0o = this.\u03A0l = void 0);
      }
      enableUpdating(t32) {
      }
      disconnectedCallback() {
        var t32;
        (t32 = this.\u03A0U) === null || t32 === void 0 || t32.forEach((t4) => {
          var i42;
          return (i42 = t4.hostDisconnected) === null || i42 === void 0 ? void 0 : i42.call(t4);
        }), this.\u03A0o = new Promise((t4) => this.\u03A0l = t4);
      }
      attributeChangedCallback(t32, i42, s52) {
        this.K(t32, s52);
      }
      \u03A0j(t32, i42, s52 = l) {
        var e42, h4;
        const r42 = this.constructor.\u03A0p(t32, s52);
        if (r42 !== void 0 && s52.reflect === true) {
          const n52 = ((h4 = (e42 = s52.converter) === null || e42 === void 0 ? void 0 : e42.toAttribute) !== null && h4 !== void 0 ? h4 : o2.toAttribute)(i42, s52.type);
          this.\u03A0h = t32, n52 == null ? this.removeAttribute(r42) : this.setAttribute(r42, n52), this.\u03A0h = null;
        }
      }
      K(t32, i42) {
        var s52, e42, h4;
        const r42 = this.constructor, n52 = r42.\u03A0m.get(t32);
        if (n52 !== void 0 && this.\u03A0h !== n52) {
          const t4 = r42.getPropertyOptions(n52), l42 = t4.converter, a4 = (h4 = (e42 = (s52 = l42) === null || s52 === void 0 ? void 0 : s52.fromAttribute) !== null && e42 !== void 0 ? e42 : typeof l42 == "function" ? l42 : null) !== null && h4 !== void 0 ? h4 : o2.fromAttribute;
          this.\u03A0h = n52, this[n52] = a4(i42, t4.type), this.\u03A0h = null;
        }
      }
      requestUpdate(t32, i42, s52) {
        let e42 = true;
        t32 !== void 0 && (((s52 = s52 || this.constructor.getPropertyOptions(t32)).hasChanged || n2)(this[t32], i42) ? (this.L.has(t32) || this.L.set(t32, i42), s52.reflect === true && this.\u03A0h !== t32 && (this.\u03A0k === void 0 && (this.\u03A0k = new Map()), this.\u03A0k.set(t32, s52))) : e42 = false), !this.isUpdatePending && e42 && (this.\u03A0g = this.\u03A0q());
      }
      async \u03A0q() {
        this.isUpdatePending = true;
        try {
          for (await this.\u03A0g; this.\u03A0o; )
            await this.\u03A0o;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t32 = this.performUpdate();
        return t32 != null && await t32, !this.isUpdatePending;
      }
      performUpdate() {
        var t32;
        if (!this.isUpdatePending)
          return;
        this.hasUpdated, this.\u03A0i && (this.\u03A0i.forEach((t4, i5) => this[i5] = t4), this.\u03A0i = void 0);
        let i42 = false;
        const s52 = this.L;
        try {
          i42 = this.shouldUpdate(s52), i42 ? (this.willUpdate(s52), (t32 = this.\u03A0U) === null || t32 === void 0 || t32.forEach((t4) => {
            var i5;
            return (i5 = t4.hostUpdate) === null || i5 === void 0 ? void 0 : i5.call(t4);
          }), this.update(s52)) : this.\u03A0$();
        } catch (t4) {
          throw i42 = false, this.\u03A0$(), t4;
        }
        i42 && this.E(s52);
      }
      willUpdate(t32) {
      }
      E(t32) {
        var i42;
        (i42 = this.\u03A0U) === null || i42 === void 0 || i42.forEach((t4) => {
          var i5;
          return (i5 = t4.hostUpdated) === null || i5 === void 0 ? void 0 : i5.call(t4);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t32)), this.updated(t32);
      }
      \u03A0$() {
        this.L = new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this.\u03A0g;
      }
      shouldUpdate(t32) {
        return true;
      }
      update(t32) {
        this.\u03A0k !== void 0 && (this.\u03A0k.forEach((t4, i42) => this.\u03A0j(i42, this[i42], t4)), this.\u03A0k = void 0), this.\u03A0$();
      }
      updated(t32) {
      }
      firstUpdated(t32) {
      }
    };
    a.finalized = true, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, (e22 = (s2 = globalThis).reactiveElementPlatformSupport) === null || e22 === void 0 || e22.call(s2, { ReactiveElement: a }), ((h = (r2 = globalThis).reactiveElementVersions) !== null && h !== void 0 ? h : r2.reactiveElementVersions = []).push("1.0.0-rc.2");
    var t22;
    var i22;
    var s3;
    var e3;
    var o3 = globalThis.trustedTypes;
    var n3 = o3 ? o3.createPolicy("lit-html", { createHTML: (t32) => t32 }) : void 0;
    var l2 = `lit$${(Math.random() + "").slice(9)}$`;
    var h2 = "?" + l2;
    var r3 = `<${h2}>`;
    var u2 = document;
    var c = (t32 = "") => u2.createComment(t32);
    var d = (t32) => t32 === null || typeof t32 != "object" && typeof t32 != "function";
    var v = Array.isArray;
    var a2 = (t32) => {
      var i42;
      return v(t32) || typeof ((i42 = t32) === null || i42 === void 0 ? void 0 : i42[Symbol.iterator]) == "function";
    };
    var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    var _ = /-->/g;
    var m = />/g;
    var $ = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
    var g = /'/g;
    var p = /"/g;
    var y = /^(?:script|style|textarea)$/i;
    var b = (t32) => (i42, ...s52) => ({ _$litType$: t32, strings: i42, values: s52 });
    var T = b(1);
    var x = b(2);
    var w = Symbol.for("lit-noChange");
    var A = Symbol.for("lit-nothing");
    var C = new WeakMap();
    var P = (t32, i42, s52) => {
      var e42, o52;
      const n52 = (e42 = s52 == null ? void 0 : s52.renderBefore) !== null && e42 !== void 0 ? e42 : i42;
      let l42 = n52._$litPart$;
      if (l42 === void 0) {
        const t4 = (o52 = s52 == null ? void 0 : s52.renderBefore) !== null && o52 !== void 0 ? o52 : null;
        n52._$litPart$ = l42 = new k(i42.insertBefore(c(), t4), t4, void 0, s52 != null ? s52 : {});
      }
      return l42._$AI(t32), l42;
    };
    var V = u2.createTreeWalker(u2, 129, null, false);
    var E = (t32, i42) => {
      const s52 = t32.length - 1, e42 = [];
      let o52, h4 = i42 === 2 ? "<svg>" : "", u3 = f;
      for (let i5 = 0; i5 < s52; i5++) {
        const s6 = t32[i5];
        let n52, c3, d2 = -1, v2 = 0;
        for (; v2 < s6.length && (u3.lastIndex = v2, c3 = u3.exec(s6), c3 !== null); )
          v2 = u3.lastIndex, u3 === f ? c3[1] === "!--" ? u3 = _ : c3[1] !== void 0 ? u3 = m : c3[2] !== void 0 ? (y.test(c3[2]) && (o52 = RegExp("</" + c3[2], "g")), u3 = $) : c3[3] !== void 0 && (u3 = $) : u3 === $ ? c3[0] === ">" ? (u3 = o52 != null ? o52 : f, d2 = -1) : c3[1] === void 0 ? d2 = -2 : (d2 = u3.lastIndex - c3[2].length, n52 = c3[1], u3 = c3[3] === void 0 ? $ : c3[3] === '"' ? p : g) : u3 === p || u3 === g ? u3 = $ : u3 === _ || u3 === m ? u3 = f : (u3 = $, o52 = void 0);
        const a4 = u3 === $ && t32[i5 + 1].startsWith("/>") ? " " : "";
        h4 += u3 === f ? s6 + r3 : d2 >= 0 ? (e42.push(n52), s6.slice(0, d2) + "$lit$" + s6.slice(d2) + l2 + a4) : s6 + l2 + (d2 === -2 ? (e42.push(void 0), i5) : a4);
      }
      const c2 = h4 + (t32[s52] || "<?>") + (i42 === 2 ? "</svg>" : "");
      return [n3 !== void 0 ? n3.createHTML(c2) : c2, e42];
    };
    var M = class {
      constructor({ strings: t32, _$litType$: i42 }, s52) {
        let e42;
        this.parts = [];
        let n52 = 0, r42 = 0;
        const u3 = t32.length - 1, d2 = this.parts, [v2, a4] = E(t32, i42);
        if (this.el = M.createElement(v2, s52), V.currentNode = this.el.content, i42 === 2) {
          const t4 = this.el.content, i5 = t4.firstChild;
          i5.remove(), t4.append(...i5.childNodes);
        }
        for (; (e42 = V.nextNode()) !== null && d2.length < u3; ) {
          if (e42.nodeType === 1) {
            if (e42.hasAttributes()) {
              const t4 = [];
              for (const i5 of e42.getAttributeNames())
                if (i5.endsWith("$lit$") || i5.startsWith(l2)) {
                  const s6 = a4[r42++];
                  if (t4.push(i5), s6 !== void 0) {
                    const t5 = e42.getAttribute(s6.toLowerCase() + "$lit$").split(l2), i6 = /([.?@])?(.*)/.exec(s6);
                    d2.push({ type: 1, index: n52, name: i6[2], strings: t5, ctor: i6[1] === "." ? I : i6[1] === "?" ? L : i6[1] === "@" ? R : H });
                  } else
                    d2.push({ type: 6, index: n52 });
                }
              for (const i5 of t4)
                e42.removeAttribute(i5);
            }
            if (y.test(e42.tagName)) {
              const t4 = e42.textContent.split(l2), i5 = t4.length - 1;
              if (i5 > 0) {
                e42.textContent = o3 ? o3.emptyScript : "";
                for (let s6 = 0; s6 < i5; s6++)
                  e42.append(t4[s6], c()), V.nextNode(), d2.push({ type: 2, index: ++n52 });
                e42.append(t4[i5], c());
              }
            }
          } else if (e42.nodeType === 8)
            if (e42.data === h2)
              d2.push({ type: 2, index: n52 });
            else {
              let t4 = -1;
              for (; (t4 = e42.data.indexOf(l2, t4 + 1)) !== -1; )
                d2.push({ type: 7, index: n52 }), t4 += l2.length - 1;
            }
          n52++;
        }
      }
      static createElement(t32, i42) {
        const s52 = u2.createElement("template");
        return s52.innerHTML = t32, s52;
      }
    };
    function N(t32, i42, s52 = t32, e42) {
      var o52, n52, l42, h4;
      if (i42 === w)
        return i42;
      let r42 = e42 !== void 0 ? (o52 = s52._$Cl) === null || o52 === void 0 ? void 0 : o52[e42] : s52._$Cu;
      const u3 = d(i42) ? void 0 : i42._$litDirective$;
      return (r42 == null ? void 0 : r42.constructor) !== u3 && ((n52 = r42 == null ? void 0 : r42._$AO) === null || n52 === void 0 || n52.call(r42, false), u3 === void 0 ? r42 = void 0 : (r42 = new u3(t32), r42._$AT(t32, s52, e42)), e42 !== void 0 ? ((l42 = (h4 = s52)._$Cl) !== null && l42 !== void 0 ? l42 : h4._$Cl = [])[e42] = r42 : s52._$Cu = r42), r42 !== void 0 && (i42 = N(t32, r42._$AS(t32, i42.values), r42, e42)), i42;
    }
    var S2 = class {
      constructor(t32, i42) {
        this.v = [], this._$AN = void 0, this._$AD = t32, this._$AM = i42;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      p(t32) {
        var i42;
        const { el: { content: s52 }, parts: e42 } = this._$AD, o52 = ((i42 = t32 == null ? void 0 : t32.creationScope) !== null && i42 !== void 0 ? i42 : u2).importNode(s52, true);
        V.currentNode = o52;
        let n52 = V.nextNode(), l42 = 0, h4 = 0, r42 = e42[0];
        for (; r42 !== void 0; ) {
          if (l42 === r42.index) {
            let i5;
            r42.type === 2 ? i5 = new k(n52, n52.nextSibling, this, t32) : r42.type === 1 ? i5 = new r42.ctor(n52, r42.name, r42.strings, this, t32) : r42.type === 6 && (i5 = new z(n52, this, t32)), this.v.push(i5), r42 = e42[++h4];
          }
          l42 !== (r42 == null ? void 0 : r42.index) && (n52 = V.nextNode(), l42++);
        }
        return o52;
      }
      m(t32) {
        let i42 = 0;
        for (const s52 of this.v)
          s52 !== void 0 && (s52.strings !== void 0 ? (s52._$AI(t32, s52, i42), i42 += s52.strings.length - 2) : s52._$AI(t32[i42])), i42++;
      }
    };
    var k = class {
      constructor(t32, i42, s52, e42) {
        this.type = 2, this._$C_ = true, this._$AN = void 0, this._$AA = t32, this._$AB = i42, this._$AM = s52, this.options = e42;
      }
      get _$AU() {
        var t32, i42;
        return (i42 = (t32 = this._$AM) === null || t32 === void 0 ? void 0 : t32._$AU) !== null && i42 !== void 0 ? i42 : this._$C_;
      }
      get parentNode() {
        return this._$AA.parentNode;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t32, i42 = this) {
        t32 = N(this, t32, i42), d(t32) ? t32 === A || t32 == null || t32 === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : t32 !== this._$AH && t32 !== w && this.$(t32) : t32._$litType$ !== void 0 ? this.T(t32) : t32.nodeType !== void 0 ? this.A(t32) : a2(t32) ? this.M(t32) : this.$(t32);
      }
      C(t32, i42 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t32, i42);
      }
      A(t32) {
        this._$AH !== t32 && (this._$AR(), this._$AH = this.C(t32));
      }
      $(t32) {
        const i42 = this._$AA.nextSibling;
        i42 !== null && i42.nodeType === 3 && (this._$AB === null ? i42.nextSibling === null : i42 === this._$AB.previousSibling) ? i42.data = t32 : this.A(u2.createTextNode(t32)), this._$AH = t32;
      }
      T(t32) {
        var i42;
        const { values: s52, _$litType$: e42 } = t32, o52 = typeof e42 == "number" ? this._$AC(t32) : (e42.el === void 0 && (e42.el = M.createElement(e42.h, this.options)), e42);
        if (((i42 = this._$AH) === null || i42 === void 0 ? void 0 : i42._$AD) === o52)
          this._$AH.m(s52);
        else {
          const t4 = new S2(o52, this), i5 = t4.p(this.options);
          t4.m(s52), this.A(i5), this._$AH = t4;
        }
      }
      _$AC(t32) {
        let i42 = C.get(t32.strings);
        return i42 === void 0 && C.set(t32.strings, i42 = new M(t32)), i42;
      }
      M(t32) {
        v(this._$AH) || (this._$AH = [], this._$AR());
        const i42 = this._$AH;
        let s52, e42 = 0;
        for (const o52 of t32)
          e42 === i42.length ? i42.push(s52 = new k(this.C(c()), this.C(c()), this, this.options)) : s52 = i42[e42], s52._$AI(o52), e42++;
        e42 < i42.length && (this._$AR(s52 && s52._$AB.nextSibling, e42), i42.length = e42);
      }
      _$AR(t32 = this._$AA.nextSibling, i42) {
        var s52;
        for ((s52 = this._$AP) === null || s52 === void 0 || s52.call(this, false, true, i42); t32 && t32 !== this._$AB; ) {
          const i5 = t32.nextSibling;
          t32.remove(), t32 = i5;
        }
      }
      setConnected(t32) {
        var i42;
        this._$AM === void 0 && (this._$C_ = t32, (i42 = this._$AP) === null || i42 === void 0 || i42.call(this, t32));
      }
    };
    var H = class {
      constructor(t32, i42, s52, e42, o52) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t32, this.name = i42, this._$AM = e42, this.options = o52, s52.length > 2 || s52[0] !== "" || s52[1] !== "" ? (this._$AH = Array(s52.length - 1).fill(A), this.strings = s52) : this._$AH = A;
      }
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t32, i42 = this, s52, e42) {
        const o52 = this.strings;
        let n52 = false;
        if (o52 === void 0)
          t32 = N(this, t32, i42, 0), n52 = !d(t32) || t32 !== this._$AH && t32 !== w, n52 && (this._$AH = t32);
        else {
          const e5 = t32;
          let l42, h4;
          for (t32 = o52[0], l42 = 0; l42 < o52.length - 1; l42++)
            h4 = N(this, e5[s52 + l42], i42, l42), h4 === w && (h4 = this._$AH[l42]), n52 || (n52 = !d(h4) || h4 !== this._$AH[l42]), h4 === A ? t32 = A : t32 !== A && (t32 += (h4 != null ? h4 : "") + o52[l42 + 1]), this._$AH[l42] = h4;
        }
        n52 && !e42 && this.P(t32);
      }
      P(t32) {
        t32 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t32 != null ? t32 : "");
      }
    };
    var I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      P(t32) {
        this.element[this.name] = t32 === A ? void 0 : t32;
      }
    };
    var L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      P(t32) {
        t32 && t32 !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
      }
    };
    var R = class extends H {
      constructor() {
        super(...arguments), this.type = 5;
      }
      _$AI(t32, i42 = this) {
        var s52;
        if ((t32 = (s52 = N(this, t32, i42, 0)) !== null && s52 !== void 0 ? s52 : A) === w)
          return;
        const e42 = this._$AH, o52 = t32 === A && e42 !== A || t32.capture !== e42.capture || t32.once !== e42.once || t32.passive !== e42.passive, n52 = t32 !== A && (e42 === A || o52);
        o52 && this.element.removeEventListener(this.name, this, e42), n52 && this.element.addEventListener(this.name, this, t32), this._$AH = t32;
      }
      handleEvent(t32) {
        var i42, s52;
        typeof this._$AH == "function" ? this._$AH.call((s52 = (i42 = this.options) === null || i42 === void 0 ? void 0 : i42.host) !== null && s52 !== void 0 ? s52 : this.element, t32) : this._$AH.handleEvent(t32);
      }
    };
    var z = class {
      constructor(t32, i42, s52) {
        this.element = t32, this.type = 6, this._$AN = void 0, this._$AM = i42, this.options = s52;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t32) {
        N(this, t32);
      }
    };
    (i22 = (t22 = globalThis).litHtmlPlatformSupport) === null || i22 === void 0 || i22.call(t22, M, k), ((s3 = (e3 = globalThis).litHtmlVersions) !== null && s3 !== void 0 ? s3 : e3.litHtmlVersions = []).push("2.0.0-rc.4");
    var i3;
    var l3;
    var o4;
    var s4;
    var n4;
    var a3;
    ((i3 = (a3 = globalThis).litElementVersions) !== null && i3 !== void 0 ? i3 : a3.litElementVersions = []).push("3.0.0-rc.2");
    var h3 = class extends a {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this.\u03A6t = void 0;
      }
      createRenderRoot() {
        var t32, e42;
        const r42 = super.createRenderRoot();
        return (t32 = (e42 = this.renderOptions).renderBefore) !== null && t32 !== void 0 || (e42.renderBefore = r42.firstChild), r42;
      }
      update(t32) {
        const r42 = this.render();
        super.update(t32), this.\u03A6t = P(r42, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        var t32;
        super.connectedCallback(), (t32 = this.\u03A6t) === null || t32 === void 0 || t32.setConnected(true);
      }
      disconnectedCallback() {
        var t32;
        super.disconnectedCallback(), (t32 = this.\u03A6t) === null || t32 === void 0 || t32.setConnected(false);
      }
      render() {
        return w;
      }
    };
    h3.finalized = true, h3._$litElement$ = true, (o4 = (l3 = globalThis).litElementHydrateSupport) === null || o4 === void 0 || o4.call(l3, { LitElement: h3 }), (n4 = (s4 = globalThis).litElementPlatformSupport) === null || n4 === void 0 || n4.call(s4, { LitElement: h3 });

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EU2ZI6CX.js
    var e23 = e(class extends i {
      constructor(t24) {
        var s6;
        if (super(t24), t24.type !== t.ATTRIBUTE || t24.name !== "class" || ((s6 = t24.strings) === null || s6 === void 0 ? void 0 : s6.length) > 2)
          throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
      }
      render(t24) {
        return Object.keys(t24).filter((s6) => t24[s6]).join(" ");
      }
      update(s6, [r6]) {
        if (this.st === void 0) {
          this.st = new Set();
          for (const t24 in r6)
            r6[t24] && this.st.add(t24);
          return this.render(r6);
        }
        const i23 = s6.element.classList;
        this.st.forEach((t24) => {
          t24 in r6 || (i23.remove(t24), this.st.delete(t24));
        });
        for (const t24 in r6) {
          const s22 = !!r6[t24];
          s22 !== this.st.has(t24) && (s22 ? (i23.add(t24), this.st.add(t24)) : (i23.remove(t24), this.st.delete(t24)));
        }
        return w;
      }
    });

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7SDWLJS.js
    var utility_styles_default = i2`
    .sl-scroll-lock {
      overflow: hidden !important;
    }

    .sl-toast-stack {
      position: fixed;
      top: 0;
      right: 0;
      z-index: var(--sl-z-index-toast);
      width: 28rem;
      max-width: 100%;
      max-height: 100%;
      overflow: auto;
    }

    .sl-toast-stack sl-alert {
      --box-shadow: var(--sl-shadow-large);
      margin: var(--sl-spacing-medium);
    }
  `;
    var component_styles_default = i2`
    :host {
      position: relative;
      box-sizing: border-box;
    }

    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }

    [hidden] {
      display: none !important;
    }
  `;
    var style = document.createElement("style");
    style.textContent = utility_styles_default.toString();
    document.head.append(style);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VRIBQCTO.js
    var n5 = (n32) => (e32) => typeof e32 == "function" ? ((n42, e42) => (window.customElements.define(n42, e42), e42))(n32, e32) : ((n42, e42) => {
      const { kind: t24, elements: i23 } = e42;
      return { kind: t24, elements: i23, finisher(e5) {
        window.customElements.define(n42, e5);
      } };
    })(n32, e32);
    var i4 = (i23, e32) => e32.kind === "method" && e32.descriptor && !("value" in e32.descriptor) ? __spreadProps2(__spreadValues2({}, e32), { finisher(n32) {
      n32.createProperty(e32.key, i23);
    } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e32.key, initializer() {
      typeof e32.initializer == "function" && (this[e32.key] = e32.initializer.call(this));
    }, finisher(n32) {
      n32.createProperty(e32.key, i23);
    } };
    function e4(e32) {
      return (n32, t24) => t24 !== void 0 ? ((i23, e42, n42) => {
        e42.constructor.createProperty(n42, i23);
      })(e32, n32, t24) : i4(e32, n32);
    }
    function r4(r22) {
      return e4(__spreadProps2(__spreadValues2({}, r22), { state: true, attribute: false }));
    }
    var o5 = ({ finisher: e32, descriptor: t24 }) => (o32, n32) => {
      var r22;
      if (n32 === void 0) {
        const n42 = (r22 = o32.originalKey) !== null && r22 !== void 0 ? r22 : o32.key, i23 = t24 != null ? { kind: "method", placement: "prototype", key: n42, descriptor: t24(o32.key) } : __spreadProps2(__spreadValues2({}, o32), { key: n42 });
        return e32 != null && (i23.finisher = function(t32) {
          e32(t32, n42);
        }), i23;
      }
      {
        const r32 = o32.constructor;
        t24 !== void 0 && Object.defineProperty(o32, n32, t24(n32)), e32 == null || e32(r32, n32);
      }
    };
    function o22(o32, r22) {
      return o5({ descriptor: (t24) => {
        const i23 = { get() {
          var t32;
          return (t32 = this.renderRoot) === null || t32 === void 0 ? void 0 : t32.querySelector(o32);
        }, enumerable: true, configurable: true };
        if (r22) {
          const r32 = typeof t24 == "symbol" ? Symbol() : "__" + t24;
          i23.get = function() {
            var t32;
            return this[r32] === void 0 && (this[r32] = (t32 = this.renderRoot) === null || t32 === void 0 ? void 0 : t32.querySelector(o32)), this[r32];
          };
        }
        return i23;
      } });
    }
    var t3 = Element.prototype;
    var n22 = t3.msMatchesSelector || t3.webkitMatchesSelector;

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R2DGBMZV.js
    var dropdown_styles_default = i2`
    ${component_styles_default}

    :host {
      display: inline-block;
    }

    .dropdown {
      position: relative;
    }

    .dropdown__trigger {
      display: block;
    }

    .dropdown__positioner {
      position: absolute;
      z-index: var(--sl-z-index-dropdown);
    }

    .dropdown__panel {
      max-height: 75vh;
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-medium);
      font-weight: var(--sl-font-weight-normal);
      color: var(--color);
      background-color: rgb(var(--sl-panel-background-color));
      border: solid 1px rgb(var(--sl-panel-border-color));
      border-radius: var(--sl-border-radius-medium);
      box-shadow: var(--sl-shadow-large);
      overflow: auto;
      overscroll-behavior: none;
      pointer-events: none;
    }

    .dropdown--open .dropdown__panel {
      pointer-events: all;
    }

    .dropdown__positioner[data-popper-placement^='top'] .dropdown__panel {
      transform-origin: bottom;
    }

    .dropdown__positioner[data-popper-placement^='bottom'] .dropdown__panel {
      transform-origin: top;
    }

    .dropdown__positioner[data-popper-placement^='left'] .dropdown__panel {
      transform-origin: right;
    }

    .dropdown__positioner[data-popper-placement^='right'] .dropdown__panel {
      transform-origin: left;
    }
  `;
    var id = 0;
    var SlDropdown = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `dropdown-${++id}`;
        this.open = false;
        this.placement = "bottom-start";
        this.disabled = false;
        this.stayOpenOnSelect = false;
        this.distance = 2;
        this.skidding = 0;
        this.hoist = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
        this.handlePanelSelect = this.handlePanelSelect.bind(this);
        this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
        if (!this.containingElement) {
          this.containingElement = this;
        }
        this.updateComplete.then(() => {
          this.popover = createPopper(this.trigger, this.positioner, {
            placement: this.placement,
            strategy: this.hoist ? "fixed" : "absolute",
            modifiers: [
              {
                name: "flip",
                options: {
                  boundary: "viewport"
                }
              },
              {
                name: "offset",
                options: {
                  offset: [this.skidding, this.distance]
                }
              }
            ]
          });
        });
      }
      firstUpdated() {
        this.panel.hidden = !this.open;
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.hide();
        this.popover.destroy();
      }
      focusOnTrigger() {
        const slot = this.trigger.querySelector("slot");
        const trigger = slot.assignedElements({ flatten: true })[0];
        if (trigger && typeof trigger.focus === "function") {
          trigger.focus();
        }
      }
      getMenu() {
        const slot = this.panel.querySelector("slot");
        return slot.assignedElements({ flatten: true }).filter((el) => el.tagName.toLowerCase() === "sl-menu")[0];
      }
      handleDocumentKeyDown(event2) {
        var _a2;
        if (event2.key === "Escape") {
          this.hide();
          this.focusOnTrigger();
          return;
        }
        if (event2.key === "Tab") {
          if (this.open && ((_a2 = document.activeElement) == null ? void 0 : _a2.tagName.toLowerCase()) === "sl-menu-item") {
            event2.preventDefault();
            this.hide();
            this.focusOnTrigger();
            return;
          }
          setTimeout(() => {
            var _a22, _b;
            const activeElement = this.containingElement.getRootNode() instanceof ShadowRoot ? (_b = (_a22 = document.activeElement) == null ? void 0 : _a22.shadowRoot) == null ? void 0 : _b.activeElement : document.activeElement;
            if ((activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
              this.hide();
              return;
            }
          });
        }
      }
      handleDocumentMouseDown(event2) {
        const path = event2.composedPath();
        if (!path.includes(this.containingElement)) {
          this.hide();
          return;
        }
      }
      handleMenuItemActivate(event2) {
        const item = event2.target;
        scrollIntoView(item, this.panel);
      }
      handlePanelSelect(event2) {
        const target = event2.target;
        if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
          this.hide();
          this.focusOnTrigger();
        }
      }
      handlePopoverOptionsChange() {
        if (this.popover) {
          this.popover.setOptions({
            placement: this.placement,
            strategy: this.hoist ? "fixed" : "absolute",
            modifiers: [
              {
                name: "flip",
                options: {
                  boundary: "viewport"
                }
              },
              {
                name: "offset",
                options: {
                  offset: [this.skidding, this.distance]
                }
              }
            ]
          });
        }
      }
      handleTriggerClick() {
        this.open ? this.hide() : this.show();
      }
      handleTriggerKeyDown(event2) {
        const menu = this.getMenu();
        const menuItems = menu ? [...menu.querySelectorAll("sl-menu-item")] : [];
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (event2.key === "Escape") {
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if ([" ", "Enter"].includes(event2.key)) {
          event2.preventDefault();
          this.open ? this.hide() : this.show();
          return;
        }
        if (["ArrowDown", "ArrowUp"].includes(event2.key)) {
          event2.preventDefault();
          if (!this.open) {
            this.show();
          }
          if (event2.key === "ArrowDown" && firstMenuItem) {
            const menu2 = this.getMenu();
            menu2.setCurrentItem(firstMenuItem);
            firstMenuItem.focus();
            return;
          }
          if (event2.key === "ArrowUp" && lastMenuItem) {
            menu.setCurrentItem(lastMenuItem);
            lastMenuItem.focus();
            return;
          }
        }
        const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
        if (this.open && menu && !ignoredKeys.includes(event2.key)) {
          menu.typeToSelect(event2.key);
          return;
        }
      }
      handleTriggerKeyUp(event2) {
        if (event2.key === " ") {
          event2.preventDefault();
        }
      }
      handleTriggerSlotChange() {
        this.updateAccessibleTrigger();
      }
      updateAccessibleTrigger() {
        if (this.trigger) {
          const slot = this.trigger.querySelector("slot");
          const assignedElements = slot.assignedElements({ flatten: true });
          const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
          if (accessibleTrigger) {
            accessibleTrigger.setAttribute("aria-haspopup", "true");
            accessibleTrigger.setAttribute("aria-expanded", this.open ? "true" : "false");
          }
        }
      }
      async show() {
        if (this.open) {
          return;
        }
        this.open = true;
        return waitForEvent(this, "sl-after-show");
      }
      async hide() {
        if (!this.open) {
          return;
        }
        this.open = false;
        return waitForEvent(this, "sl-after-hide");
      }
      reposition() {
        if (!this.open) {
          return;
        }
        this.popover.update();
      }
      async handleOpenChange() {
        if (this.disabled) {
          return;
        }
        this.updateAccessibleTrigger();
        if (this.open) {
          emit(this, "sl-show");
          this.panel.addEventListener("sl-activate", this.handleMenuItemActivate);
          this.panel.addEventListener("sl-select", this.handlePanelSelect);
          document.addEventListener("keydown", this.handleDocumentKeyDown);
          document.addEventListener("mousedown", this.handleDocumentMouseDown);
          await stopAnimations(this);
          this.popover.update();
          this.panel.hidden = false;
          const { keyframes, options } = getAnimation(this, "dropdown.show");
          await animateTo(this.panel, keyframes, options);
          emit(this, "sl-after-show");
        } else {
          emit(this, "sl-hide");
          this.panel.removeEventListener("sl-activate", this.handleMenuItemActivate);
          this.panel.removeEventListener("sl-select", this.handlePanelSelect);
          document.removeEventListener("keydown", this.handleDocumentKeyDown);
          document.removeEventListener("mousedown", this.handleDocumentMouseDown);
          await stopAnimations(this);
          const { keyframes, options } = getAnimation(this, "dropdown.hide");
          await animateTo(this.panel, keyframes, options);
          this.panel.hidden = true;
          emit(this, "sl-after-hide");
        }
      }
      render() {
        return T`
        <div
          part="base"
          id=${this.componentId}
          class=${e23({
          dropdown: true,
          "dropdown--open": this.open
        })}
        >
          <span
            part="trigger"
            class="dropdown__trigger"
            @click=${this.handleTriggerClick}
            @keydown=${this.handleTriggerKeyDown}
            @keyup=${this.handleTriggerKeyUp}
          >
            <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
          </span>

          <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
          on the panel without interfering with the position. -->
          <div class="dropdown__positioner">
            <div
              part="panel"
              class="dropdown__panel"
              role="menu"
              aria-hidden=${this.open ? "false" : "true"}
              aria-labelledby=${this.componentId}
            >
              <slot></slot>
            </div>
          </div>
        </div>
      `;
      }
    };
    SlDropdown.styles = dropdown_styles_default;
    __decorateClass2([
      o22(".dropdown__trigger")
    ], SlDropdown.prototype, "trigger", 2);
    __decorateClass2([
      o22(".dropdown__panel")
    ], SlDropdown.prototype, "panel", 2);
    __decorateClass2([
      o22(".dropdown__positioner")
    ], SlDropdown.prototype, "positioner", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlDropdown.prototype, "open", 2);
    __decorateClass2([
      e4()
    ], SlDropdown.prototype, "placement", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlDropdown.prototype, "disabled", 2);
    __decorateClass2([
      e4({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
    ], SlDropdown.prototype, "stayOpenOnSelect", 2);
    __decorateClass2([
      e4({ attribute: false })
    ], SlDropdown.prototype, "containingElement", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlDropdown.prototype, "distance", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlDropdown.prototype, "skidding", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlDropdown.prototype, "hoist", 2);
    __decorateClass2([
      watch2("distance"),
      watch2("hoist"),
      watch2("placement"),
      watch2("skidding")
    ], SlDropdown.prototype, "handlePopoverOptionsChange", 1);
    __decorateClass2([
      watch2("open", { waitUntilFirstUpdate: true })
    ], SlDropdown.prototype, "handleOpenChange", 1);
    SlDropdown = __decorateClass2([
      n5("sl-dropdown")
    ], SlDropdown);
    var dropdown_default = SlDropdown;
    setDefaultAnimation("dropdown.show", {
      keyframes: [
        { opacity: 0, transform: "scale(0.9)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      options: { duration: 150, easing: "ease" }
    });
    setDefaultAnimation("dropdown.hide", {
      keyframes: [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.9)" }
      ],
      options: { duration: 150, easing: "ease" }
    });

    // src/medblocks/codedtext/dropdown.ts
    var MbDropDown = class extends dropdown_default {
      handleTriggerKeyDown(event2) {
        const menu = this.getMenu();
        const menuItems = menu ? [...menu.querySelectorAll("sl-menu-item")] : [];
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (event2.key === "Escape") {
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if (["Enter"].includes(event2.key)) {
          event2.preventDefault();
          this.open ? this.hide() : this.show();
          return;
        }
        if (["ArrowDown", "ArrowUp"].includes(event2.key)) {
          event2.preventDefault();
          if (!this.open) {
            this.show();
          }
          if (event2.key === "ArrowDown" && firstMenuItem) {
            const menu2 = this.getMenu();
            menu2.setCurrentItem(firstMenuItem);
            firstMenuItem.focus();
            return;
          }
          if (event2.key === "ArrowUp" && lastMenuItem) {
            menu.setCurrentItem(lastMenuItem);
            lastMenuItem.focus();
            return;
          }
        }
        const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
        if (this.open && menu && !ignoredKeys.includes(event2.key)) {
          menu.typeToSelect(event2.key);
          return;
        }
      }
    };
    MbDropDown = __decorateClass([
      customElement("mb-dropdown")
    ], MbDropDown);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Z2K22P7T.js
    var spinner_styles_default = i2`
    ${component_styles_default}

    :host {
      --track-color: rgb(var(--sl-color-neutral-500) / 20%);
      --indicator-color: rgb(var(--sl-color-primary-600));
      --stroke-width: 2px;

      display: inline-flex;
      width: 1em;
      height: 1em;
    }

    .spinner {
      flex: 1 1 auto;
      border-radius: 50%;
      border: solid var(--stroke-width) var(--track-color);
      border-top-color: var(--indicator-color);
      border-right-color: var(--indicator-color);
      animation: 1s linear infinite spin;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
    var SlSpinner = class extends h3 {
      render() {
        return T` <span part="base" class="spinner" aria-busy="true" aria-live="polite"></span> `;
      }
    };
    SlSpinner.styles = spinner_styles_default;
    SlSpinner = __decorateClass2([
      n5("sl-spinner")
    ], SlSpinner);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IBDZI3K2.js
    function getTextContent(slot) {
      const nodes = slot ? slot.assignedNodes({ flatten: true }) : [];
      let text = "";
      [...nodes].map((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        }
      });
      return text;
    }
    function hasSlot(el, name) {
      if (name) {
        return el.querySelector(`:scope > [slot="${name}"]`) !== null;
      }
      return [...el.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el2 = node;
          if (!el2.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NEDSBZ5B.js
    var hasFocusVisible = (() => {
      const style2 = document.createElement("style");
      let isSupported;
      try {
        document.head.appendChild(style2);
        style2.sheet.insertRule(":focus-visible { color: inherit }");
        isSupported = true;
      } catch (e5) {
        isSupported = false;
      } finally {
        style2.remove();
      }
      return isSupported;
    })();
    var focusVisibleSelector = r(hasFocusVisible ? ":focus-visible" : ":focus");

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MIWEKEUB.js
    var menu_styles_default = i2`
    ${component_styles_default}

    :host {
      display: block;
    }

    .menu {
      padding: var(--sl-spacing-x-small) 0;
    }
  `;
    var SlMenu = class extends h3 {
      constructor() {
        super(...arguments);
        this.typeToSelectString = "";
      }
      getAllItems(options = { includeDisabled: true }) {
        return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
          if (el.getAttribute("role") !== "menuitem") {
            return false;
          }
          if (!(options == null ? void 0 : options.includeDisabled) && el.disabled) {
            return false;
          }
          return true;
        });
      }
      getCurrentItem() {
        return this.getAllItems({ includeDisabled: false }).find((i23) => i23.getAttribute("tabindex") === "0");
      }
      setCurrentItem(item) {
        const items = this.getAllItems({ includeDisabled: false });
        let activeItem = item.disabled ? items[0] : item;
        items.map((i23) => i23.setAttribute("tabindex", i23 === activeItem ? "0" : "-1"));
      }
      typeToSelect(key) {
        const items = this.getAllItems({ includeDisabled: false });
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = setTimeout(() => this.typeToSelectString = "", 750);
        this.typeToSelectString += key.toLowerCase();
        if (!hasFocusVisible) {
          items.map((item) => item.classList.remove("sl-focus-invisible"));
        }
        for (const item of items) {
          const slot = item.shadowRoot.querySelector("slot:not([name])");
          const label = getTextContent(slot).toLowerCase().trim();
          if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
            this.setCurrentItem(item);
            item.focus();
            break;
          }
        }
      }
      handleClick(event2) {
        const target = event2.target;
        const item = target.closest("sl-menu-item");
        if (item && !item.disabled) {
          emit(this, "sl-select", { detail: { item } });
        }
      }
      handleKeyUp() {
        if (!hasFocusVisible) {
          const items = this.getAllItems();
          items.map((item) => item.classList.remove("sl-focus-invisible"));
        }
      }
      handleKeyDown(event2) {
        if (event2.key === "Enter") {
          const item = this.getCurrentItem();
          event2.preventDefault();
          if (item) {
            item.click();
          }
        }
        if (event2.key === " ") {
          event2.preventDefault();
        }
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event2.key)) {
          const items = this.getAllItems({ includeDisabled: false });
          const activeItem = this.getCurrentItem();
          let index = activeItem ? items.indexOf(activeItem) : 0;
          if (items.length) {
            event2.preventDefault();
            if (event2.key === "ArrowDown") {
              index++;
            } else if (event2.key === "ArrowUp") {
              index--;
            } else if (event2.key === "Home") {
              index = 0;
            } else if (event2.key === "End") {
              index = items.length - 1;
            }
            if (index < 0)
              index = 0;
            if (index > items.length - 1)
              index = items.length - 1;
            this.setCurrentItem(items[index]);
            items[index].focus();
            return;
          }
        }
        this.typeToSelect(event2.key);
      }
      handleMouseDown(event2) {
        const target = event2.target;
        if (target.getAttribute("role") === "menuitem") {
          this.setCurrentItem(target);
          if (!hasFocusVisible) {
            target.classList.add("sl-focus-invisible");
          }
        }
      }
      handleSlotChange() {
        const items = this.getAllItems({ includeDisabled: false });
        if (items.length) {
          this.setCurrentItem(items[0]);
        }
      }
      render() {
        return T`
        <div
          part="base"
          class="menu"
          role="menu"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
          @keyup=${this.handleKeyUp}
          @mousedown=${this.handleMouseDown}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      `;
      }
    };
    SlMenu.styles = menu_styles_default;
    __decorateClass2([
      o22(".menu")
    ], SlMenu.prototype, "menu", 2);
    __decorateClass2([
      o22("slot")
    ], SlMenu.prototype, "defaultSlot", 2);
    SlMenu = __decorateClass2([
      n5("sl-menu")
    ], SlMenu);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMXMMBVI.js
    var menu_item_styles_default = i2`
    ${component_styles_default}

    :host {
      display: block;
    }

    .menu-item {
      position: relative;
      display: flex;
      align-items: stretch;
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-medium);
      font-weight: var(--sl-font-weight-normal);
      line-height: var(--sl-line-height-normal);
      letter-spacing: var(--sl-letter-spacing-normal);
      text-align: left;
      color: rgb(var(--sl-color-neutral-700));
      padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
      transition: var(--sl-transition-fast) fill;
      user-select: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .menu-item.menu-item--disabled {
      outline: none;
      color: rgb(var(--sl-color-neutral-400));
      cursor: not-allowed;
    }

    .menu-item .menu-item__label {
      flex: 1 1 auto;
    }

    .menu-item .menu-item__prefix {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
    }

    .menu-item .menu-item__prefix ::slotted(*) {
      margin-right: var(--sl-spacing-x-small);
    }

    .menu-item .menu-item__suffix {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
    }

    .menu-item .menu-item__suffix ::slotted(*) {
      margin-left: var(--sl-spacing-x-small);
    }

    :host(:focus) {
      outline: none;
    }

    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(${focusVisibleSelector}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
      outline: none;
      background-color: rgb(var(--sl-color-primary-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    .menu-item .menu-item__check {
      display: flex;
      position: absolute;
      left: 0.5em;
      top: calc(50% - 0.5em);
      visibility: hidden;
      align-items: center;
      font-size: inherit;
    }

    .menu-item--checked .menu-item__check {
      visibility: visible;
    }
  `;
    var SlMenuItem = class extends h3 {
      constructor() {
        super(...arguments);
        this.checked = false;
        this.value = "";
        this.disabled = false;
      }
      firstUpdated() {
        this.setAttribute("role", "menuitem");
      }
      handleCheckedChange() {
        this.setAttribute("aria-checked", String(this.checked));
      }
      handleDisabledChange() {
        this.setAttribute("aria-disabled", String(this.disabled));
      }
      render() {
        return T`
        <div
          part="base"
          class=${e23({
          "menu-item": true,
          "menu-item--checked": this.checked,
          "menu-item--disabled": this.disabled
        })}
        >
          <sl-icon
            part="checked-icon"
            class="menu-item__check"
            name="check"
            library="system"
            aria-hidden="true"
          ></sl-icon>

          <span part="prefix" class="menu-item__prefix">
            <slot name="prefix"></slot>
          </span>

          <span part="label" class="menu-item__label">
            <slot></slot>
          </span>

          <span part="suffix" class="menu-item__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>
      `;
      }
    };
    SlMenuItem.styles = menu_item_styles_default;
    __decorateClass2([
      o22(".menu-item")
    ], SlMenuItem.prototype, "menuItem", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlMenuItem.prototype, "checked", 2);
    __decorateClass2([
      e4()
    ], SlMenuItem.prototype, "value", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlMenuItem.prototype, "disabled", 2);
    __decorateClass2([
      watch2("checked")
    ], SlMenuItem.prototype, "handleCheckedChange", 1);
    __decorateClass2([
      watch2("disabled")
    ], SlMenuItem.prototype, "handleDisabledChange", 1);
    SlMenuItem = __decorateClass2([
      n5("sl-menu-item")
    ], SlMenuItem);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ARRH633M.js
    var iconFiles = new Map();
    var requestIcon = (url) => {
      if (iconFiles.has(url)) {
        return iconFiles.get(url);
      } else {
        const request = fetch(url).then(async (response) => {
          if (response.ok) {
            const div = document.createElement("div");
            div.innerHTML = await response.text();
            const svg2 = div.firstElementChild;
            return {
              ok: response.ok,
              status: response.status,
              svg: svg2 && svg2.tagName.toLowerCase() === "svg" ? svg2.outerHTML : ""
            };
          } else {
            return {
              ok: response.ok,
              status: response.status,
              svg: null
            };
          }
        });
        iconFiles.set(url, request);
        return request;
      }
    };

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RNAEAUQW.js
    var n23 = class extends i {
      constructor(i32) {
        if (super(i32), this.it = A, i32.type !== t.CHILD)
          throw Error(this.constructor.directiveName + "() can only be used in child bindings");
      }
      render(r22) {
        if (r22 === A)
          return this.vt = void 0, this.it = r22;
        if (r22 === w)
          return r22;
        if (typeof r22 != "string")
          throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r22 === this.it)
          return this.vt;
        this.it = r22;
        const s6 = [r22];
        return s6.raw = s6, this.vt = { _$litType$: this.constructor.resultType, strings: s6, values: [] };
      }
    };
    n23.directiveName = "unsafeHTML", n23.resultType = 1;
    var o6 = e(n23);
    var t23 = class extends n23 {
    };
    t23.directiveName = "unsafeSVG", t23.resultType = 2;
    var o23 = e(t23);
    var icon_styles_default = i2`
    ${component_styles_default}

    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
      contain: strict;
      box-sizing: content-box !important;
    }

    .icon,
    svg {
      display: block;
      height: 100%;
      width: 100%;
    }
  `;
    var parser = new DOMParser();
    var SlIcon = class extends h3 {
      constructor() {
        super(...arguments);
        this.svg = "";
        this.library = "default";
      }
      connectedCallback() {
        super.connectedCallback();
        watchIcon(this);
      }
      firstUpdated() {
        this.setIcon();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        unwatchIcon(this);
      }
      getLabel() {
        let label = "";
        if (this.label) {
          label = this.label;
        } else if (this.name) {
          label = this.name.replace(/-/g, " ");
        } else if (this.src) {
          label = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
        }
        return label;
      }
      getUrl() {
        const library2 = getIconLibrary(this.library);
        if (this.name && library2) {
          return library2.resolver(this.name);
        } else {
          return this.src;
        }
      }
      redraw() {
        this.setIcon();
      }
      async setIcon() {
        const library2 = getIconLibrary(this.library);
        const url = this.getUrl();
        if (url) {
          try {
            const file = await requestIcon(url);
            if (url !== this.getUrl()) {
              return;
            } else if (file.ok) {
              const doc = parser.parseFromString(file.svg, "text/html");
              const svgEl = doc.body.querySelector("svg");
              if (svgEl) {
                if (library2 && library2.mutator) {
                  library2.mutator(svgEl);
                }
                this.svg = svgEl.outerHTML;
                emit(this, "sl-load");
              } else {
                this.svg = "";
                emit(this, "sl-error", { detail: { status: file.status } });
              }
            } else {
              this.svg = "";
              emit(this, "sl-error", { detail: { status: file.status } });
            }
          } catch (e32) {
            emit(this, "sl-error", { detail: { status: -1 } });
          }
        } else if (this.svg) {
          this.svg = "";
        }
      }
      handleChange() {
        this.setIcon();
      }
      render() {
        return T` <div part="base" class="icon" role="img" aria-label=${this.getLabel()}>${o23(this.svg)}</div>`;
      }
    };
    SlIcon.styles = icon_styles_default;
    __decorateClass2([
      r4()
    ], SlIcon.prototype, "svg", 2);
    __decorateClass2([
      e4()
    ], SlIcon.prototype, "name", 2);
    __decorateClass2([
      e4()
    ], SlIcon.prototype, "src", 2);
    __decorateClass2([
      e4()
    ], SlIcon.prototype, "label", 2);
    __decorateClass2([
      e4()
    ], SlIcon.prototype, "library", 2);
    __decorateClass2([
      watch2("name"),
      watch2("src"),
      watch2("library")
    ], SlIcon.prototype, "setIcon", 1);
    SlIcon = __decorateClass2([
      n5("sl-icon")
    ], SlIcon);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TEQ2YUZY.js
    var tag_styles_default = i2`
    ${component_styles_default}

    :host {
      display: inline-block;
    }

    .tag {
      display: flex;
      align-items: center;
      border: solid 1px;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      cursor: default;
    }

    .tag__clear::part(base) {
      color: inherit;
      padding: 0;
    }

    /*
    * Type modifiers
    */

    .tag--primary {
      background-color: rgb(var(--sl-color-primary-50));
      border-color: rgb(var(--sl-color-primary-200));
      color: rgb(var(--sl-color-primary-800));
    }

    .tag--success {
      background-color: rgb(var(--sl-color-success-50));
      border-color: rgb(var(--sl-color-success-200));
      color: rgb(var(--sl-color-success-800));
    }

    .tag--neutral {
      background-color: rgb(var(--sl-color-neutral-50));
      border-color: rgb(var(--sl-color-neutral-200));
      color: rgb(var(--sl-color-neutral-800));
    }

    .tag--warning {
      background-color: rgb(var(--sl-color-warning-50));
      border-color: rgb(var(--sl-color-warning-200));
      color: rgb(var(--sl-color-warning-800));
    }

    .tag--danger {
      background-color: rgb(var(--sl-color-danger-50));
      border-color: rgb(var(--sl-color-danger-200));
      color: rgb(var(--sl-color-danger-800));
    }

    /*
    * Size modifiers
    */

    .tag--small {
      font-size: var(--sl-button-font-size-small);
      height: calc(var(--sl-input-height-small) * 0.8);
      line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
      border-radius: var(--sl-input-border-radius-small);
      padding: 0 var(--sl-spacing-x-small);
    }

    .tag--small .tag__clear {
      margin-left: var(--sl-spacing-xx-small);
      margin-right: calc(-1 * var(--sl-spacing-xxx-small));
    }

    .tag--medium {
      font-size: var(--sl-button-font-size-medium);
      height: calc(var(--sl-input-height-medium) * 0.8);
      line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
      border-radius: var(--sl-input-border-radius-medium);
      padding: 0 var(--sl-spacing-small);
    }

    .tag__clear {
      margin-left: var(--sl-spacing-xx-small);
      margin-right: calc(-1 * var(--sl-spacing-xx-small));
    }

    .tag--large {
      font-size: var(--sl-button-font-size-large);
      height: calc(var(--sl-input-height-large) * 0.8);
      line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
      border-radius: var(--sl-input-border-radius-large);
      padding: 0 var(--sl-spacing-medium);
    }

    .tag__clear {
      margin-left: var(--sl-spacing-xx-small);
      margin-right: calc(-1 * var(--sl-spacing-x-small));
    }

    /*
    * Pill modifier
    */

    .tag--pill {
      border-radius: var(--sl-border-radius-pill);
    }
  `;
    var SlTag = class extends h3 {
      constructor() {
        super(...arguments);
        this.type = "primary";
        this.size = "medium";
        this.pill = false;
        this.clearable = false;
      }
      handleClearClick() {
        emit(this, "sl-clear");
      }
      render() {
        return T`
        <span
          part="base"
          class=${e23({
          tag: true,
          "tag--primary": this.type === "primary",
          "tag--success": this.type === "success",
          "tag--neutral": this.type === "neutral",
          "tag--warning": this.type === "warning",
          "tag--danger": this.type === "danger",
          "tag--text": this.type === "text",
          "tag--small": this.size === "small",
          "tag--medium": this.size === "medium",
          "tag--large": this.size === "large",
          "tag--pill": this.pill,
          "tag--clearable": this.clearable
        })}
        >
          <span part="content" class="tag__content">
            <slot></slot>
          </span>

          ${this.clearable ? T`
                <sl-icon-button
                  exportparts="base:clear-button"
                  name="x"
                  library="system"
                  class="tag__clear"
                  @click=${this.handleClearClick}
                ></sl-icon-button>
              ` : ""}
        </span>
      `;
      }
    };
    SlTag.styles = tag_styles_default;
    __decorateClass2([
      e4({ reflect: true })
    ], SlTag.prototype, "type", 2);
    __decorateClass2([
      e4({ reflect: true })
    ], SlTag.prototype, "size", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlTag.prototype, "pill", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlTag.prototype, "clearable", 2);
    SlTag = __decorateClass2([
      n5("sl-tag")
    ], SlTag);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SSOOZAWV.js
    var l4 = (l22) => l22 != null ? l22 : A;

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.L66N6Z3T.js
    var icon_button_styles_default = i2`
    ${component_styles_default}

    :host {
      display: inline-block;
    }

    .icon-button {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      background: none;
      border: none;
      border-radius: var(--sl-border-radius-medium);
      font-size: inherit;
      color: rgb(var(--sl-color-neutral-600));
      padding: var(--sl-spacing-x-small);
      cursor: pointer;
      transition: var(--sl-transition-medium) color;
      -webkit-appearance: none;
    }

    .icon-button:hover:not(.icon-button--disabled),
    .icon-button:focus:not(.icon-button--disabled) {
      color: rgb(var(--sl-color-primary-600));
    }

    .icon-button:active:not(.icon-button--disabled) {
      color: rgb(var(--sl-color-primary-700));
    }

    .icon-button:focus {
      outline: none;
    }

    .icon-button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .icon-button${focusVisibleSelector} {
      box-shadow: var(--sl-focus-ring);
    }
  `;
    var SlIconButton = class extends h3 {
      constructor() {
        super(...arguments);
        this.label = "";
        this.disabled = false;
      }
      render() {
        const isLink = this.href ? true : false;
        const interior = T`
        <sl-icon
          name=${l4(this.name)}
          library=${l4(this.library)}
          src=${l4(this.src)}
          aria-hidden="true"
        ></sl-icon>
      `;
        return isLink ? T`
            <a
              part="base"
              class="icon-button"
              href=${l4(this.href)}
              target=${l4(this.target)}
              download=${l4(this.download)}
              rel=${l4(this.target ? "noreferrer noopener" : void 0)}
              role="button"
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-label="${this.label}"
              tabindex=${this.disabled ? "-1" : "0"}
            >
              ${interior}
            </a>
          ` : T`
            <button
              part="base"
              class=${e23({
          "icon-button": true,
          "icon-button--disabled": this.disabled
        })}
              ?disabled=${this.disabled}
              type="button"
              aria-label=${this.label}
            >
              ${interior}
            </button>
          `;
      }
    };
    SlIconButton.styles = icon_button_styles_default;
    __decorateClass2([
      o22("button")
    ], SlIconButton.prototype, "button", 2);
    __decorateClass2([
      e4()
    ], SlIconButton.prototype, "name", 2);
    __decorateClass2([
      e4()
    ], SlIconButton.prototype, "library", 2);
    __decorateClass2([
      e4()
    ], SlIconButton.prototype, "src", 2);
    __decorateClass2([
      e4()
    ], SlIconButton.prototype, "href", 2);
    __decorateClass2([
      e4()
    ], SlIconButton.prototype, "target", 2);
    __decorateClass2([
      e4()
    ], SlIconButton.prototype, "download", 2);
    __decorateClass2([
      e4()
    ], SlIconButton.prototype, "label", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlIconButton.prototype, "disabled", 2);
    SlIconButton = __decorateClass2([
      n5("sl-icon-button")
    ], SlIconButton);

    // src/medblocks/codedtext/searchFunctions.ts
    function joinSnomedConstraints(filters) {
      if ((filters == null ? void 0 : filters.length) > 0) {
        return filters.join(" OR ");
      } else {
        return;
      }
    }
    var hermesPlugin = async (options) => {
      const { searchString, axios, constraint, maxHits } = options;
      const response = await axios.get("/snomed/search", {
        params: {
          s: searchString,
          maxHits,
          constraint
        }
      });
      return response.data.map((term) => ({
        value: term.conceptId,
        label: term.term
      }));
    };

    // src/medblocks/codedtext/search.ts
    var MbSearch = class extends CodedTextElement {
      constructor() {
        super(...arguments);
        this._cancelledFilters = [];
        this.mock = [];
        this.debounceInterval = 150;
        this.hits = 10;
        this.parentAxiosKey = "hermes";
        this.plugin = {
          search: hermesPlugin,
          getConstraints: joinSnomedConstraints
        };
        this._moreHits = 0;
        this._debouncing = false;
      }
      get _maxHits() {
        return this.hits + this._moreHits;
      }
      _searchTermChange() {
        clearTimeout(this._debounceTimeout);
        this._debouncing = true;
        this._debounceTimeout = window.setTimeout(() => {
          this._debouncing = false;
        }, this.debounceInterval);
      }
      _handleInput(e5) {
        const inputElement = e5.target;
        this.searchTerm = inputElement.value;
        const dropdown = this.renderRoot.querySelector("mb-dropdown");
        dropdown.show();
      }
      get _constraint() {
        var _a2, _b, _c;
        const filters = (_b = (_a2 = this._filters) == null ? void 0 : _a2.filter((filter) => !filter.disabled)) == null ? void 0 : _b.map((filter) => filter.value);
        return (_c = this.plugin) == null ? void 0 : _c.getConstraints(filters);
      }
      get _viewMore() {
        return html` <div class="more">
        <sl-button
          type="text"
          @click=${() => {
          this._moreHits += 10;
        }}
        >
          <sl-icon name="caret-down-fill" slot="prefix"></sl-icon>More</sl-button
        >
        ${this._maxHits > this.hits ? html`<sl-button
              type="text"
              @click=${() => {
          this._moreHits -= 10;
        }}
            >
              <sl-icon name="caret-up-fill" slot="prefix"></sl-icon
              >Less</sl-button
            >` : null}
      </div>`;
      }
      get _parentAxios() {
        const dependencyEvent = this._mbDependency.emit({
          detail: { key: this.parentAxiosKey }
        });
        return dependencyEvent.detail.value;
      }
      async getResults() {
        if (this._debouncing) {
          return this._loadingResults;
        }
        if (this.mock.length) {
          return this.mock.map((r6) => html`<sl-menu-item value=${r6} .label=${r6}>${r6}</sl-menu-item>`);
        }
        if (!this.searchTerm) {
          return [];
        }
        try {
          const axios = this.axios ? this.axios : this._parentAxios;
          const result = await this.plugin.search({
            maxHits: this._maxHits,
            searchString: this.searchTerm,
            axios,
            constraint: this._constraint
          });
          const results = result.map((r6) => html`
              <sl-menu-item
                value=${r6.value}
                .label=${r6.label}
                .terminology=${this.terminology}
              >
                ${r6.star ? html`<sl-icon slot="suffix" name="star"></sl-icon>` : null}
                ${r6.label}
              </sl-menu-item>
            `);
          if ((results == null ? void 0 : results.length) === 0) {
            return html`<sl-menu-item disabled>No results</sl-menu-item>`;
          }
          return this._maxHits === results.length ? [...results, this._viewMore] : results;
        } catch (e5) {
          console.error(e5);
          return html`
          <sl-menu-item disabled>
            <sl-icon name="exclamation-triangle" slot="prefix"></sl-icon>
            An unexpected error occured
          </sl-menu-item>
        `;
        }
      }
      get _loadingResults() {
        const skeletons = 5;
        return html`${[...Array(skeletons)].map(() => html` <sl-menu-item disabled class="loading">
          <sl-skeleton effect="sheen"></sl-skeleton>
        </sl-menu-item>`)}`;
      }
      _handleSelect(e5) {
        const menuItem = e5.detail.item;
        this.data = {
          value: menuItem.label,
          code: menuItem.value,
          terminology: this.terminology
        };
        this._mbInput.emit();
      }
      connectedCallback() {
        super.connectedCallback();
        const observer = new MutationObserver(() => {
          this._handleChildChange();
        });
        observer.observe(this, {
          childList: true,
          subtree: true,
          attributes: true
        });
      }
      _handleChildChange() {
        this._filters = [
          ...this.querySelectorAll("mb-filter")
        ];
      }
      _handleClear() {
        this.data = void 0;
        this._moreHits = 0;
        this._mbInput.emit();
      }
      get _hasValue() {
        var _a2, _b;
        return ((_a2 = this == null ? void 0 : this.data) == null ? void 0 : _a2.value) && ((_b = this == null ? void 0 : this.data) == null ? void 0 : _b.code) ? true : false;
      }
      get _display() {
        var _a2;
        return this._hasValue ? (_a2 = this.data) == null ? void 0 : _a2.value : void 0;
      }
      get _code() {
        var _a2;
        return this._hasValue ? (_a2 = this.data) == null ? void 0 : _a2.code : void 0;
      }
      render() {
        var _a2, _b, _c;
        return html`
        <mb-dropdown
          .focusKeys=${["Enter"]}
          .typeToSelect=${false}
          @sl-after-hide=${() => {
          this._cancelledFilters = [];
        }}
        >
          <sl-input
            class=${classMap({ pointer: this._hasValue })}
            slot="trigger"
            .label=${this.label || ""}
            @sl-input=${this._handleInput}
            value=${ifDefined((_b = (_a2 = this._display) != null ? _a2 : this.searchTerm) != null ? _b : "")}
            ?readonly=${this._hasValue}
            ?clearable=${this._hasValue}
            @sl-clear=${this._handleClear}
            placeholder="Type to search"
          >
            ${this._hasValue ? null : html`<sl-icon
                  library="medblocks"
                  name="search"
                  slot="prefix"
                ></sl-icon>`}
          </sl-input>
          ${this._hasValue || !this.searchTerm ? null : html`
                <sl-menu
                  style="min-width: 300px"
                  @sl-select=${this._handleSelect}
                >
                  ${until(this.getResults())}
                  ${((_c = this._filters) == null ? void 0 : _c.length) > 0 ? html`<div class="tags">
                        ${this._filters.map((f3) => html`<sl-tag
                              ?clearable=${!f3.disabled}
                              size="medium"
                              type=${f3.disabled ? "info" : "primary"}
                              @click=${() => {
          f3.disabled = !f3.disabled;
        }}
                              >${f3.label}</sl-tag
                            >`)}
                      </div>` : null}
                </sl-menu>
              `}
        </mb-dropdown>
        <slot @slotchange=${this._handleChildChange}></slot>
      `;
      }
    };
    MbSearch.styles = css`
      :host,
      mb-dropdown {
        display: block;
      }

      sl-input.pointer::part(base) {
        cursor: default;
      }

      .tags {
        padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
      }

      .more {
        display: flex;
        justify-content: space-between;
        padding: var(--sl-spacing-xxx-small) var(--sl-spacing-small);
      }
      .tags sl-tag {
        padding: var(--sl-spacing-xx-small);
      }

      sl-tag::part(base) {
        cursor: pointer;
      }
    `;
    __decorateClass([
      property({ type: String })
    ], MbSearch.prototype, "searchTerm", 2);
    __decorateClass([
      property({ type: Array })
    ], MbSearch.prototype, "_filters", 2);
    __decorateClass([
      property({ type: Array })
    ], MbSearch.prototype, "_cancelledFilters", 2);
    __decorateClass([
      property({ type: Array })
    ], MbSearch.prototype, "mock", 2);
    __decorateClass([
      property({ type: Object })
    ], MbSearch.prototype, "axios", 2);
    __decorateClass([
      property({ type: Number })
    ], MbSearch.prototype, "debounceInterval", 2);
    __decorateClass([
      property({ type: Number })
    ], MbSearch.prototype, "hits", 2);
    __decorateClass([
      property({ type: String })
    ], MbSearch.prototype, "parentAxiosKey", 2);
    __decorateClass([
      property({ type: Object })
    ], MbSearch.prototype, "plugin", 2);
    __decorateClass([
      state()
    ], MbSearch.prototype, "_moreHits", 2);
    __decorateClass([
      state()
    ], MbSearch.prototype, "_debouncing", 2);
    __decorateClass([
      state()
    ], MbSearch.prototype, "_debounceTimeout", 2);
    __decorateClass([
      watch("searchTerm")
    ], MbSearch.prototype, "_searchTermChange", 1);
    MbSearch = __decorateClass([
      customElement("mb-search")
    ], MbSearch);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ITPQKBCZ.js
    var renderFormControl = (props, input) => {
      const hasLabel = props.label ? true : !!props.hasLabelSlot;
      const hasHelpText = props.helpText ? true : !!props.hasHelpTextSlot;
      return T`
      <div
        part="form-control"
        class=${e23({
        "form-control": true,
        "form-control--small": props.size === "small",
        "form-control--medium": props.size === "medium",
        "form-control--large": props.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          part="label"
          id=${l4(props.labelId)}
          class="form-control__label"
          for=${props.inputId}
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${(event2) => props.onLabelClick ? props.onLabelClick(event2) : null}
        >
          <slot name="label">${props.label}</slot>
        </label>

        <div class="form-control__input">${T`${input}`}</div>

        <div
          part="help-text"
          id=${l4(props.helpTextId)}
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${props.helpText}</slot>
        </div>
      </div>
    `;
    };
    function getLabelledBy(props) {
      const labelledBy = [
        props.label || props.hasLabelSlot ? props.labelId : "",
        props.helpText || props.hasHelpTextSlot ? props.helpTextId : ""
      ].filter((val) => val);
      return labelledBy.join(" ") || void 0;
    }
    var form_control_styles_default = i2`
    .form-control .form-control__label {
      display: none;
    }

    .form-control .form-control__help-text {
      display: none;
    }

    /* Label */
    .form-control--has-label .form-control__label {
      display: inline-block;
      color: var(--sl-input-label-color);
      margin-bottom: var(--sl-spacing-xxx-small);
    }

    .form-control--has-label.form-control--small .form-control__label {
      font-size: var(--sl-input-label-font-size-small);
    }

    .form-control--has-label.form-control--medium .form-control__label {
      font-size: var(--sl-input-label-font-size-medium);
    }

    .form-control--has-label.form-control--large .form-control_label {
      font-size: var(--sl-input-label-font-size-large);
    }

    /* Help text */
    .form-control--has-help-text .form-control__help-text {
      display: block;
      color: rgb(var(--sl-input-help-text-color));
    }

    .form-control--has-help-text .form-control__help-text ::slotted(*) {
      margin-top: var(--sl-spacing-xxx-small);
    }

    .form-control--has-help-text.form-control--small .form-control__help-text {
      font-size: var(--sl-input-help-text-font-size-small);
    }

    .form-control--has-help-text.form-control--medium .form-control__help-text {
      font-size: var(--sl-input-help-text-font-size-medium);
    }

    .form-control--has-help-text.form-control--large .form-control__help-text {
      font-size: var(--sl-input-help-text-font-size-large);
    }
  `;

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VQR4VNFF.js
    var select_styles_default = i2`
    ${component_styles_default}
    ${form_control_styles_default}

    :host {
      display: block;
    }

    .select {
      display: block;
    }

    .select__box {
      display: inline-flex;
      align-items: center;
      justify-content: start;
      position: relative;
      width: 100%;
      font-family: var(--sl-input-font-family);
      font-weight: var(--sl-input-font-weight);
      letter-spacing: var(--sl-input-letter-spacing);
      background-color: rgb(var(--sl-input-background-color));
      border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
      vertical-align: middle;
      overflow: hidden;
      transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
      cursor: pointer;
    }

    .select:not(.select--disabled) .select__box:hover {
      background-color: rgb(var(--sl-input-background-color-hover));
      border-color: rgb(var(--sl-input-border-color-hover));
      color: rgb(var(--sl-input-color-hover));
    }

    .select.select--focused:not(.select--disabled) .select__box {
      background-color: rgb(var(--sl-input-background-color-focus));
      border-color: rgb(var(--sl-input-border-color-focus));
      box-shadow: var(--sl-focus-ring);
      outline: none;
      color: rgb(var(--sl-input-color-focus));
    }

    .select--disabled .select__box {
      background-color: rgb(var(--sl-input-background-color-disabled));
      border-color: rgb(var(--sl-input-border-color-disabled));
      color: rgb(var(--sl-input-color-disabled));
      opacity: 0.5;
      cursor: not-allowed;
      outline: none;
    }

    .select--disabled .select__tags,
    .select--disabled .select__clear {
      pointer-events: none;
    }

    .select__prefix {
      display: inline-flex;
      align-items: center;
      color: rgb(var(--sl-input-placeholder-color));
    }

    .select__label {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      user-select: none;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;

      /* Hide scrollbar in Firefox */
      scrollbar-width: none;
    }

    /* Hide scrollbar in Chrome/Safari */
    .select__label::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .select__clear {
      flex: 0 0 auto;
      width: 1.25em;
    }

    .select__suffix {
      display: inline-flex;
      align-items: center;
      color: rgb(var(--sl-input-placeholder-color));
    }

    .select__icon {
      flex: 0 0 auto;
      display: inline-flex;
      transition: var(--sl-transition-medium) transform ease;
    }

    .select--open .select__icon {
      transform: rotate(-180deg);
    }

    /* Placeholder */
    .select--placeholder-visible .select__label {
      color: rgb(var(--sl-input-placeholder-color));
    }

    .select--disabled.select--placeholder-visible .select__label {
      color: rgb(var(--sl-input-placeholder-color-disabled));
    }

    /* Tags */
    .select__tags {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: left;
      margin-left: var(--sl-spacing-xx-small);
    }

    /* Hidden input (for form control validation to show) */
    .select__hidden-select {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      overflow: hidden;
      white-space: nowrap;
    }

    /*
    * Size modifiers
    */

    /* Small */
    .select--small .select__box {
      border-radius: var(--sl-input-border-radius-small);
      font-size: var(--sl-input-font-size-small);
      min-height: var(--sl-input-height-small);
    }

    .select--small .select__prefix ::slotted(*) {
      margin-left: var(--sl-input-spacing-small);
    }

    .select--small .select__label {
      margin: 0 var(--sl-input-spacing-small);
    }

    .select--small .select__clear {
      margin-right: var(--sl-input-spacing-small);
    }

    .select--small .select__suffix ::slotted(*) {
      margin-right: var(--sl-input-spacing-small);
    }

    .select--small .select__icon {
      margin-right: var(--sl-input-spacing-small);
    }

    .select--small .select__tags {
      padding-bottom: 2px;
    }

    .select--small .select__tags sl-tag {
      padding-top: 2px;
    }

    .select--small .select__tags sl-tag:not(:last-of-type) {
      margin-right: var(--sl-spacing-xx-small);
    }

    .select--small.select--has-tags .select__label {
      margin-left: 0;
    }

    /* Medium */
    .select--medium .select__box {
      border-radius: var(--sl-input-border-radius-medium);
      font-size: var(--sl-input-font-size-medium);
      min-height: var(--sl-input-height-medium);
    }

    .select--medium .select__prefix ::slotted(*) {
      margin-left: var(--sl-input-spacing-medium);
    }

    .select--medium .select__label {
      margin: 0 var(--sl-input-spacing-medium);
    }

    .select--medium .select__clear {
      margin-right: var(--sl-input-spacing-medium);
    }

    .select--medium .select__suffix ::slotted(*) {
      margin-right: var(--sl-input-spacing-medium);
    }

    .select--medium .select__icon {
      margin-right: var(--sl-input-spacing-medium);
    }

    .select--medium .select__tags {
      padding-bottom: 3px;
    }

    .select--medium .select__tags sl-tag {
      padding-top: 3px;
    }

    .select--medium .select__tags sl-tag:not(:last-of-type) {
      margin-right: var(--sl-spacing-xx-small);
    }

    .select--medium.select--has-tags .select__label {
      margin-left: 0;
    }

    /* Large */
    .select--large .select__box {
      border-radius: var(--sl-input-border-radius-large);
      font-size: var(--sl-input-font-size-large);
      min-height: var(--sl-input-height-large);
    }

    .select--large .select__prefix ::slotted(*) {
      margin-left: var(--sl-input-spacing-large);
    }

    .select--large .select__label {
      margin: 0 var(--sl-input-spacing-large);
    }

    .select--large .select__clear {
      margin-right: var(--sl-input-spacing-large);
    }

    .select--large .select__suffix ::slotted(*) {
      margin-right: var(--sl-input-spacing-large);
    }

    .select--large .select__icon {
      margin-right: var(--sl-input-spacing-large);
    }

    .select--large .select__tags {
      padding-bottom: 4px;
    }
    .select--large .select__tags sl-tag {
      padding-top: 4px;
    }

    .select--large .select__tags sl-tag:not(:last-of-type) {
      margin-right: var(--sl-spacing-xx-small);
    }

    .select--large.select--has-tags .select__label {
      margin-left: 0;
    }

    /*
    * Pill modifier
    */
    .select--pill.select--small .select__box {
      border-radius: var(--sl-input-height-small);
    }

    .select--pill.select--medium .select__box {
      border-radius: var(--sl-input-height-medium);
    }

    .select--pill.select--large .select__box {
      border-radius: var(--sl-input-height-large);
    }
  `;
    var id2 = 0;
    var SlSelect = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `select-${++id2}`;
        this.helpTextId = `select-help-text-${id2}`;
        this.labelId = `select-label-${id2}`;
        this.hasFocus = false;
        this.hasHelpTextSlot = false;
        this.hasLabelSlot = false;
        this.isOpen = false;
        this.displayLabel = "";
        this.displayTags = [];
        this.multiple = false;
        this.maxTagsVisible = 3;
        this.disabled = false;
        this.name = "";
        this.placeholder = "";
        this.size = "medium";
        this.hoist = false;
        this.value = "";
        this.pill = false;
        this.required = false;
        this.clearable = false;
        this.invalid = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.resizeObserver = new ResizeObserver(() => this.resizeMenu());
        this.updateComplete.then(() => {
          this.resizeObserver.observe(this);
          this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
          this.syncItemsFromValue();
        });
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.unobserve(this);
        this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      getItemLabel(item) {
        const slot = item.shadowRoot.querySelector("slot:not([name])");
        return getTextContent(slot);
      }
      getItems() {
        return [...this.querySelectorAll("sl-menu-item")];
      }
      getValueAsArray() {
        if (this.multiple && this.value === "") {
          return [];
        }
        return Array.isArray(this.value) ? this.value : [this.value];
      }
      handleBlur() {
        if (!this.isOpen) {
          this.hasFocus = false;
          emit(this, "sl-blur");
        }
      }
      handleClearClick(event2) {
        event2.stopPropagation();
        this.value = this.multiple ? [] : "";
        emit(this, "sl-clear");
        this.syncItemsFromValue();
      }
      handleDisabledChange() {
        if (this.disabled && this.isOpen) {
          this.dropdown.hide();
        }
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        if (!this.hasFocus) {
          this.hasFocus = true;
          emit(this, "sl-focus");
        }
      }
      handleKeyDown(event2) {
        const target = event2.target;
        const items = this.getItems();
        const firstItem = items[0];
        const lastItem = items[items.length - 1];
        if (target.tagName.toLowerCase() === "sl-tag") {
          return;
        }
        if (event2.key === "Tab") {
          if (this.isOpen) {
            this.dropdown.hide();
          }
          return;
        }
        if (["ArrowDown", "ArrowUp"].includes(event2.key)) {
          event2.preventDefault();
          if (!this.isOpen) {
            this.dropdown.show();
          }
          if (event2.key === "ArrowDown" && firstItem) {
            this.menu.setCurrentItem(firstItem);
            firstItem.focus();
            return;
          }
          if (event2.key === "ArrowUp" && lastItem) {
            this.menu.setCurrentItem(lastItem);
            lastItem.focus();
            return;
          }
        }
        if (event2.ctrlKey || event2.metaKey) {
          return;
        }
        if (!this.isOpen && event2.key.length === 1) {
          event2.stopPropagation();
          event2.preventDefault();
          this.dropdown.show();
          this.menu.typeToSelect(event2.key);
        }
      }
      handleLabelClick() {
        var _a2;
        const box = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(".select__box");
        box.focus();
      }
      handleMenuSelect(event2) {
        var _a2;
        const item = event2.detail.item;
        if (this.multiple) {
          this.value = ((_a2 = this.value) == null ? void 0 : _a2.includes(item.value)) ? this.value.filter((v2) => v2 !== item.value) : [...this.value, item.value];
        } else {
          this.value = item.value;
        }
        this.syncItemsFromValue();
      }
      handleMenuShow() {
        this.resizeMenu();
        this.isOpen = true;
      }
      handleMenuHide() {
        this.isOpen = false;
        this.box.focus();
      }
      handleMultipleChange() {
        const value = this.getValueAsArray();
        this.value = this.multiple ? value : value[0] || "";
        this.syncItemsFromValue();
      }
      async handleSlotChange() {
        this.hasHelpTextSlot = hasSlot(this, "help-text");
        this.hasLabelSlot = hasSlot(this, "label");
        const items = this.getItems();
        const values = [];
        items.map((item) => {
          if (values.includes(item.value)) {
            console.error(`Duplicate value found in <sl-select> menu item: '${item.value}'`, item);
          }
          values.push(item.value);
        });
        await Promise.all(items.map((item) => item.render)).then(() => this.syncItemsFromValue());
      }
      handleTagInteraction(event2) {
        const path = event2.composedPath();
        const clearButton = path.find((el) => {
          if (el instanceof HTMLElement) {
            const element = el;
            return element.classList.contains("tag__clear");
          }
          return false;
        });
        if (clearButton) {
          event2.stopPropagation();
        }
      }
      async handleValueChange() {
        this.syncItemsFromValue();
        await this.updateComplete;
        this.invalid = !this.input.checkValidity();
        emit(this, "sl-change");
      }
      resizeMenu() {
        var _a2;
        const box = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(".select__box");
        this.menu.style.width = `${box.clientWidth}px`;
        if (this.dropdown) {
          this.dropdown.reposition();
        }
      }
      syncItemsFromValue() {
        const items = this.getItems();
        const value = this.getValueAsArray();
        items.map((item) => item.checked = value.includes(item.value));
        if (this.multiple) {
          const checkedItems = items.filter((item) => value.includes(item.value));
          this.displayLabel = checkedItems[0] ? this.getItemLabel(checkedItems[0]) : "";
          this.displayTags = checkedItems.map((item) => {
            return T`
            <sl-tag
              exportparts="base:tag"
              type="neutral"
              size=${this.size}
              ?pill=${this.pill}
              clearable
              @click=${this.handleTagInteraction}
              @keydown=${this.handleTagInteraction}
              @sl-clear=${(event2) => {
              event2.stopPropagation();
              if (!this.disabled) {
                item.checked = false;
                this.syncValueFromItems();
              }
            }}
            >
              ${this.getItemLabel(item)}
            </sl-tag>
          `;
          });
          if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
            const total = this.displayTags.length;
            this.displayLabel = "";
            this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
            this.displayTags.push(T`
            <sl-tag exportparts="base:tag" type="neutral" size=${this.size}> +${total - this.maxTagsVisible} </sl-tag>
          `);
          }
        } else {
          const checkedItem = items.filter((item) => item.value === value[0])[0];
          this.displayLabel = checkedItem ? this.getItemLabel(checkedItem) : "";
          this.displayTags = [];
        }
      }
      syncValueFromItems() {
        const items = this.getItems();
        const checkedItems = items.filter((item) => item.checked);
        const checkedValues = checkedItems.map((item) => item.value);
        if (this.multiple) {
          this.value = this.value.filter((val) => checkedValues.includes(val));
        } else {
          this.value = checkedValues.length > 0 ? checkedValues[0] : "";
        }
      }
      render() {
        var _a2, _b;
        const hasSelection = this.multiple ? ((_a2 = this.value) == null ? void 0 : _a2.length) > 0 : this.value !== "";
        return renderFormControl({
          inputId: this.inputId,
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpTextId: this.helpTextId,
          helpText: this.helpText,
          hasHelpTextSlot: this.hasHelpTextSlot,
          size: this.size,
          onLabelClick: () => this.handleLabelClick()
        }, T`
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${e23({
          select: true,
          "select--open": this.isOpen,
          "select--empty": ((_b = this.value) == null ? void 0 : _b.length) === 0,
          "select--focused": this.hasFocus,
          "select--clearable": this.clearable,
          "select--disabled": this.disabled,
          "select--multiple": this.multiple,
          "select--has-tags": this.multiple && this.displayTags.length > 0,
          "select--placeholder-visible": this.displayLabel === "",
          "select--small": this.size === "small",
          "select--medium": this.size === "medium",
          "select--large": this.size === "large",
          "select--pill": this.pill,
          "select--invalid": this.invalid
        })}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              slot="trigger"
              id=${this.inputId}
              class="select__box"
              role="combobox"
              aria-labelledby=${l4(getLabelledBy({
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpText: this.helpText,
          helpTextId: this.helpTextId,
          hasHelpTextSlot: this.hasHelpTextSlot
        }))}
              aria-haspopup="true"
              aria-expanded=${this.isOpen ? "true" : "false"}
              tabindex=${this.disabled ? "-1" : "0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div class="select__label">
                ${this.displayTags.length ? T` <span part="tags" class="select__tags"> ${this.displayTags} </span> ` : this.displayLabel || this.placeholder}
              </div>

              ${this.clearable && hasSelection ? T`
                    <sl-icon-button
                      exportparts="base:clear-button"
                      class="select__clear"
                      name="x-circle"
                      library="system"
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    ></sl-icon-button>
                  ` : ""}

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${hasSelection ? "1" : ""}
                tabindex="-1"
              />
            </div>

            <sl-menu part="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleSlotChange}></slot>
            </sl-menu>
          </sl-dropdown>
        `);
      }
    };
    SlSelect.styles = select_styles_default;
    __decorateClass2([
      o22(".select")
    ], SlSelect.prototype, "dropdown", 2);
    __decorateClass2([
      o22(".select__box")
    ], SlSelect.prototype, "box", 2);
    __decorateClass2([
      o22(".select__hidden-select")
    ], SlSelect.prototype, "input", 2);
    __decorateClass2([
      o22(".select__menu")
    ], SlSelect.prototype, "menu", 2);
    __decorateClass2([
      r4()
    ], SlSelect.prototype, "hasFocus", 2);
    __decorateClass2([
      r4()
    ], SlSelect.prototype, "hasHelpTextSlot", 2);
    __decorateClass2([
      r4()
    ], SlSelect.prototype, "hasLabelSlot", 2);
    __decorateClass2([
      r4()
    ], SlSelect.prototype, "isOpen", 2);
    __decorateClass2([
      r4()
    ], SlSelect.prototype, "displayLabel", 2);
    __decorateClass2([
      r4()
    ], SlSelect.prototype, "displayTags", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "multiple", 2);
    __decorateClass2([
      e4({ attribute: "max-tags-visible", type: Number })
    ], SlSelect.prototype, "maxTagsVisible", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "disabled", 2);
    __decorateClass2([
      e4()
    ], SlSelect.prototype, "name", 2);
    __decorateClass2([
      e4()
    ], SlSelect.prototype, "placeholder", 2);
    __decorateClass2([
      e4()
    ], SlSelect.prototype, "size", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlSelect.prototype, "hoist", 2);
    __decorateClass2([
      e4()
    ], SlSelect.prototype, "value", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "pill", 2);
    __decorateClass2([
      e4()
    ], SlSelect.prototype, "label", 2);
    __decorateClass2([
      e4({ attribute: "help-text" })
    ], SlSelect.prototype, "helpText", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "required", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlSelect.prototype, "clearable", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "invalid", 2);
    __decorateClass2([
      watch2("disabled")
    ], SlSelect.prototype, "handleDisabledChange", 1);
    __decorateClass2([
      watch2("multiple")
    ], SlSelect.prototype, "handleMultipleChange", 1);
    __decorateClass2([
      watch2("helpText"),
      watch2("label")
    ], SlSelect.prototype, "handleSlotChange", 1);
    __decorateClass2([
      watch2("value", { waitUntilFirstUpdate: true })
    ], SlSelect.prototype, "handleValueChange", 1);
    SlSelect = __decorateClass2([
      n5("sl-select")
    ], SlSelect);

    // src/medblocks/codedtext/select.ts
    var MbSelect = class extends CodedTextElement {
      constructor() {
        super(...arguments);
        this.multiple = false;
        this.required = false;
        this._options = [];
      }
      getLabel(code) {
        return this._options.filter((option) => option.value === code)[0].label;
      }
      getOrdinal(code) {
        var _a2;
        return ((_a2 = this._options.filter((option) => option.value === code)[0]) == null ? void 0 : _a2.ordinal) || void 0;
      }
      get _optionElements() {
        return this.querySelectorAll("mb-option");
      }
      handleInput(e5) {
        const select = e5.target;
        if (select.value && typeof select.value === "object") {
          let data = select.value.map((item) => {
            let codedtext = {
              code: item,
              value: this.getLabel(item),
              terminology: this.terminology
            };
            const ordinal = this.getOrdinal(item);
            if (ordinal) {
              codedtext = __spreadProps(__spreadValues({}, codedtext), { ordinal: parseInt(ordinal) });
            }
            return codedtext;
          });
          if (JSON.stringify(this.data) !== JSON.stringify(data)) {
            this.data = data;
            this._mbInput.emit();
          }
        } else if (select.value && typeof select.value === "string") {
          let data = {
            code: select.value,
            value: this.getLabel(select.value),
            terminology: this.terminology
          };
          const ordinal = this.getOrdinal(select.value);
          if (ordinal) {
            data = __spreadProps(__spreadValues({}, data), { ordinal: parseInt(ordinal) });
          }
          this.data = data;
          this._mbInput.emit();
        }
      }
      connectedCallback() {
        super.connectedCallback();
        const observer = new MutationObserver(() => {
          this.handleChildChange();
        });
        observer.observe(this, { childList: true });
        this.handleChildChange();
      }
      handleChildChange() {
        this._options = [
          ...this.querySelectorAll("mb-option")
        ];
      }
      getValue(data) {
        if (data == null)
          return "";
        else if (Array.isArray(data))
          return data.map((item) => item.code || "");
        else
          return (data == null ? void 0 : data.code) || "";
      }
      reportValidity() {
        const select = this.shadowRoot.querySelector("sl-select");
        return select.reportValidity();
      }
      render() {
        var _a2;
        return html`
        <sl-select
          clearable
          ?required=${this.required}
          ?multiple=${this.multiple}
          placeholder=${(_a2 = this.placeholder) != null ? _a2 : "Please select"}
          label=${ifDefined(this.label)}
          @sl-change=${this.handleInput}
          @sl-clear=${() => {
          this.data = void 0;
          this._mbInput.emit();
        }}
          .hoist=${true}
          .value=${this.getValue(this.data)}
        >
          ${this._options.map((option) => html`<sl-menu-item .value=${option.value}
                >${option.label}
              </sl-menu-item>`)}
        </sl-select>
        <slot @slotchange=${this.handleChildChange}></slot>
      `;
      }
    };
    __decorateClass([
      property({ type: String })
    ], MbSelect.prototype, "terminology", 2);
    __decorateClass([
      property({ type: Object })
    ], MbSelect.prototype, "data", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbSelect.prototype, "placeholder", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbSelect.prototype, "multiple", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbSelect.prototype, "required", 2);
    __decorateClass([
      state()
    ], MbSelect.prototype, "_options", 2);
    MbSelect = __decorateClass([
      customElement("mb-select")
    ], MbSelect);

    // src/medblocks/codedtext/filter.ts
    var MbFilter = class extends LitElement {
      constructor() {
        super(...arguments);
        this.disabled = false;
      }
    };
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbFilter.prototype, "label", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbFilter.prototype, "value", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbFilter.prototype, "disabled", 2);
    MbFilter = __decorateClass([
      customElement("mb-filter")
    ], MbFilter);

    // src/medblocks/codedtext/option.ts
    var MbOption = class extends LitElement {
    };
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbOption.prototype, "value", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbOption.prototype, "label", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbOption.prototype, "ordinal", 2);
    MbOption = __decorateClass([
      customElement("mb-option")
    ], MbOption);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2ZPIVQWR.js
    var r5 = (o7) => o7.strings === void 0;
    var f2 = {};
    var s5 = (o7, i23 = f2) => o7._$AH = i23;
    var l5 = e(class extends i {
      constructor(r22) {
        if (super(r22), r22.type !== t.PROPERTY && r22.type !== t.ATTRIBUTE && r22.type !== t.BOOLEAN_ATTRIBUTE)
          throw Error("The `live` directive is not allowed on child or event bindings");
        if (!r5(r22))
          throw Error("`live` bindings can only contain a single expression");
      }
      render(r22) {
        return r22;
      }
      update(i23, [t24]) {
        if (t24 === w || t24 === A)
          return t24;
        const o7 = i23.element, l22 = i23.name;
        if (i23.type === t.PROPERTY) {
          if (t24 === o7[l22])
            return w;
        } else if (i23.type === t.BOOLEAN_ATTRIBUTE) {
          if (!!t24 === o7.hasAttribute(l22))
            return w;
        } else if (i23.type === t.ATTRIBUTE && o7.getAttribute(l22) === t24 + "")
          return w;
        return s5(i23), t24;
      }
    });

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GFDC4V53.js
    var input_styles_default = i2`
    ${component_styles_default}
    ${form_control_styles_default}

    :host {
      display: block;
    }

    .input {
      flex: 1 1 auto;
      display: inline-flex;
      align-items: stretch;
      justify-content: start;
      position: relative;
      width: 100%;
      font-family: var(--sl-input-font-family);
      font-weight: var(--sl-input-font-weight);
      letter-spacing: var(--sl-input-letter-spacing);
      background-color: rgb(var(--sl-input-background-color));
      border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
      vertical-align: middle;
      overflow: hidden;
      transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
      cursor: text;
    }

    .input:hover:not(.input--disabled) {
      background-color: rgb(var(--sl-input-background-color-hover));
      border-color: rgb(var(--sl-input-border-color-hover));
    }

    .input:hover:not(.input--disabled) .input__control {
      color: rgb(var(--sl-input-color-hover));
    }

    .input.input--focused:not(.input--disabled) {
      background-color: rgb(var(--sl-input-background-color-focus));
      border-color: rgb(var(--sl-input-border-color-focus));
      box-shadow: var(--sl-focus-ring);
    }

    .input.input--focused:not(.input--disabled) .input__control {
      color: rgb(var(--sl-input-color-focus));
    }

    .input.input--disabled {
      background-color: rgb(var(--sl-input-background-color-disabled));
      border-color: rgb(var(--sl-input-border-color-disabled));
      opacity: 0.5;
      cursor: not-allowed;
    }

    .input.input--disabled .input__control {
      color: rgb(var(--sl-input-color-disabled));
    }

    .input.input--disabled .input__control::placeholder {
      color: rgb(var(--sl-input-placeholder-color-disabled));
    }

    .input__control {
      flex: 1 1 auto;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      min-width: 0;
      height: 100%;
      color: rgb(var(--sl-input-color));
      border: none;
      background: none;
      box-shadow: none;
      padding: 0;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
    }

    .input__control::-webkit-search-decoration,
    .input__control::-webkit-search-cancel-button,
    .input__control::-webkit-search-results-button,
    .input__control::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    .input__control:-webkit-autofill,
    .input__control:-webkit-autofill:hover,
    .input__control:-webkit-autofill:focus,
    .input__control:-webkit-autofill:active {
      box-shadow: 0 0 0 var(--sl-input-height-large) rgb(var(--sl-input-background-color-hover)) inset !important;
      -webkit-text-fill-color: rgb(var(--sl-color-primary-500));
    }

    .input__control::placeholder {
      color: rgb(var(--sl-input-placeholder-color));
      user-select: none;
    }

    .input__control:focus {
      outline: none;
    }

    .input__prefix,
    .input__suffix {
      display: inline-flex;
      flex: 0 0 auto;
      align-items: center;
      cursor: default;
    }

    .input__prefix ::slotted(sl-icon),
    .input__suffix ::slotted(sl-icon) {
      color: rgb(var(--sl-input-icon-color));
    }

    /*
    * Size modifiers
    */

    .input--small {
      border-radius: var(--sl-input-border-radius-small);
      font-size: var(--sl-input-font-size-small);
      height: var(--sl-input-height-small);
    }

    .input--small .input__control {
      height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
      margin: 0 var(--sl-input-spacing-small);
    }

    .input--small .input__clear,
    .input--small .input__password-toggle {
      margin-right: var(--sl-input-spacing-small);
    }

    .input--small .input__prefix ::slotted(*) {
      margin-left: var(--sl-input-spacing-small);
    }

    .input--small .input__suffix ::slotted(*) {
      margin-right: var(--sl-input-spacing-small);
    }

    .input--medium {
      border-radius: var(--sl-input-border-radius-medium);
      font-size: var(--sl-input-font-size-medium);
      height: var(--sl-input-height-medium);
    }

    .input--medium .input__control {
      height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
      margin: 0 var(--sl-input-spacing-medium);
    }

    .input--medium .input__clear,
    .input--medium .input__password-toggle {
      margin-right: var(--sl-input-spacing-medium);
    }

    .input--medium .input__prefix ::slotted(*) {
      margin-left: var(--sl-input-spacing-medium);
    }

    .input--medium .input__suffix ::slotted(*) {
      margin-right: var(--sl-input-spacing-medium);
    }

    .input--large {
      border-radius: var(--sl-input-border-radius-large);
      font-size: var(--sl-input-font-size-large);
      height: var(--sl-input-height-large);
    }

    .input--large .input__control {
      height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
      margin: 0 var(--sl-input-spacing-large);
    }

    .input--large .input__clear,
    .input--large .input__password-toggle {
      margin-right: var(--sl-input-spacing-large);
    }

    .input--large .input__prefix ::slotted(*) {
      margin-left: var(--sl-input-spacing-large);
    }

    .input--large .input__suffix ::slotted(*) {
      margin-right: var(--sl-input-spacing-large);
    }

    /*
    * Pill modifier
    */

    .input--pill.input--small {
      border-radius: var(--sl-input-height-small);
    }

    .input--pill.input--medium {
      border-radius: var(--sl-input-height-medium);
    }

    .input--pill.input--large {
      border-radius: var(--sl-input-height-large);
    }

    /*
    * Clearable + Password Toggle
    */

    .input__clear,
    .input__password-toggle {
      display: inline-flex;
      align-items: center;
      font-size: inherit;
      color: rgb(var(--sl-input-icon-color));
      border: none;
      background: none;
      padding: 0;
      transition: var(--sl-transition-fast) color;
      cursor: pointer;
    }

    .input__clear:hover,
    .input__password-toggle:hover {
      color: rgb(var(--sl-input-icon-color-hover));
    }

    .input__clear:focus,
    .input__password-toggle:focus {
      outline: none;
    }

    .input--empty .input__clear {
      visibility: hidden;
    }

    /* Don't show the browser's password toggle in Edge */
    ::-ms-reveal {
      display: none;
    }
  `;
    var id3 = 0;
    var SlInput = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `input-${++id3}`;
        this.helpTextId = `input-help-text-${id3}`;
        this.labelId = `input-label-${id3}`;
        this.hasFocus = false;
        this.hasHelpTextSlot = false;
        this.hasLabelSlot = false;
        this.isPasswordVisible = false;
        this.type = "text";
        this.size = "medium";
        this.value = "";
        this.pill = false;
        this.helpText = "";
        this.clearable = false;
        this.togglePassword = false;
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.invalid = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      select() {
        return this.input.select();
      }
      setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
        return this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
      }
      setRangeText(replacement, start2, end2, selectMode = "preserve") {
        this.input.setRangeText(replacement, start2, end2, selectMode);
        if (this.value !== this.input.value) {
          this.value = this.input.value;
          emit(this, "sl-input");
          emit(this, "sl-change");
        }
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleChange() {
        this.value = this.input.value;
        emit(this, "sl-change");
      }
      handleClearClick(event2) {
        this.value = "";
        emit(this, "sl-clear");
        emit(this, "sl-input");
        emit(this, "sl-change");
        this.input.focus();
        event2.stopPropagation();
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleInput() {
        this.value = this.input.value;
        emit(this, "sl-input");
      }
      handleInvalid() {
        this.invalid = true;
      }
      handlePasswordToggle() {
        this.isPasswordVisible = !this.isPasswordVisible;
      }
      handleSlotChange() {
        this.hasHelpTextSlot = hasSlot(this, "help-text");
        this.hasLabelSlot = hasSlot(this, "label");
      }
      handleValueChange() {
        if (this.input) {
          this.invalid = !this.input.checkValidity();
        }
      }
      render() {
        var _a2, _b;
        return renderFormControl({
          inputId: this.inputId,
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpTextId: this.helpTextId,
          helpText: this.helpText,
          hasHelpTextSlot: this.hasHelpTextSlot,
          size: this.size
        }, T`
          <div
            part="base"
            class=${e23({
          input: true,
          "input--small": this.size === "small",
          "input--medium": this.size === "medium",
          "input--large": this.size === "large",
          "input--pill": this.pill,
          "input--disabled": this.disabled,
          "input--focused": this.hasFocus,
          "input--empty": ((_a2 = this.value) == null ? void 0 : _a2.length) === 0,
          "input--invalid": this.invalid
        })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id=${this.inputId}
              class="input__control"
              type=${this.type === "password" && this.isPasswordVisible ? "text" : this.type}
              name=${l4(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l4(this.placeholder)}
              minlength=${l4(this.minlength)}
              maxlength=${l4(this.maxlength)}
              min=${l4(this.min)}
              max=${l4(this.max)}
              step=${l4(this.step)}
              .value=${l5(this.value)}
              autocapitalize=${l4(this.autocapitalize)}
              autocomplete=${l4(this.autocomplete)}
              autocorrect=${l4(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l4(this.spellcheck)}
              pattern=${l4(this.pattern)}
              inputmode=${l4(this.inputmode)}
              aria-labelledby=${l4(getLabelledBy({
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpText: this.helpText,
          helpTextId: this.helpTextId,
          hasHelpTextSlot: this.hasHelpTextSlot
        }))}
              aria-invalid=${this.invalid ? "true" : "false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${this.clearable && ((_b = this.value) == null ? void 0 : _b.length) > 0 ? T`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.togglePassword ? T`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible ? T`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : T`
                          <slot name="hide-password-icon">
                            ${" "}
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        `);
      }
    };
    SlInput.styles = input_styles_default;
    __decorateClass2([
      o22(".input__control")
    ], SlInput.prototype, "input", 2);
    __decorateClass2([
      r4()
    ], SlInput.prototype, "hasFocus", 2);
    __decorateClass2([
      r4()
    ], SlInput.prototype, "hasHelpTextSlot", 2);
    __decorateClass2([
      r4()
    ], SlInput.prototype, "hasLabelSlot", 2);
    __decorateClass2([
      r4()
    ], SlInput.prototype, "isPasswordVisible", 2);
    __decorateClass2([
      e4({ reflect: true })
    ], SlInput.prototype, "type", 2);
    __decorateClass2([
      e4({ reflect: true })
    ], SlInput.prototype, "size", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "name", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "value", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "pill", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "label", 2);
    __decorateClass2([
      e4({ attribute: "help-text" })
    ], SlInput.prototype, "helpText", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlInput.prototype, "clearable", 2);
    __decorateClass2([
      e4({ attribute: "toggle-password", type: Boolean })
    ], SlInput.prototype, "togglePassword", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "placeholder", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "disabled", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "readonly", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlInput.prototype, "minlength", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlInput.prototype, "maxlength", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "min", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "max", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlInput.prototype, "step", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "pattern", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "required", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "invalid", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "autocapitalize", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "autocorrect", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "autocomplete", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlInput.prototype, "autofocus", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlInput.prototype, "spellcheck", 2);
    __decorateClass2([
      e4()
    ], SlInput.prototype, "inputmode", 2);
    __decorateClass2([
      watch2("disabled")
    ], SlInput.prototype, "handleDisabledChange", 1);
    __decorateClass2([
      watch2("helpText"),
      watch2("label")
    ], SlInput.prototype, "handleSlotChange", 1);
    __decorateClass2([
      watch2("value")
    ], SlInput.prototype, "handleValueChange", 1);
    SlInput = __decorateClass2([
      n5("sl-input")
    ], SlInput);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F6F5MK4N.js
    var textarea_styles_default = i2`
    ${component_styles_default}
    ${form_control_styles_default}

    :host {
      display: block;
    }

    .textarea {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      font-family: var(--sl-input-font-family);
      font-weight: var(--sl-input-font-weight);
      line-height: var(--sl-line-height-normal);
      letter-spacing: var(--sl-input-letter-spacing);
      background-color: rgb(var(--sl-input-background-color));
      border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
      vertical-align: middle;
      transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
      cursor: text;
    }

    .textarea:hover:not(.textarea--disabled) {
      background-color: rgb(var(--sl-input-background-color-hover));
      border-color: rgb(var(--sl-input-border-color-hover));
    }
    .textarea:hover:not(.textarea--disabled) .textarea__control {
      color: rgb(var(--sl-input-color-hover));
    }

    .textarea.textarea--focused:not(.textarea--disabled) {
      background-color: rgb(var(--sl-input-background-color-focus));
      border-color: rgb(var(--sl-input-border-color-focus));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
      color: rgb(var(--sl-input-color-focus));
    }

    .textarea.textarea--focused:not(.textarea--disabled) .textarea__control {
      color: rgb(var(--sl-input-color-focus));
    }

    .textarea.textarea--disabled {
      background-color: rgb(var(--sl-input-background-color-disabled));
      border-color: rgb(var(--sl-input-border-color-disabled));
      opacity: 0.5;
      cursor: not-allowed;
    }

    .textarea.textarea--disabled .textarea__control {
      color: rgb(var(--sl-input-color-disabled));
    }

    .textarea.textarea--disabled .textarea__control::placeholder {
      color: rgb(var(--sl-input-placeholder-color-disabled));
    }

    .textarea__control {
      flex: 1 1 auto;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: 1.4;
      color: rgb(var(--sl-input-color));
      border: none;
      background: none;
      box-shadow: none;
      cursor: inherit;
      -webkit-appearance: none;
    }

    .textarea__control::-webkit-search-decoration,
    .textarea__control::-webkit-search-cancel-button,
    .textarea__control::-webkit-search-results-button,
    .textarea__control::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    .textarea__control::placeholder {
      color: rgb(var(--sl-input-placeholder-color));
      user-select: none;
    }

    .textarea__control:focus {
      outline: none;
    }

    /*
    * Size modifiers
    */

    .textarea--small {
      border-radius: var(--sl-input-border-radius-small);
      font-size: var(--sl-input-font-size-small);
    }

    .textarea--small .textarea__control {
      padding: 0.5em var(--sl-input-spacing-small);
    }

    .textarea--medium {
      border-radius: var(--sl-input-border-radius-medium);
      font-size: var(--sl-input-font-size-medium);
    }

    .textarea--medium .textarea__control {
      padding: 0.5em var(--sl-input-spacing-medium);
    }

    .textarea--large {
      border-radius: var(--sl-input-border-radius-large);
      font-size: var(--sl-input-font-size-large);
    }

    .textarea--large .textarea__control {
      padding: 0.5em var(--sl-input-spacing-large);
    }

    /*
    * Resize types
    */

    .textarea--resize-none .textarea__control {
      resize: none;
    }

    .textarea--resize-vertical .textarea__control {
      resize: vertical;
    }

    .textarea--resize-auto .textarea__control {
      height: auto;
      resize: none;
    }
  `;
    var id4 = 0;
    var SlTextarea = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `textarea-${++id4}`;
        this.helpTextId = `textarea-help-text-${id4}`;
        this.labelId = `textarea-label-${id4}`;
        this.hasFocus = false;
        this.hasHelpTextSlot = false;
        this.hasLabelSlot = false;
        this.size = "medium";
        this.value = "";
        this.helpText = "";
        this.rows = 4;
        this.resize = "vertical";
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.invalid = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
        this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
        this.handleSlotChange();
        this.updateComplete.then(() => {
          this.setTextareaHeight();
          this.resizeObserver.observe(this.input);
        });
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.unobserve(this.input);
        this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      select() {
        return this.input.select();
      }
      scrollPosition(position) {
        if (position) {
          if (typeof position.top === "number")
            this.input.scrollTop = position.top;
          if (typeof position.left === "number")
            this.input.scrollLeft = position.left;
          return;
        }
        return {
          top: this.input.scrollTop,
          left: this.input.scrollTop
        };
      }
      setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
        return this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
      }
      setRangeText(replacement, start2, end2, selectMode = "preserve") {
        this.input.setRangeText(replacement, start2, end2, selectMode);
        if (this.value !== this.input.value) {
          this.value = this.input.value;
          emit(this, "sl-input");
        }
        if (this.value !== this.input.value) {
          this.value = this.input.value;
          this.setTextareaHeight();
          emit(this, "sl-input");
          emit(this, "sl-change");
        }
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleChange() {
        this.value = this.input.value;
        this.setTextareaHeight();
        emit(this, "sl-change");
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleInput() {
        this.value = this.input.value;
        this.setTextareaHeight();
        emit(this, "sl-input");
      }
      handleRowsChange() {
        this.setTextareaHeight();
      }
      handleSlotChange() {
        this.hasHelpTextSlot = hasSlot(this, "help-text");
        this.hasLabelSlot = hasSlot(this, "label");
      }
      handleValueChange() {
        if (this.input) {
          this.invalid = !this.input.checkValidity();
        }
      }
      setTextareaHeight() {
        if (this.input) {
          if (this.resize === "auto") {
            this.input.style.height = "auto";
            this.input.style.height = this.input.scrollHeight + "px";
          } else {
            this.input.style.height = void 0;
          }
        }
      }
      render() {
        var _a2;
        return renderFormControl({
          inputId: this.inputId,
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpTextId: this.helpTextId,
          helpText: this.helpText,
          hasHelpTextSlot: this.hasHelpTextSlot,
          size: this.size
        }, T`
          <div
            part="base"
            class=${e23({
          textarea: true,
          "textarea--small": this.size === "small",
          "textarea--medium": this.size === "medium",
          "textarea--large": this.size === "large",
          "textarea--disabled": this.disabled,
          "textarea--focused": this.hasFocus,
          "textarea--empty": ((_a2 = this.value) == null ? void 0 : _a2.length) === 0,
          "textarea--invalid": this.invalid,
          "textarea--resize-none": this.resize === "none",
          "textarea--resize-vertical": this.resize === "vertical",
          "textarea--resize-auto": this.resize === "auto"
        })}
          >
            <textarea
              part="textarea"
              id=${this.inputId}
              class="textarea__control"
              name=${l4(this.name)}
              .value=${l5(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l4(this.placeholder)}
              rows=${l4(this.rows)}
              minlength=${l4(this.minlength)}
              maxlength=${l4(this.maxlength)}
              autocapitalize=${l4(this.autocapitalize)}
              autocorrect=${l4(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l4(this.spellcheck)}
              inputmode=${l4(this.inputmode)}
              aria-labelledby=${l4(getLabelledBy({
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpText: this.helpText,
          helpTextId: this.helpTextId,
          hasHelpTextSlot: this.hasHelpTextSlot
        }))}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        `);
      }
    };
    SlTextarea.styles = textarea_styles_default;
    __decorateClass2([
      o22(".textarea__control")
    ], SlTextarea.prototype, "input", 2);
    __decorateClass2([
      r4()
    ], SlTextarea.prototype, "hasFocus", 2);
    __decorateClass2([
      r4()
    ], SlTextarea.prototype, "hasHelpTextSlot", 2);
    __decorateClass2([
      r4()
    ], SlTextarea.prototype, "hasLabelSlot", 2);
    __decorateClass2([
      e4({ reflect: true })
    ], SlTextarea.prototype, "size", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "name", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "value", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "label", 2);
    __decorateClass2([
      e4({ attribute: "help-text" })
    ], SlTextarea.prototype, "helpText", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "placeholder", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlTextarea.prototype, "rows", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "resize", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "disabled", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "readonly", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlTextarea.prototype, "minlength", 2);
    __decorateClass2([
      e4({ type: Number })
    ], SlTextarea.prototype, "maxlength", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "pattern", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "required", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "invalid", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "autocapitalize", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "autocorrect", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "autocomplete", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlTextarea.prototype, "autofocus", 2);
    __decorateClass2([
      e4({ type: Boolean })
    ], SlTextarea.prototype, "spellcheck", 2);
    __decorateClass2([
      e4()
    ], SlTextarea.prototype, "inputmode", 2);
    __decorateClass2([
      watch2("disabled")
    ], SlTextarea.prototype, "handleDisabledChange", 1);
    __decorateClass2([
      watch2("rows")
    ], SlTextarea.prototype, "handleRowsChange", 1);
    __decorateClass2([
      watch2("helpText"),
      watch2("label")
    ], SlTextarea.prototype, "handleSlotChange", 1);
    __decorateClass2([
      watch2("value")
    ], SlTextarea.prototype, "handleValueChange", 1);
    SlTextarea = __decorateClass2([
      n5("sl-textarea")
    ], SlTextarea);

    // src/medblocks/text/input.ts
    var MbInput = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.textarea = false;
        this.label = "";
        this.required = false;
      }
      handleInput(e5) {
        const inputElement = e5.target;
        this.data = inputElement.value;
        this._mbInput.emit();
      }
      reportValidity() {
        let input;
        if (this.textarea) {
          input = this.shadowRoot.querySelector("sl-textarea");
        } else {
          input = this.shadowRoot.querySelector("sl-input");
        }
        return input.reportValidity();
      }
      render() {
        return this.textarea ? html`
            <sl-textarea
              .maxlength=${this.maxlength}
              .minlength=${this.minlength}
              ?required=${this.required}
              label=${this.label}
              @sl-input=${this.handleInput}
              value=${this.data || ""}
            ></sl-textarea>
          ` : html`
            <sl-input
              .min=${this.min}
              .max=${this.max}
              .maxlength=${this.maxlength}
              .minlength=${this.minlength}
              .type=${this.type}
              ?required=${this.required}
              label=${this.label}
              @sl-input=${this.handleInput}
              value=${this.data || ""}
            ></sl-input>
          `;
      }
    };
    __decorateClass([
      property({ type: String })
    ], MbInput.prototype, "data", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbInput.prototype, "textarea", 2);
    __decorateClass([
      property({ type: String })
    ], MbInput.prototype, "label", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbInput.prototype, "required", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbInput.prototype, "type", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbInput.prototype, "min", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbInput.prototype, "max", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbInput.prototype, "minlength", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbInput.prototype, "maxlength", 2);
    __decorateClass([
      event("mb-input")
    ], MbInput.prototype, "_mbInput", 2);
    MbInput = __decorateClass([
      customElement("mb-input")
    ], MbInput);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KBODJ7MY.js
    var button_styles_default = i2`
    ${component_styles_default}

    :host {
      display: inline-block;
      width: auto;
      cursor: pointer;
    }

    .button {
      display: inline-flex;
      align-items: stretch;
      justify-content: center;
      width: 100%;
      border-style: solid;
      border-width: var(--sl-input-border-width);
      font-family: var(--sl-input-font-family);
      font-weight: var(--sl-font-weight-semibold);
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0;
      transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
        var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
      cursor: inherit;
    }

    .button::-moz-focus-inner {
      border: 0;
    }

    .button:focus {
      outline: none;
    }

    .button.button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* When disabled, prevent mouse events from bubbling up */
    .button.button--disabled * {
      pointer-events: none;
    }

    /* Clicks on icons shouldn't prevent the button from gaining focus */
    .button::slotted(sl-icon) {
      pointer-events: none;
    }

    .button__prefix,
    .button__suffix {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
    }

    .button__label ::slotted(sl-icon) {
      vertical-align: -2px;
    }

    /*
    * Standard buttons
    */

    /* Default */
    .button.button--default {
      background-color: rgb(var(--sl-color-neutral-0));
      border-color: rgb(var(--sl-color-neutral-300));
      color: rgb(var(--sl-color-neutral-700));
    }

    .button.button--default:hover:not(.button--disabled) {
      background-color: rgb(var(--sl-color-primary-50));
      border-color: rgb(var(--sl-color-primary-300));
      color: rgb(var(--sl-color-primary-700));
    }

    .button.button--default${focusVisibleSelector}:not(.button--disabled) {
      background-color: rgb(var(--sl-color-primary-50));
      border-color: rgb(var(--sl-color-primary-400));
      color: rgb(var(--sl-color-primary-700));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
    }

    .button.button--default:active:not(.button--disabled) {
      background-color: rgb(var(--sl-color-primary-100));
      border-color: rgb(var(--sl-color-primary-400));
      color: rgb(var(--sl-color-primary-700));
    }

    /* Primary */
    .button.button--primary {
      background-color: rgb(var(--sl-color-primary-600));
      border-color: rgb(var(--sl-color-primary-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--primary:hover:not(.button--disabled) {
      background-color: rgb(var(--sl-color-primary-500));
      border-color: rgb(var(--sl-color-primary-500));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--primary${focusVisibleSelector}:not(.button--disabled) {
      background-color: rgb(var(--sl-color-primary-500));
      border-color: rgb(var(--sl-color-primary-500));
      color: rgb(var(--sl-color-neutral-0));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
    }

    .button.button--primary:active:not(.button--disabled) {
      background-color: rgb(var(--sl-color-primary-600));
      border-color: rgb(var(--sl-color-primary-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    /* Success */
    .button.button--success {
      background-color: rgb(var(--sl-color-success-600));
      border-color: rgb(var(--sl-color-success-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--success:hover:not(.button--disabled) {
      background-color: rgb(var(--sl-color-success-500));
      border-color: rgb(var(--sl-color-success-500));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--success${focusVisibleSelector}:not(.button--disabled) {
      background-color: rgb(var(--sl-color-success-600));
      border-color: rgb(var(--sl-color-success-600));
      color: rgb(var(--sl-color-neutral-0));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-success-500) / var(--sl-focus-ring-alpha));
    }

    .button.button--success:active:not(.button--disabled) {
      background-color: rgb(var(--sl-color-success-600));
      border-color: rgb(var(--sl-color-success-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    /* Neutral */
    .button.button--neutral {
      background-color: rgb(var(--sl-color-neutral-600));
      border-color: rgb(var(--sl-color-neutral-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--neutral:hover:not(.button--disabled) {
      background-color: rgb(var(--sl-color-neutral-500));
      border-color: rgb(var(--sl-color-neutral-500));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--neutral${focusVisibleSelector}:not(.button--disabled) {
      background-color: rgb(var(--sl-color-neutral-500));
      border-color: rgb(var(--sl-color-neutral-500));
      color: rgb(var(--sl-color-neutral-0));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-neutral-500) / var(--sl-focus-ring-alpha));
    }

    .button.button--neutral:active:not(.button--disabled) {
      background-color: rgb(var(--sl-color-neutral-600));
      border-color: rgb(var(--sl-color-neutral-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    /* Warning */
    .button.button--warning {
      background-color: rgb(var(--sl-color-warning-600));
      border-color: rgb(var(--sl-color-warning-600));
      color: rgb(var(--sl-color-neutral-0));
    }
    .button.button--warning:hover:not(.button--disabled) {
      background-color: rgb(var(--sl-color-warning-500));
      border-color: rgb(var(--sl-color-warning-500));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--warning${focusVisibleSelector}:not(.button--disabled) {
      background-color: rgb(var(--sl-color-warning-500));
      border-color: rgb(var(--sl-color-warning-500));
      color: rgb(var(--sl-color-neutral-0));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-warning-500) / var(--sl-focus-ring-alpha));
    }

    .button.button--warning:active:not(.button--disabled) {
      background-color: rgb(var(--sl-color-warning-600));
      border-color: rgb(var(--sl-color-warning-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    /* Danger */
    .button.button--danger {
      background-color: rgb(var(--sl-color-danger-600));
      border-color: rgb(var(--sl-color-danger-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--danger:hover:not(.button--disabled) {
      background-color: rgb(var(--sl-color-danger-500));
      border-color: rgb(var(--sl-color-danger-500));
      color: rgb(var(--sl-color-neutral-0));
    }

    .button.button--danger${focusVisibleSelector}:not(.button--disabled) {
      background-color: rgb(var(--sl-color-danger-500));
      border-color: rgb(var(--sl-color-danger-500));
      color: rgb(var(--sl-color-neutral-0));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
    }

    .button.button--danger:active:not(.button--disabled) {
      background-color: rgb(var(--sl-color-danger-600));
      border-color: rgb(var(--sl-color-danger-600));
      color: rgb(var(--sl-color-neutral-0));
    }

    /*
    * Text buttons
    */

    .button--text {
      background-color: transparent;
      border-color: transparent;
      color: rgb(var(--sl-color-primary-600));
    }

    .button--text:hover:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: rgb(var(--sl-color-primary-500));
    }

    .button--text${focusVisibleSelector}:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: rgb(var(--sl-color-primary-500));
      box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
    }

    .button--text:active:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: rgb(var(--sl-color-primary-700));
    }

    /*
    * Size modifiers
    */

    .button--small {
      font-size: var(--sl-button-font-size-small);
      height: var(--sl-input-height-small);
      line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
      border-radius: var(--sl-input-border-radius-small);
    }

    .button--medium {
      font-size: var(--sl-button-font-size-medium);
      height: var(--sl-input-height-medium);
      line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
      border-radius: var(--sl-input-border-radius-medium);
    }

    .button--large {
      font-size: var(--sl-button-font-size-large);
      height: var(--sl-input-height-large);
      line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
      border-radius: var(--sl-input-border-radius-large);
    }

    /*
    * Pill modifier
    */

    .button--pill.button--small {
      border-radius: var(--sl-input-height-small);
    }

    .button--pill.button--medium {
      border-radius: var(--sl-input-height-medium);
    }

    .button--pill.button--large {
      border-radius: var(--sl-input-height-large);
    }

    /*
    * Circle modifier
    */

    .button--circle {
      padding-left: 0;
      padding-right: 0;
    }

    .button--circle.button--small {
      width: var(--sl-input-height-small);
      border-radius: 50%;
    }

    .button--circle.button--medium {
      width: var(--sl-input-height-medium);
      border-radius: 50%;
    }

    .button--circle.button--large {
      width: var(--sl-input-height-large);
      border-radius: 50%;
    }

    .button--circle .button__prefix,
    .button--circle .button__suffix,
    .button--circle .button__caret {
      display: none;
    }

    /*
    * Caret modifier
    */

    .button--caret .button__suffix {
      display: none;
    }

    .button--caret .button__caret {
      display: flex;
      align-items: center;
    }

    .button--caret .button__caret svg {
      width: 1em;
      height: 1em;
    }

    /*
    * Loading modifier
    */

    .button--loading {
      position: relative;
      cursor: wait;
    }

    .button--loading .button__prefix,
    .button--loading .button__label,
    .button--loading .button__suffix,
    .button--loading .button__caret {
      visibility: hidden;
    }

    .button--loading sl-spinner {
      --indicator-color: currentColor;
      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }

    /*
    * Badges
    */

    .button ::slotted(sl-badge) {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(-50%) translateX(50%);
      pointer-events: none;
    }

    /*
    * Button spacing
    */

    .button--has-label.button--small .button__label {
      padding: 0 var(--sl-spacing-small);
    }

    .button--has-label.button--medium .button__label {
      padding: 0 var(--sl-spacing-medium);
    }

    .button--has-label.button--large .button__label {
      padding: 0 var(--sl-spacing-large);
    }

    .button--has-prefix.button--small {
      padding-left: var(--sl-spacing-x-small);
    }

    .button--has-prefix.button--small .button__label {
      padding-left: var(--sl-spacing-x-small);
    }

    .button--has-prefix.button--medium {
      padding-left: var(--sl-spacing-small);
    }

    .button--has-prefix.button--medium .button__label {
      padding-left: var(--sl-spacing-small);
    }

    .button--has-prefix.button--large {
      padding-left: var(--sl-spacing-small);
    }

    .button--has-prefix.button--large .button__label {
      padding-left: var(--sl-spacing-small);
    }

    .button--has-suffix.button--small,
    .button--caret.button--small {
      padding-right: var(--sl-spacing-x-small);
    }

    .button--has-suffix.button--small .button__label,
    .button--caret.button--small .button__label {
      padding-right: var(--sl-spacing-x-small);
    }

    .button--has-suffix.button--medium,
    .button--caret.button--medium {
      padding-right: var(--sl-spacing-small);
    }

    .button--has-suffix.button--medium .button__label,
    .button--caret.button--medium .button__label {
      padding-right: var(--sl-spacing-small);
    }

    .button--has-suffix.button--large,
    .button--caret.button--large {
      padding-right: var(--sl-spacing-small);
    }

    .button--has-suffix.button--large .button__label,
    .button--caret.button--large .button__label {
      padding-right: var(--sl-spacing-small);
    }

    /*
    * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
    * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
    * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
    * buttons and we style them here instead.
    */

    :host(.sl-button-group__button--first) .button {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.sl-button-group__button--inner) .button {
      border-radius: 0;
    }

    :host(.sl-button-group__button--last) .button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* All except the first */
    :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
      margin-left: calc(-1 * var(--sl-input-border-width));
    }

    /* Add a visual separator between solid buttons */
    :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [type='default']):not(:hover, :active, :focus))
      .button:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-left: solid 1px rgb(var(--sl-color-neutral-0) / 20%);
    }

    /* Bump focused buttons up so their focus ring isn't clipped */
    :host(.sl-button-group__button--hover) {
      z-index: 1;
    }

    :host(.sl-button-group__button--focus) {
      z-index: 2;
    }
  `;
    var SlButton = class extends h3 {
      constructor() {
        super(...arguments);
        this.hasFocus = false;
        this.hasLabel = false;
        this.hasPrefix = false;
        this.hasSuffix = false;
        this.type = "default";
        this.size = "medium";
        this.caret = false;
        this.disabled = false;
        this.loading = false;
        this.pill = false;
        this.circle = false;
        this.submit = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange();
      }
      click() {
        this.button.click();
      }
      focus(options) {
        this.button.focus(options);
      }
      blur() {
        this.button.blur();
      }
      handleSlotChange() {
        this.hasLabel = hasSlot(this);
        this.hasPrefix = hasSlot(this, "prefix");
        this.hasSuffix = hasSlot(this, "suffix");
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleClick(event2) {
        if (this.disabled || this.loading) {
          event2.preventDefault();
          event2.stopPropagation();
        }
      }
      render() {
        const isLink = this.href ? true : false;
        const interior = T`
        <span part="prefix" class="button__prefix">
          <slot @slotchange=${this.handleSlotChange} name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot @slotchange=${this.handleSlotChange} name="suffix"></slot>
        </span>
        ${this.caret ? T`
              <span part="caret" class="button__caret">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            ` : ""}
        ${this.loading ? T`<sl-spinner></sl-spinner>` : ""}
      `;
        return isLink ? T`
            <a
              part="base"
              class=${e23({
          button: true,
          "button--default": this.type === "default",
          "button--primary": this.type === "primary",
          "button--success": this.type === "success",
          "button--neutral": this.type === "neutral",
          "button--warning": this.type === "warning",
          "button--danger": this.type === "danger",
          "button--text": this.type === "text",
          "button--small": this.size === "small",
          "button--medium": this.size === "medium",
          "button--large": this.size === "large",
          "button--caret": this.caret,
          "button--circle": this.circle,
          "button--disabled": this.disabled,
          "button--focused": this.hasFocus,
          "button--loading": this.loading,
          "button--pill": this.pill,
          "button--has-label": this.hasLabel,
          "button--has-prefix": this.hasPrefix,
          "button--has-suffix": this.hasSuffix
        })}
              href=${l4(this.href)}
              target=${l4(this.target)}
              download=${l4(this.download)}
              rel=${l4(this.target ? "noreferrer noopener" : void 0)}
              role="button"
              aria-disabled=${this.disabled ? "true" : "false"}
              tabindex=${this.disabled ? "-1" : "0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @click=${this.handleClick}
            >
              ${interior}
            </a>
          ` : T`
            <button
              part="base"
              class=${e23({
          button: true,
          "button--default": this.type === "default",
          "button--primary": this.type === "primary",
          "button--success": this.type === "success",
          "button--neutral": this.type === "neutral",
          "button--warning": this.type === "warning",
          "button--danger": this.type === "danger",
          "button--text": this.type === "text",
          "button--small": this.size === "small",
          "button--medium": this.size === "medium",
          "button--large": this.size === "large",
          "button--caret": this.caret,
          "button--circle": this.circle,
          "button--disabled": this.disabled,
          "button--focused": this.hasFocus,
          "button--loading": this.loading,
          "button--pill": this.pill,
          "button--has-label": this.hasLabel,
          "button--has-prefix": this.hasPrefix,
          "button--has-suffix": this.hasSuffix
        })}
              ?disabled=${this.disabled}
              type=${this.submit ? "submit" : "button"}
              name=${l4(this.name)}
              value=${l4(this.value)}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @click=${this.handleClick}
            >
              ${interior}
            </button>
          `;
      }
    };
    SlButton.styles = button_styles_default;
    __decorateClass2([
      o22(".button")
    ], SlButton.prototype, "button", 2);
    __decorateClass2([
      r4()
    ], SlButton.prototype, "hasFocus", 2);
    __decorateClass2([
      r4()
    ], SlButton.prototype, "hasLabel", 2);
    __decorateClass2([
      r4()
    ], SlButton.prototype, "hasPrefix", 2);
    __decorateClass2([
      r4()
    ], SlButton.prototype, "hasSuffix", 2);
    __decorateClass2([
      e4({ reflect: true })
    ], SlButton.prototype, "type", 2);
    __decorateClass2([
      e4({ reflect: true })
    ], SlButton.prototype, "size", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "caret", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "disabled", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "loading", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "pill", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "circle", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "submit", 2);
    __decorateClass2([
      e4()
    ], SlButton.prototype, "name", 2);
    __decorateClass2([
      e4()
    ], SlButton.prototype, "value", 2);
    __decorateClass2([
      e4()
    ], SlButton.prototype, "href", 2);
    __decorateClass2([
      e4()
    ], SlButton.prototype, "target", 2);
    __decorateClass2([
      e4()
    ], SlButton.prototype, "download", 2);
    SlButton = __decorateClass2([
      n5("sl-button")
    ], SlButton);

    // src/medblocks/codedtext/buttons.ts
    var CodedTextButtons = class extends CodedTextElement {
      constructor() {
        super(...arguments);
        this.required = false;
        this._options = [];
      }
      get _optionElements() {
        return this.querySelectorAll("mb-option");
      }
      connectedCallback() {
        super.connectedCallback();
        const observer = new MutationObserver(() => {
          this._handleChildChange();
        });
        observer.observe(this, { childList: true });
        this._handleChildChange();
      }
      _handleChildChange() {
        this._options = [
          ...this.querySelectorAll("mb-option")
        ];
      }
      reportValidity() {
        const input = this.shadowRoot.querySelector("input");
        return input.reportValidity();
      }
      _handleInput(option) {
        let data = {
          code: option.value,
          value: option.label,
          terminology: this.terminology
        };
        if (option.ordinal) {
          data = __spreadProps(__spreadValues({}, data), { ordinal: parseInt(option.ordinal) });
        }
        this.data = data;
        if (this.data) {
          this.value = "valid";
        }
      }
      render() {
        var _a2;
        return html`
        <div style="position:relative;z-index:2" part="base">
          ${this.label ? html`<label part="label" class="label">${this.label}</label>` : null}
          <div class="buttons">
            ${this._options.map((option) => {
          var _a3;
          return html` <sl-button
                  @click=${() => this._handleInput(option)}
                  type=${((_a3 = this.data) == null ? void 0 : _a3.code) === option.value ? "primary" : "default"}
                  >${option.label}
                </sl-button>`;
        })}
          </div>
          <input
            value=${((_a2 = this.data) == null ? void 0 : _a2.code) || ""}
            style="transform:scale(0.025);position:absolute;top:40px;opacity:0.1"
            name="input"
            ?required=${this.required}
          />
        </div>
      `;
      }
    };
    CodedTextButtons.styles = css`
      .buttons {
        // display: flex;
        // flex-wrap: wrap;
        gap: var(--sl-spacing-xx-small);
      }

      .label {
        font-size: var(--sl-input-label-font-size-medium);
        display: inline-block;
        color: var(--sl-input-label-color);
        margin-bottom: var(--sl-spacing-xxx-small);
      }
    `;
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], CodedTextButtons.prototype, "required", 2);
    __decorateClass([
      state()
    ], CodedTextButtons.prototype, "_options", 2);
    CodedTextButtons = __decorateClass([
      customElement("mb-buttons")
    ], CodedTextButtons);

    // src/medblocks/quantity/QuantityElement.ts
    var QuantityElement = class extends EhrElement {
    };
    __decorateClass([
      property({ type: Object })
    ], QuantityElement.prototype, "data", 2);
    __decorateClass([
      event("mb-input")
    ], QuantityElement.prototype, "_mbInput", 2);

    // src/medblocks/quantity/quantity.ts
    var MbQuantity = class extends QuantityElement {
      constructor() {
        super(...arguments);
        this.required = false;
        this.hideunit = false;
        this.units = [];
      }
      handleChildChange() {
        this.units = [...this.querySelectorAll("mb-unit")];
      }
      reportValidity() {
        const input = this.shadowRoot.querySelector("sl-input");
        return input.reportValidity();
      }
      connectedCallback() {
        super.connectedCallback();
        const observer = new MutationObserver(() => {
          this.handleChildChange();
        });
        observer.observe(this, { attributes: true, childList: true });
      }
      handleInput(e5) {
        var _a2;
        const input = e5.target;
        if (input.value === "") {
          this.data = void 0;
        } else {
          this.data = {
            unit: ((_a2 = this.data) == null ? void 0 : _a2.unit) || this.default,
            magnitude: parseFloat(input.value)
          };
        }
      }
      handleSelect(e5) {
        var _a2;
        const select = e5.target;
        if (select.value) {
          this.data = __spreadProps(__spreadValues({}, this.data), {
            unit: select.value
          });
        } else {
          if ((_a2 = this.data) == null ? void 0 : _a2.magnitude) {
            this.data = __spreadProps(__spreadValues({}, this.data), {
              unit: void 0
            });
          } else {
            this.data = void 0;
          }
        }
      }
      render() {
        var _a2, _b, _c, _d, _e;
        return html`
        <sl-input
          .step=${(_a2 = this.step) != null ? _a2 : "any"}
          .required=${this.required}
          .max=${this.max}
          .min=${this.min}
          label=${ifDefined(this.label)}
          type="number"
          @sl-input=${this.handleInput}
          .value=${((_c = (_b = this.data) == null ? void 0 : _b.magnitude) == null ? void 0 : _c.toString()) || ""}
        ></sl-input>
        <sl-select
          style="${this.hideunit ? "display: none" : ""}"
          placeholder="Select units"
          .value=${(_e = (_d = this.data) == null ? void 0 : _d.unit) != null ? _e : ""}
          @sl-change=${this.handleSelect}
        >
          ${this.units.map((unit) => html`<sl-menu-item value=${unit.unit}>${unit.label}</sl-menu-item>`)}
        </sl-select>
        <slot style="display: none" @slotchange=${this.handleChildChange}></slot>
      `;
      }
    };
    MbQuantity.styles = css`
      :host {
        display: flex;
        flex: 1;
        align-items: flex-end;
      }

      sl-input {
        width: 0;
        flex: 3 1 auto;
        margin-right: var(--sl-spacing-x-small);
      }

      sl-select {
        flex: 2 1 auto;
        width: 0;
      }
    `;
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbQuantity.prototype, "default", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbQuantity.prototype, "required", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbQuantity.prototype, "max", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbQuantity.prototype, "min", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbQuantity.prototype, "hideunit", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbQuantity.prototype, "step", 2);
    __decorateClass([
      state()
    ], MbQuantity.prototype, "units", 2);
    MbQuantity = __decorateClass([
      customElement("mb-quantity")
    ], MbQuantity);

    // src/medblocks/quantity/unit.ts
    var MbUnit = class extends LitElement {
    };
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbUnit.prototype, "unit", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbUnit.prototype, "label", 2);
    MbUnit = __decorateClass([
      customElement("mb-unit")
    ], MbUnit);

    // src/medblocks/context/context.ts
    var MbContext = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.autocontext = true;
      }
      connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
          this._mbInput.emit();
        }, 50);
      }
    };
    MbContext.styles = css`
    :host {
      display: none;
    }
  `;
    __decorateClass([
      property({ type: Object })
    ], MbContext.prototype, "data", 2);
    __decorateClass([
      event("mb-input")
    ], MbContext.prototype, "_mbInput", 2);
    __decorateClass([
      property({ type: Boolean })
    ], MbContext.prototype, "autocontext", 2);
    MbContext = __decorateClass([
      customElement("mb-context")
    ], MbContext);

    // src/medblocks/submit/submit.ts
    var MbSubmit = class extends LitElement {
      handleClick() {
        this.submit.emit();
      }
      connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this.handleClick);
      }
      disconnectedCallback() {
        this.removeEventListener("click", this.handleClick);
      }
      render() {
        return html`
        <slot></slot>
      `;
      }
    };
    __decorateClass([
      event("mb-trigger-submit")
    ], MbSubmit.prototype, "submit", 2);
    MbSubmit = __decorateClass([
      customElement("mb-submit")
    ], MbSubmit);

    // src/medblocks/datetime/date.ts
    var MbDateTime = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.label = "";
        this.time = false;
        this.required = false;
      }
      handleInput(e5) {
        const inputElement = e5.target;
        this.data = inputElement.value;
        this._mbInput.emit();
      }
      reportValidity() {
        const input = this.shadowRoot.querySelector("sl-input");
        return input.reportValidity();
      }
      render() {
        return html`
        <sl-input
          ?required=${this.required}
          type="${this.time ? "datetime-local" : "date"}"
          label=${this.label}
          @sl-input=${this.handleInput}
          value=${this.data || ""}
        >
        </sl-input>
      `;
      }
    };
    MbDateTime.styles = css`
      sl-input::part(base) {
        width: unset;
      }
    `;
    __decorateClass([
      property({ type: String })
    ], MbDateTime.prototype, "data", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbDateTime.prototype, "label", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDateTime.prototype, "time", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDateTime.prototype, "required", 2);
    __decorateClass([
      event("mb-input")
    ], MbDateTime.prototype, "_mbInput", 2);
    MbDateTime = __decorateClass([
      customElement("mb-date")
    ], MbDateTime);

    // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NGCDMUDB.js
    var checkbox_styles_default = i2`
    ${component_styles_default}

    :host {
      display: inline-block;
    }

    .checkbox {
      display: inline-flex;
      align-items: center;
      font-family: var(--sl-input-font-family);
      font-size: var(--sl-input-font-size-medium);
      font-weight: var(--sl-input-font-weight);
      color: rgb(var(--sl-input-color));
      vertical-align: middle;
      cursor: pointer;
    }

    .checkbox__control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--sl-toggle-size);
      height: var(--sl-toggle-size);
      border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
      border-radius: 2px;
      background-color: rgb(var(--sl-input-background-color));
      color: rgb(var(--sl-color-neutral-0));
      transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
        var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    }

    .checkbox__input {
      position: absolute;
      opacity: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }

    .checkbox__control .checkbox__icon {
      display: inline-flex;
      width: var(--sl-toggle-size);
      height: var(--sl-toggle-size);
    }

    .checkbox__control .checkbox__icon svg {
      width: 100%;
      height: 100%;
    }

    /* Hover */
    .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
      border-color: rgb(var(--sl-input-border-color-hover));
      background-color: rgb(var(--sl-input-background-color-hover));
    }

    /* Focus */
    .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
      .checkbox__input${focusVisibleSelector}
      ~ .checkbox__control {
      border-color: rgb(var(--sl-input-border-color-focus));
      background-color: rgb(var(--sl-input-background-color-focus));
      box-shadow: var(--sl-focus-ring);
    }

    /* Checked/indeterminate */
    .checkbox--checked .checkbox__control,
    .checkbox--indeterminate .checkbox__control {
      border-color: rgb(var(--sl-color-primary-600));
      background-color: rgb(var(--sl-color-primary-600));
    }

    /* Checked/indeterminate + hover */
    .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
    .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
      border-color: rgb(var(--sl-color-primary-500));
      background-color: rgb(var(--sl-color-primary-500));
    }

    /* Checked/indeterminate + focus */
    .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control,
    .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
      .checkbox__input${focusVisibleSelector}
      ~ .checkbox__control {
      border-color: rgb(var(--sl-color-primary-500));
      background-color: rgb(var(--sl-color-primary-500));
      box-shadow: var(--sl-focus-ring);
    }

    /* Disabled */
    .checkbox--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .checkbox__label {
      line-height: var(--sl-toggle-size);
      margin-left: 0.5em;
      user-select: none;
    }
  `;
    var id5 = 0;
    var SlCheckbox = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `checkbox-${++id5}`;
        this.labelId = `checkbox-label-${id5}`;
        this.hasFocus = false;
        this.disabled = false;
        this.required = false;
        this.checked = false;
        this.indeterminate = false;
        this.invalid = false;
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      click() {
        this.input.click();
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleClick() {
        this.checked = !this.checked;
        this.indeterminate = false;
        emit(this, "sl-change");
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleStateChange() {
        this.invalid = !this.input.checkValidity();
      }
      render() {
        return T`
        <label
          part="base"
          class=${e23({
          checkbox: true,
          "checkbox--checked": this.checked,
          "checkbox--disabled": this.disabled,
          "checkbox--focused": this.hasFocus,
          "checkbox--indeterminate": this.indeterminate
        })}
          for=${this.inputId}
        >
          <input
            id=${this.inputId}
            class="checkbox__input"
            type="checkbox"
            name=${l4(this.name)}
            value=${l4(this.value)}
            .indeterminate=${l5(this.indeterminate)}
            .checked=${l5(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="checkbox"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span part="control" class="checkbox__control">
            ${this.checked ? T`
                  <span part="checked-icon" class="checkbox__icon">
                    <svg viewBox="0 0 16 16">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g stroke="currentColor" stroke-width="2">
                          <g transform="translate(3.428571, 3.428571)">
                            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                ` : ""}
            ${!this.checked && this.indeterminate ? T`
                  <span part="indeterminate-icon" class="checkbox__icon">
                    <svg viewBox="0 0 16 16">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g stroke="currentColor" stroke-width="2">
                          <g transform="translate(2.285714, 6.857143)">
                            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                ` : ""}
          </span>

          <span part="label" id=${this.labelId} class="checkbox__label">
            <slot></slot>
          </span>
        </label>
      `;
      }
    };
    SlCheckbox.styles = checkbox_styles_default;
    __decorateClass2([
      o22('input[type="checkbox"]')
    ], SlCheckbox.prototype, "input", 2);
    __decorateClass2([
      r4()
    ], SlCheckbox.prototype, "hasFocus", 2);
    __decorateClass2([
      e4()
    ], SlCheckbox.prototype, "name", 2);
    __decorateClass2([
      e4()
    ], SlCheckbox.prototype, "value", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "disabled", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "required", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "checked", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "indeterminate", 2);
    __decorateClass2([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "invalid", 2);
    __decorateClass2([
      watch2("disabled")
    ], SlCheckbox.prototype, "handleDisabledChange", 1);
    __decorateClass2([
      watch2("checked", { waitUntilFirstUpdate: true }),
      watch2("indeterminate", { waitUntilFirstUpdate: true })
    ], SlCheckbox.prototype, "handleStateChange", 1);
    SlCheckbox = __decorateClass2([
      n5("sl-checkbox")
    ], SlCheckbox);

    // src/medblocks/boolean/checkbox.ts
    var MbCheckBox = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.data = void 0;
        this.disabled = false;
        this.required = false;
      }
      _handleChange(e5) {
        const checkbox = e5.target;
        this.data = checkbox.checked ? true : false;
        this._mbInput.emit();
      }
      reportValidity() {
        const checked = this.shadowRoot.querySelector("sl-checkbox");
        return checked.reportValidity();
      }
      render() {
        return html`<sl-checkbox
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?checked=${this.data}
        ?indeterminate=${this.data == null}
        @sl-change=${this._handleChange}
        >${this.label}</sl-checkbox
      >`;
      }
    };
    __decorateClass([
      property({ type: Boolean })
    ], MbCheckBox.prototype, "data", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbCheckBox.prototype, "disabled", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbCheckBox.prototype, "required", 2);
    MbCheckBox = __decorateClass([
      customElement("mb-checkbox")
    ], MbCheckBox);

    // src/medblocks/proportion/percent.ts
    var MbPercent = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.data = void 0;
        this.required = false;
      }
      _handleChange(e5) {
        const inputElement = e5.target;
        if (inputElement.value === "") {
          this.data = void 0;
        } else {
          this.data = {
            numerator: parseFloat(inputElement.value),
            denominator: 100,
            type: 2
          };
        }
        this._mbInput.emit();
      }
      reportValidity() {
        const input = this.shadowRoot.querySelector("sl-input");
        return input.reportValidity();
      }
      render() {
        var _a2, _b;
        return html`<sl-input
        ?required=${this.required}
        .min=${this.min}
        .max=${this.max}
        type="number"
        label=${ifDefined(this.label)}
        @sl-input=${this._handleChange}
        .value=${((_b = (_a2 = this.data) == null ? void 0 : _a2.numerator) == null ? void 0 : _b.toString()) || ""}
      ></sl-input>`;
      }
    };
    __decorateClass([
      property({ type: Object })
    ], MbPercent.prototype, "data", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbPercent.prototype, "required", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbPercent.prototype, "max", 2);
    __decorateClass([
      property({ type: Number, reflect: true })
    ], MbPercent.prototype, "min", 2);
    MbPercent = __decorateClass([
      customElement("mb-percent")
    ], MbPercent);

    // src/medblocks/context/checkboxAny.ts
    var MbCheckBox2 = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.data = void 0;
        this.bind = void 0;
        this.disabled = false;
      }
      _handleChange(e5) {
        const checkbox = e5.target;
        this.data = checkbox.checked ? this.bind : void 0;
      }
      render() {
        return html`<sl-checkbox
        ?disabled=${this.disabled}
        ?checked=${this.data ? true : false}
        @sl-change=${this._handleChange}
        >${this.label}</sl-checkbox
      >`;
      }
    };
    __decorateClass([
      property({ type: Object })
    ], MbCheckBox2.prototype, "data", 2);
    __decorateClass([
      property({ type: Object })
    ], MbCheckBox2.prototype, "bind", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbCheckBox2.prototype, "disabled", 2);
    MbCheckBox2 = __decorateClass([
      customElement("mb-checkbox-any")
    ], MbCheckBox2);

    // src/medblocks/text/text-select.ts
    var MbTextSelect = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.multiple = false;
        this.required = false;
        this._options = [];
      }
      get _optionElements() {
        return this.querySelectorAll("mb-option");
      }
      handleInput(e5) {
        const select = e5.target;
        if (select.value) {
          this.data = select.value;
          this._mbInput.emit();
        }
      }
      connectedCallback() {
        super.connectedCallback();
        const observer = new MutationObserver(() => {
          this.handleChildChange();
        });
        observer.observe(this, { childList: true });
        this.handleChildChange();
      }
      handleChildChange() {
        this._options = [
          ...this.querySelectorAll("mb-option")
        ];
      }
      reportValidity() {
        const select = this.shadowRoot.querySelector("sl-select");
        return select.reportValidity();
      }
      render() {
        var _a2;
        return html`
        <sl-select
          clearable
          ?required=${this.required}
          ?multiple=${this.multiple}
          placeholder=${(_a2 = this.placeholder) != null ? _a2 : "Please select"}
          label=${ifDefined(this.label)}
          @sl-change=${this.handleInput}
          @sl-clear=${() => {
          this.data = void 0;
          this._mbInput.emit();
        }}
          .hoist=${true}
          .value=${this.data || ""}
        >
          ${this._options.map((option) => html`<sl-menu-item .value=${option.value}
                >${option.label}
              </sl-menu-item>`)}
        </sl-select>
        <slot @slotchange=${this.handleChildChange}></slot>
      `;
      }
    };
    __decorateClass([
      property({ type: Object })
    ], MbTextSelect.prototype, "data", 2);
    __decorateClass([
      property({ type: String })
    ], MbTextSelect.prototype, "terminology", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbTextSelect.prototype, "multiple", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbTextSelect.prototype, "required", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbTextSelect.prototype, "placeholder", 2);
    __decorateClass([
      state()
    ], MbTextSelect.prototype, "_options", 2);
    MbTextSelect = __decorateClass([
      customElement("mb-text-select")
    ], MbTextSelect);

    // src/medblocks/text/input-multiple.ts
    var MbInputMultiple = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.data = [];
        this.multiple = true;
        this.placeholder = "";
        this.required = false;
        this.value = "";
      }
      handleClear(tagIndex) {
        this.data = this.data.filter((_2, i5) => i5 !== tagIndex);
        this._mbInput.emit();
      }
      handleInput(e5) {
        const target = e5.target;
        this.value = target.value;
      }
      addValue() {
        if (this.value !== "") {
          this.data = [...this.data, this.value];
          this.value = "";
          this._mbInput.emit();
        }
      }
      connectedCallback() {
        super.connectedCallback();
        this.addEventListener("keypress", (event2) => {
          if (event2.key === "Enter") {
            this.addValue();
          }
        });
      }
      reportValidity() {
        const input = this.shadowRoot.querySelector("sl-input");
        if (this.data.length > 0) {
          return true;
        }
        return input.reportValidity();
      }
      render() {
        return html`
        <sl-input
          ?required=${this.required}
          help-text=${`Press enter to add ${this.placeholder}`}
          @sl-input=${this.handleInput}
          label=${this.label || ""}
          .value=${this.value}
          @sl-blur=${() => this.addValue()}
        >
          ${this.value && html`<sl-icon @click=${this.addValue} library="medblocks" name="arrow-right-circle" slot="suffix"></sl-icon>
                  </sl-icon>`}
        </sl-input>
        <div>
          ${this.data.map((s6, i5) => html`<sl-tag
                size="medium"
                @sl-clear=${() => this.handleClear(i5)}
                clearable
                >${s6}</sl-tag
              >`)}
        </div>
      `;
      }
    };
    MbInputMultiple.styles = css`
      :host {
        display: flex;
        flex-direction: column;
      }
      sl-tag {
        margin: var(--sl-spacing-x-small) var(--sl-spacing-xx-small) 0 0;
      }
      sl-icon {
        font-size: var(--sl-font-size-large);
        cursor: pointer;
      }
    `;
    __decorateClass([
      property({ type: Array })
    ], MbInputMultiple.prototype, "data", 2);
    __decorateClass([
      property({ type: Boolean })
    ], MbInputMultiple.prototype, "multiple", 2);
    __decorateClass([
      property({ type: String, reflect: true })
    ], MbInputMultiple.prototype, "placeholder", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbInputMultiple.prototype, "required", 2);
    __decorateClass([
      state()
    ], MbInputMultiple.prototype, "value", 2);
    MbInputMultiple = __decorateClass([
      customElement("mb-input-multiple")
    ], MbInputMultiple);

    // src/medblocks/duration/duration.ts
    var MbDuration = class extends EhrElement {
      constructor() {
        super(...arguments);
        this.year = false;
        this.month = false;
        this.week = false;
        this.day = false;
        this.hour = false;
        this.minute = false;
        this.second = false;
        this.required = false;
        this._state = {};
      }
      parsePeriod(period) {
        if (period) {
          const [periodPart, t4] = period.split("T");
          const p2 = periodPart.replace("P", "");
          this._state.year = this.getPart(p2, "Y");
          this._state.month = this.getPart(p2, "M");
          this._state.week = this.getPart(p2, "W");
          this._state.day = this.getPart(p2, "D");
          if (t4) {
            this._state.hour = this.getPart(t4, "H");
            this._state.minute = this.getPart(t4, "M");
            this._state.second = this.getPart(t4, "S");
          }
        }
      }
      getPart(periodPart, part) {
        const myRegexp = new RegExp(`(\\d)${part}`, "g");
        const match = myRegexp.exec(periodPart);
        return match ? match[1] : void 0;
      }
      serializePeriod() {
        const hour = this._state.hour ? `${this._state.hour}H` : "";
        const minute = this._state.minute ? `${this._state.minute}M` : "";
        const second = this._state.second ? `${this._state.second}S` : "";
        const t4 = [hour, minute, second].join("");
        const year = this._state.year ? `${this._state.year}Y` : "";
        const month = this._state.month ? `${this._state.month}M` : "";
        const week = this._state.week ? `${this._state.week}W` : "";
        const day = this._state.day ? `${this._state.day}D` : "";
        const p2 = [year, month, week, day].join("");
        const timePart = t4 ? `T${t4}` : "";
        const periodPart = p2 ? `P${p2}` : "";
        if (!periodPart && !timePart)
          return void 0;
        if (!periodPart && timePart)
          return `P${timePart}`;
        else
          return `${periodPart}${timePart}`;
      }
      get data() {
        return this.serializePeriod();
      }
      set data(period) {
        const oldVal = this.data;
        this.parsePeriod(period);
        this.requestUpdate("data", oldVal);
      }
      handleInput(value, e5) {
        const oldVal = this.data;
        const target = e5.target;
        this._state = __spreadProps(__spreadValues({}, this._state), { [value]: target.value });
        this.requestUpdate("data", oldVal);
        this._mbInput.emit();
      }
      formatDuration(value) {
        return value.charAt(0).toUpperCase() + value.slice(1) + "s";
      }
      reportValidity() {
        if (this.data) {
          return true;
        } else {
          const input = this.shadowRoot.querySelector("sl-input");
          return input.reportValidity();
        }
      }
      getInputs() {
        const allDurations = {
          year: this.year,
          month: this.month,
          week: this.week,
          day: this.day,
          hour: this.hour,
          minute: this.minute,
          second: this.second
        };
        const durationKeys = Object.keys(allDurations);
        const toRender = durationKeys.every((a4) => allDurations[a4] === false) ? durationKeys : durationKeys.filter((a4) => allDurations[a4]);
        return toRender.map((a4) => html`<sl-input
        id=${a4}
        type="number"
        ?required=${this.required}
        help-text=${this.formatDuration(a4)}
        .value=${this._state[a4] || ""}
        @sl-input=${(e5) => this.handleInput(a4, e5)}
        ></sl-input>`);
      }
      render() {
        return html`
      ${this.label ? html`<label part="label" class="label">${this.label}</label>` : null}
      <div>
      ${this.getInputs()}
      </div>
      `;
      }
    };
    MbDuration.styles = css`
      div {
        display: flex;
        gap: 10px;
      }
      .label {
        font-size: var(--sl-input-label-font-size-medium);
        display: inline-block;
        color: var(--sl-input-label-color);
        margin-bottom: var(--sl-spacing-xxx-small);
      }
      sl-input {
        width: 0;
        flex: 1 1 auto;
      }
    `;
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "year", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "month", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "week", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "day", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "hour", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "minute", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "second", 2);
    __decorateClass([
      property({ type: Boolean, reflect: true })
    ], MbDuration.prototype, "required", 2);
    __decorateClass([
      state()
    ], MbDuration.prototype, "_state", 2);
    MbDuration = __decorateClass([
      customElement("mb-duration")
    ], MbDuration);

    // medblocks.ts
    registerIcons();
  })();
  /**
  * @license
  * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  * This code may only be used under the BSD style license found at
  * http://polymer.github.io/LICENSE.txt
  * The complete set of authors may be found at
  * http://polymer.github.io/AUTHORS.txt
  * The complete set of contributors may be found at
  * http://polymer.github.io/CONTRIBUTORS.txt
  * Code distributed by Google as part of the polymer project is also
  * subject to an additional IP rights grant found at
  * http://polymer.github.io/PATENTS.txt
  */
  /**
  * @license
  * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  * This code may only be used under the BSD style license found at
  * http://polymer.github.io/LICENSE.txt
  * The complete set of authors may be found at
  * http://polymer.github.io/AUTHORS.txt
  * The complete set of contributors may be found at
  * http://polymer.github.io/CONTRIBUTORS.txt
  * Code distributed by Google as part of the polymer project is also
  * subject to an additional IP rights grant found at
  * http://polymer.github.io/PATENTS.txt
  */
  /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  /**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  /**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  /**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  /**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
