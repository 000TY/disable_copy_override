// CSSで強制的にすべての要素を選択可能にする
const style = document.createElement("style");
style.textContent = `
    * {
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
    }
`;
document.documentElement.appendChild(style);

// インラインスタイルの user-select: none を取り除く
function overrideInlineStyles() {
    const all = document.querySelectorAll("*");
    for (const el of all) {
        const style = el.style;
        if (style && (
            style.userSelect === "none" ||
            style.webkitUserSelect === "none" ||
            el.getAttribute("style")?.includes("user-select: none")
        )) {
            style.setProperty("user-select", "text", "important");
            style.setProperty("-webkit-user-select", "text", "important");
        }
    }
}

// 禁止イベントを無効化
function removeBlockEvents() {
    const events = [
        "copy", "cut", "paste",
        "select", "selectstart",
        "contextmenu", "dragstart",
        "mousedown", "mouseup"
    ];

    for (const evt of events) {
        document.addEventListener(evt, e => e.stopPropagation(), true);
    }
}

// 実行
overrideInlineStyles();
removeBlockEvents();

// 動的に追加される要素にも対応（MutationObserver）
const observer = new MutationObserver(() => {
    overrideInlineStyles();
});
observer.observe(document.body, { childList: true, subtree: true });
