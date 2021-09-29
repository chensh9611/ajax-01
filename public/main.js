console.log('我是main.js');
getJSON.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json')
    request.onreadystatechange = () =>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status < 300){
                const json = request.response
                console.log(json)
                const bool = JSON.parse(request.response)
                console.log(bool)
                myName.textContent = bool.name
            }
        }
    }
    request.send()
}
getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange =() =>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status <300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else {
                alert('XML 加载失败')
            }
        }

    };
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html"); // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const div1 = document.createElement("div");
                // 填写 style 内容
                div1.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(div1);
            } else {
                alert("加载 HTML 失败");
            }
        }
    };
    request.send(); // readyState = 2
};

getJS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = () =>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status < 300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else {
                alert('加载JSs失败')
            }
        }
    }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css"); // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const style = document.createElement("style");
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
    request.send(); // readyState = 2
};
