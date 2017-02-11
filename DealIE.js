
//获取鼠标坐标
document.onclick = function(event){  // 文档中点击
        // console.log(window.event.clientX);  ie 678
        /*console.log(event.clientX);
        console.log(event.clientY);*/
        var event = event || window.event;   // 兼容性写法
        console.log(event.clientX);
        console.log(event.clientY);

    }


//清空选择内容，防止选择拖动
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();