/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => GitSyncPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var child_process = __toESM(require("child_process"));
var DEFAULT_SETTINGS = {
  gitRepoPath: "",
  syncButtonLocation: "ribbon"
};
var GitSyncPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new GitSyncSettingTab(this.app, this));
    this.addSyncButton();
    this.addCommand({
      id: "git-sync",
      name: "\u6267\u884CGit\u540C\u6B65",
      callback: () => this.syncGit()
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  addSyncButton() {
    if (this.settings.syncButtonLocation === "ribbon") {
      this.ribbonIconEl = this.addRibbonIcon("sync", "Git\u540C\u6B65", (evt) => {
        this.syncGit();
      });
    } else {
      this.statusBarItem = this.addStatusBarItem();
      this.statusBarItem.setText("Git\u540C\u6B65");
      this.statusBarItem.onClickEvent(() => this.syncGit());
    }
  }
  async syncGit() {
    if (!this.settings.gitRepoPath) {
      new import_obsidian.Notice("\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u914D\u7F6EGit\u4ED3\u5E93\u8DEF\u5F84");
      return;
    }
    new import_obsidian.Notice("\u5F00\u59CB\u540C\u6B65...");
    try {
      const status = await this.execGitCommand("git status --porcelain");
      const hasLocalChanges = status.trim().length > 0;
      if (hasLocalChanges) {
        await this.execGitCommand("git add .");
        await this.execGitCommand('git commit -m "Auto sync: ' + new Date().toISOString() + '"');
        new import_obsidian.Notice("\u672C\u5730\u66F4\u6539\u5DF2\u63D0\u4EA4");
      }
      const pullResult = await this.execGitCommand("git pull");
      if (pullResult.includes("Already up to date.")) {
        new import_obsidian.Notice("\u672C\u5730\u5DF2\u662F\u6700\u65B0\uFF0C\u65E0\u9700\u4ECEGitee\u62C9\u53D6");
      } else {
        new import_obsidian.Notice("\u4ECEGitee\u6210\u529F\u62C9\u53D6\u66F4\u65B0");
      }
      if (hasLocalChanges) {
        await this.execGitCommand("git push");
        new import_obsidian.Notice("\u672C\u5730\u66F4\u6539\u5DF2\u63A8\u9001\u5230Gitee");
      } else {
        const pushResult = await this.execGitCommand("git push");
        if (pushResult.includes("Everything up-to-date")) {
          new import_obsidian.Notice("Gitee\u5DF2\u662F\u6700\u65B0\uFF0C\u65E0\u9700\u63A8\u9001");
        } else {
          new import_obsidian.Notice("\u6210\u529F\u63A8\u9001\u66F4\u65B0\u5230Gitee");
        }
      }
      if (!hasLocalChanges && pullResult.includes("Already up to date.")) {
        new import_obsidian.Notice("\u672C\u5730\u548CGitee\u90FD\u662F\u6700\u65B0\u7684\uFF0C\u6CA1\u6709\u9700\u8981\u540C\u6B65\u7684\u66F4\u6539");
      } else {
        new import_obsidian.Notice("\u540C\u6B65\u5B8C\u6210");
      }
    } catch (error) {
      new import_obsidian.Notice("\u540C\u6B65\u5931\u8D25: " + error);
    }
  }
  async execGitCommand(command) {
    return new Promise((resolve, reject) => {
      child_process.exec(command, { cwd: this.settings.gitRepoPath }, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }
};
var GitSyncSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Git\u4ED3\u5E93\u8DEF\u5F84").setDesc("\u8BBE\u7F6EGit\u4ED3\u5E93\u7684\u672C\u5730\u8DEF\u5F84").addText((text) => text.setPlaceholder("\u8F93\u5165Git\u4ED3\u5E93\u8DEF\u5F84").setValue(this.plugin.settings.gitRepoPath).onChange(async (value) => {
      this.plugin.settings.gitRepoPath = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("\u540C\u6B65\u6309\u94AE\u4F4D\u7F6E").setDesc("\u9009\u62E9\u540C\u6B65\u6309\u94AE\u663E\u793A\u7684\u4F4D\u7F6E").addDropdown((dropdown) => dropdown.addOption("ribbon", "\u5DE6\u4FA7\u529F\u80FD\u533A").addOption("statusBar", "\u72B6\u6001\u680F").setValue(this.plugin.settings.syncButtonLocation).onChange(async (value) => {
      var _a, _b;
      this.plugin.settings.syncButtonLocation = value;
      await this.plugin.saveSettings();
      (_a = this.plugin.ribbonIconEl) == null ? void 0 : _a.remove();
      (_b = this.plugin.statusBarItem) == null ? void 0 : _b.remove();
      this.plugin.addSyncButton();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBCdXR0b25Db21wb25lbnQgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCAqIGFzIGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcblxyXG4vLyBSZW1lbWJlciB0byByZW5hbWUgdGhlc2UgY2xhc3NlcyBhbmQgaW50ZXJmYWNlcyFcclxuXHJcbmludGVyZmFjZSBHaXRTeW5jUGx1Z2luU2V0dGluZ3Mge1xyXG5cdGdpdFJlcG9QYXRoOiBzdHJpbmc7XHJcblx0c3luY0J1dHRvbkxvY2F0aW9uOiAncmliYm9uJyB8ICdzdGF0dXNCYXInO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBHaXRTeW5jUGx1Z2luU2V0dGluZ3MgPSB7XHJcblx0Z2l0UmVwb1BhdGg6ICcnLFxyXG5cdHN5bmNCdXR0b25Mb2NhdGlvbjogJ3JpYmJvbidcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0U3luY1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IEdpdFN5bmNQbHVnaW5TZXR0aW5ncztcclxuXHRzdGF0dXNCYXJJdGVtOiBIVE1MRWxlbWVudDtcclxuXHRyaWJib25JY29uRWw6IEhUTUxFbGVtZW50O1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgR2l0U3luY1NldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcblx0XHR0aGlzLmFkZFN5bmNCdXR0b24oKTtcclxuXHJcblx0XHQvLyBcdTZERkJcdTUyQTBcdTU0N0RcdTRFRTRcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnZ2l0LXN5bmMnLFxyXG5cdFx0XHRuYW1lOiAnXHU2MjY3XHU4ODRDR2l0XHU1NDBDXHU2QjY1JyxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHRoaXMuc3luY0dpdCgpLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0fVxyXG5cclxuXHRhZGRTeW5jQnV0dG9uKCkge1xyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3Muc3luY0J1dHRvbkxvY2F0aW9uID09PSAncmliYm9uJykge1xyXG5cdFx0XHR0aGlzLnJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignc3luYycsICdHaXRcdTU0MENcdTZCNjUnLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zeW5jR2l0KCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJJdGVtID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XHJcblx0XHRcdHRoaXMuc3RhdHVzQmFySXRlbS5zZXRUZXh0KCdHaXRcdTU0MENcdTZCNjUnKTtcclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJJdGVtLm9uQ2xpY2tFdmVudCgoKSA9PiB0aGlzLnN5bmNHaXQoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBzeW5jR2l0KCkge1xyXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmdpdFJlcG9QYXRoKSB7XHJcblx0XHRcdG5ldyBOb3RpY2UoJ1x1OEJGN1x1NTE0OFx1NTcyOFx1OEJCRVx1N0Y2RVx1NEUyRFx1OTE0RFx1N0Y2RUdpdFx1NEVEM1x1NUU5M1x1OERFRlx1NUY4NCcpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bmV3IE5vdGljZSgnXHU1RjAwXHU1OUNCXHU1NDBDXHU2QjY1Li4uJyk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly8gXHU2OEMwXHU2N0U1XHU2NzJDXHU1NzMwXHU1M0Q4XHU2NkY0XHJcblx0XHRcdGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZXhlY0dpdENvbW1hbmQoJ2dpdCBzdGF0dXMgLS1wb3JjZWxhaW4nKTtcclxuXHRcdFx0Y29uc3QgaGFzTG9jYWxDaGFuZ2VzID0gc3RhdHVzLnRyaW0oKS5sZW5ndGggPiAwO1xyXG5cclxuXHRcdFx0aWYgKGhhc0xvY2FsQ2hhbmdlcykge1xyXG5cdFx0XHRcdGF3YWl0IHRoaXMuZXhlY0dpdENvbW1hbmQoJ2dpdCBhZGQgLicpO1xyXG5cdFx0XHRcdGF3YWl0IHRoaXMuZXhlY0dpdENvbW1hbmQoJ2dpdCBjb21taXQgLW0gXCJBdXRvIHN5bmM6ICcgKyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnXCInKTtcclxuXHRcdFx0XHRuZXcgTm90aWNlKCdcdTY3MkNcdTU3MzBcdTY2RjRcdTY1MzlcdTVERjJcdTYzRDBcdTRFQTQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gXHU2MkM5XHU1M0Q2XHU4RkRDXHU3QTBCXHU2NkY0XHU2NTM5XHJcblx0XHRcdGNvbnN0IHB1bGxSZXN1bHQgPSBhd2FpdCB0aGlzLmV4ZWNHaXRDb21tYW5kKCdnaXQgcHVsbCcpO1xyXG5cdFx0XHRpZiAocHVsbFJlc3VsdC5pbmNsdWRlcygnQWxyZWFkeSB1cCB0byBkYXRlLicpKSB7XHJcblx0XHRcdFx0bmV3IE5vdGljZSgnXHU2NzJDXHU1NzMwXHU1REYyXHU2NjJGXHU2NzAwXHU2NUIwXHVGRjBDXHU2NUUwXHU5NzAwXHU0RUNFR2l0ZWVcdTYyQzlcdTUzRDYnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXcgTm90aWNlKCdcdTRFQ0VHaXRlZVx1NjIxMFx1NTI5Rlx1NjJDOVx1NTNENlx1NjZGNFx1NjVCMCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBcdTYzQThcdTkwMDFcdTY3MkNcdTU3MzBcdTY2RjRcdTY1MzlcclxuXHRcdFx0aWYgKGhhc0xvY2FsQ2hhbmdlcykge1xyXG5cdFx0XHRcdGF3YWl0IHRoaXMuZXhlY0dpdENvbW1hbmQoJ2dpdCBwdXNoJyk7XHJcblx0XHRcdFx0bmV3IE5vdGljZSgnXHU2NzJDXHU1NzMwXHU2NkY0XHU2NTM5XHU1REYyXHU2M0E4XHU5MDAxXHU1MjMwR2l0ZWUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBwdXNoUmVzdWx0ID0gYXdhaXQgdGhpcy5leGVjR2l0Q29tbWFuZCgnZ2l0IHB1c2gnKTtcclxuXHRcdFx0XHRpZiAocHVzaFJlc3VsdC5pbmNsdWRlcygnRXZlcnl0aGluZyB1cC10by1kYXRlJykpIHtcclxuXHRcdFx0XHRcdG5ldyBOb3RpY2UoJ0dpdGVlXHU1REYyXHU2NjJGXHU2NzAwXHU2NUIwXHVGRjBDXHU2NUUwXHU5NzAwXHU2M0E4XHU5MDAxJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG5ldyBOb3RpY2UoJ1x1NjIxMFx1NTI5Rlx1NjNBOFx1OTAwMVx1NjZGNFx1NjVCMFx1NTIzMEdpdGVlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWhhc0xvY2FsQ2hhbmdlcyAmJiBwdWxsUmVzdWx0LmluY2x1ZGVzKCdBbHJlYWR5IHVwIHRvIGRhdGUuJykpIHtcclxuXHRcdFx0XHRuZXcgTm90aWNlKCdcdTY3MkNcdTU3MzBcdTU0OENHaXRlZVx1OTBGRFx1NjYyRlx1NjcwMFx1NjVCMFx1NzY4NFx1RkYwQ1x1NkNBMVx1NjcwOVx1OTcwMFx1ODk4MVx1NTQwQ1x1NkI2NVx1NzY4NFx1NjZGNFx1NjUzOScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5ldyBOb3RpY2UoJ1x1NTQwQ1x1NkI2NVx1NUI4Q1x1NjIxMCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRuZXcgTm90aWNlKCdcdTU0MENcdTZCNjVcdTU5MzFcdThEMjU6ICcgKyBlcnJvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBleGVjR2l0Q29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y2hpbGRfcHJvY2Vzcy5leGVjKGNvbW1hbmQsIHsgY3dkOiB0aGlzLnNldHRpbmdzLmdpdFJlcG9QYXRoIH0sIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc29sdmUoc3Rkb3V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBHaXRTeW5jU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG5cdHBsdWdpbjogR2l0U3luY1BsdWdpbjtcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogR2l0U3luY1BsdWdpbikge1xyXG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xyXG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5KCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qge2NvbnRhaW5lckVsfSA9IHRoaXM7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ0dpdFx1NEVEM1x1NUU5M1x1OERFRlx1NUY4NCcpXHJcblx0XHRcdC5zZXREZXNjKCdcdThCQkVcdTdGNkVHaXRcdTRFRDNcdTVFOTNcdTc2ODRcdTY3MkNcdTU3MzBcdThERUZcdTVGODQnKVxyXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ1x1OEY5M1x1NTE2NUdpdFx1NEVEM1x1NUU5M1x1OERFRlx1NUY4NCcpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmdpdFJlcG9QYXRoKVxyXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmdpdFJlcG9QYXRoID0gdmFsdWU7XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdcdTU0MENcdTZCNjVcdTYzMDlcdTk0QUVcdTRGNERcdTdGNkUnKVxyXG5cdFx0XHQuc2V0RGVzYygnXHU5MDA5XHU2MkU5XHU1NDBDXHU2QjY1XHU2MzA5XHU5NEFFXHU2NjNFXHU3OTNBXHU3Njg0XHU0RjREXHU3RjZFJylcclxuXHRcdFx0LmFkZERyb3Bkb3duKGRyb3Bkb3duID0+IGRyb3Bkb3duXHJcblx0XHRcdFx0LmFkZE9wdGlvbigncmliYm9uJywgJ1x1NURFNlx1NEZBN1x1NTI5Rlx1ODBGRFx1NTMzQScpXHJcblx0XHRcdFx0LmFkZE9wdGlvbignc3RhdHVzQmFyJywgJ1x1NzJCNlx1NjAwMVx1NjgwRicpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN5bmNCdXR0b25Mb2NhdGlvbilcclxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlOiAncmliYm9uJyB8ICdzdGF0dXNCYXInKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeW5jQnV0dG9uTG9jYXRpb24gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdFx0Ly8gXHU5MUNEXHU2NUIwXHU1MkEwXHU4RjdEXHU2M0QyXHU0RUY2XHU0RUU1XHU1RTk0XHU3NTI4XHU2NUIwXHU3Njg0XHU2MzA5XHU5NEFFXHU0RjREXHU3RjZFXHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5yaWJib25JY29uRWw/LnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc3RhdHVzQmFySXRlbT8ucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5hZGRTeW5jQnV0dG9uKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cdH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE2RztBQUM3RyxvQkFBK0I7QUFTL0IsSUFBTSxtQkFBMEM7QUFBQSxFQUMvQyxhQUFhO0FBQUEsRUFDYixvQkFBb0I7QUFDckI7QUFFQSxJQUFxQixnQkFBckIsY0FBMkMsdUJBQU87QUFBQSxFQUtqRCxNQUFNLFNBQVM7QUFDZCxVQUFNLEtBQUssYUFBYTtBQUV4QixTQUFLLGNBQWMsSUFBSSxrQkFBa0IsS0FBSyxLQUFLLElBQUksQ0FBQztBQUV4RCxTQUFLLGNBQWM7QUFHbkIsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU0sS0FBSyxRQUFRO0FBQUEsSUFDOUIsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDcEIsVUFB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