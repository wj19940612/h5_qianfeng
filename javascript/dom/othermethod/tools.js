//冒泡排序
function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                var data = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = data;
            }
        }
    }

}

//选择排序
function choose(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

/*
      id        document.getElementById()
      tagName   document.getElementsByTagName()
      name      document.getElementsByName()  
      className document.getElementsByClassName()
  */
/*
    通过封装函数 简述上述的操作
        css选择器
 
*/

function $(vArg) {
    switch (vArg[0]) {
        case "#":
            return document.getElementById(vArg.substring(1));
            break;
        case "."://className

            return elementsByClassName(document, vArg.substring(1));
        default:
            //对参数的前五个字符进行判断
            var str = vArg.substring(0, 5);
            if (str == "name=") {
                return document.getElementsByName(vArg.substring(5));
            } else {
                return document.getElementsByTagName(vArg);
            }

            break;
    }
}



function elementsByClassName(parent, classStr) {
    //找到parent下所有的元素节点
    var nodes = parent.getElementsByTagName('*');
    var result = [];
    for (var i = 0; i < nodes.length; i++) {
        //如果符合条件 则装入数组中
        if (nodes[i].className == classStr) {
            result.push(nodes[i]);
        }
    }
    return result;
}



//   alert(div.style.backgroundColor);
//【注】 上述操作，只能找到行间的css样式

/*
    获取当前有效样式getComputedStyle (元素节点) //火狐、google/safer支持
    元素节点.currentStyle[获取样式类型] ；ie
    【浏览器兼容】
*/

function getStyle(elem, attr) {
    return elem.currentStyle ? elem.currentStyle[attr] : getComputedStyle(elem)[attr];
}

/*
    创建一个带有文字的节点
*/
function createElementWithTextNode(targetName, text) {
    var node = document.createElement(targetName);
    var text = document.createTextNode(text);
    node.appendChild(text);
    return node;
}

//将某个节点插入到后面
function insertAfter(newNode, oldNode) {
    //判断oldnode 是否是最后一个节点
    var parent = oldNode.parentNode;
    if (oldNode == parent.lastchild) {
        //最后一个节点
        parent.appendChild(oldNode);
    }else{
        //插入到下一个节点的下一个节点
        parent.insertBefore(newNode,oldNode.nextSibling);
    }
}
