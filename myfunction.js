// 封装自己的函数
 

 function getClass(classname)   //  类的写法
   {
       //判断支持否
       if(document.getElementsByClassName)
       {
           return document.getElementsByClassName(classname);
       }
       var arr = []; //用于返回 数组
       var dom = document.getElementsByTagName("*");
       for(var i=0;i<dom.length;i++)  // 遍历所有的 盒子
       {
           var txtarr = dom[i].className.split(" "); // 分割类名 并且 转换为数组
           //  ["demo","test"];
           for(var j=0;j<txtarr.length;j++)  // 遍历 通过类名分割的数组
           {
               if(txtarr[j] == classname)
               {
                   arr.push(dom[i]); // 我们要的是 div
               }
           }
       }
       return arr;
   }


   // $("#demo")   $(".one")   $("div")
    //封装自己的$
    function $(str) {
        var s = str.charAt(0);   //  一个s 的变量 存放是 符号  #  .
        var ss = str.substr(1);  // demo
        switch(s)
        {
            case "#":
                return document.getElementById(ss);
            break;
            case ".":
                return getClass(ss);
            break;
            default :
                return document.getElementsByTagName(str);
        }
    }


    //封装自己的scrollTop left
    function scroll() {
        if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
          // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return { //  剩下的肯定是怪异模式的
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }

    //可视区域大小   
    function client() {
				if(window.innerWidth != null)  // ie9 +  最新浏览器
				{
					return {
						width: window.innerWidth,
						height: window.innerHeight
					}
				}
				else if(document.compatMode === "CSS1Compat")  // 标准浏览器
				{
					return {
						width: document.documentElement.clientWidth,
						height: document.documentElement.clientHeight
					}
				}
				return {   // 怪异浏览器
					width: document.body.clientWidth,
					height: document.body.clientHeight
				}
			}