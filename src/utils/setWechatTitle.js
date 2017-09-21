let setWechatTitle = (title) => {
    document.title = title; 
    //ios系统下通过iframe设置title
    var mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
        let iframe = document.createElement('iframe');
        iframe.style.display = "none";
        iframe.src = "//m.baidu.com/favicon.ico";  //图片可以换成任意较小的图片

        let iframeCallback = () => {
            setTimeout(() => {
                iframe.removeEventListener('load', iframeCallback);
                document.removeChild(iframe)
            }, 0);
        }

        iframe.addEventListener('load', iframeCallback);
        document.body.appendChild(iframe);
    }
}

module.exports = {
    setWechatTitle: setWechatTitle
}