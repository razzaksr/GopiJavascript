//let myTeam=[]
let myTeam=new Array()

var insertion=(data)=>{
    myTeam.push(data)
    alert(data+" has pushed to array")
}

var listing=()=>{
    // for(var index=0;index<myTeam.length;index++){
    //     alert(myTeam[index])
    // }

    //myTeam.map(myFun)
    // myTeam.map((val,ind)=>{
    //     alert(val+" resides @ "+ind);
    // })

    // var data="<h1>Zealous</h1>"+"<h2>Tech Corp</h2>"
    // document.getElementById('viewing').innerHTML=data

    var where=document.getElementById('viewing')

    var content="<ol type='A'>"

    //content+="<li>"+987654321+"</li>"
    myTeam.map((val,ind)=>{
        content+="<li>"+val+"</li>"
    })

    content+="</ol>"

    where.innerHTML=content

}

var myFun=(value,position)=>{
    alert(value+" available in "+position)
}