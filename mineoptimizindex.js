function showConfirm(version) {
    if (version == "legacy") {
        var confirmmessage="确定要前往网盘下载远古版（不是指Minecraft远古版！）MineOptimiz吗？其中一些上传较晚的文件是最近才找回的";
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