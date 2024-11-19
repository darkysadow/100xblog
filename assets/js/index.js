import { initToc } from "./components/toc";

export function runAfterDomLoad() {
  window.addEventListener("load", function () {
    initToc()
  });
}
