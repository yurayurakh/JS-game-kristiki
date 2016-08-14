function Game(){
    var  ev, sObj,doc = document,retObj,tb,elTr,tabl,elTd,rows,cols,zero,cross,content,cels,clas,data = {};
    var f = function ()  {
        var k = 0;
        rows = doc.getElementById("rows").value;
        cols = doc.getElementById("cols").value;
        tb = doc.getElementById("field");
        for (var i = 1; i <= rows; i++){
            elTr = doc.createElement("tr");
            elTr.id = "tr"+i;
            tb.appendChild(elTr);
            for (var j = 1; j <= cols; j++){
                elTd = doc.createElement("td");
                elTd.id = elTr.id +"td"+j;
                elTr.appendChild(elTd);
            }
        }
        tabl = doc.getElementById("field");
        tabl.onclick = function(event) {
            var target = event.target;
            if (target.tagName == 'TD') {
                k++;
                if(target.style.backgroundColor == "yellow" || target.style.backgroundColor == "green"){
                  return k--;
                }
                else {
                    if (k%2 ==0){
                        zero = doc.createElement("div");
                        target.appendChild(zero);
                        target.style.backgroundColor="yellow";
                    }
                    else {
                        cross = doc.createElement("span");
                        cross.style.backgroundColor="green";
                        content = doc.createTextNode("x");
                        cross.appendChild(content);
                        target.appendChild(cross);
                        target.style.backgroundColor="green";
                    }
                    if (k==rows*cols){
                        alert("нічия");
                        news();
                    }
                }
            }
            ev = target.id;
            data.key = ev;
            sObj = JSON.stringify(data);
            localStorage.setItem("key"+k,sObj);
        }
    };
    var news = function(){
        var field,field1,parentElem;
        field = doc.body.children[0];
        doc.body.removeChild(field);
        field1 = doc.createElement("table");
        field1.id = "field";
        parentElem = doc.body;
        doc.body.insertBefore(field1, doc.body.firstChild);
        f();
    };
    var clearLocStor = function(){
        localStorage.clear();
    };
    this.restore = function(){
        f();
        for(var s = 1 ; s <=rows*cols; s++){
            retObj = JSON.parse(localStorage.getItem("key"+s));
            if(retObj != null){
                var cels = retObj.key;
                var clas = doc.getElementById(cels);
                if (s%2 ==0){
                    zero = doc.createElement("div");
                    clas.appendChild(zero);
                    clas.style.backgroundColor="yellow";
                }
                else {
                    cross = doc.createElement("span");
                    cross.style.backgroundColor="green";
                    content = doc.createTextNode("x");
                    cross.appendChild(content);
                    clas.appendChild(cross);
                    clas.style.backgroundColor="green";
                }
            }
        }
    };
    this.call = function(){
        var creat = doc.getElementById("creat").onclick = f;
        var clear = doc.getElementById("clear").onclick = news;
        var clLocStor = doc.getElementById("clearLocStorage").onclick = clearLocStor;
        var restore = doc.getElementById("restore").onclick = this.restore;
    }
}
var play = new Game();
play.call();




