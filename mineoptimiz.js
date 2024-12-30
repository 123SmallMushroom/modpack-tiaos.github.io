function showConfirm(version) {
    if (version == "legacy") {
        var confirmmessage="确定要前往网盘下载旧版MineOptimiz吗？";
    } else {
        var confirmmessage="警告！该版本已停止支持，将不会收到任何更新。你确定要下载吗？";
    }
    if (confirm(confirmmessage)) {
        return true;
    } else {
        return false;
    }
}
function showPrompt() {
    window.location.replace("https://github.com/MineOptimiz-Team/MineOptimiz-3rd")
}