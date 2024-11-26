import { initAccordion } from "./components/accordion";
import { copyText } from "./components/copy-text";
import { initHeader } from "./components/header";
import { initModal } from "./components/modal";
import { initToc } from "./components/toc";

export function runAfterDomLoad() {
  window.addEventListener("load", function () {
    initToc()
    initHeader()
    initModal()
    initAccordion()
    copyText()
  });
}
