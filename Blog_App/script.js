let tasks=[];
let btn_ref=document.getElementById("btn_add_task");// returning single element

let delete_task = function(event){
  // console.log(event.target);
  let id=event.target.id;
  let item_id=`li_${id}`;
  let elem=document.getElementById(item_id);
  elem.remove();

  let arr=id.split("_");
  let index=arr[1];
  console.log(index);

  tasks.splice(index,1);
  
}

let edit_task = function(event){
  let id=event.target.id;
  let index=id.split("_")[1];
  let edit_task=prompt("Enter the updated task");
  tasks[index]=edit_task;
  display();

}


let display = function(){

  var ul=document.getElementById('ul_list');
  ul.innerText="";

  for(let i=0;i<tasks.length;i++)
  {
    let single_task=tasks[i];

    let new_item =document.createElement('li');
    new_item.innerText=single_task;

    let delete_btn =document.createElement('button');
    delete_btn.innerText="Delete";
    delete_btn.addEventListener('click',delete_task);

    let edit_btn=document.createElement('button');
    edit_btn.innerText="Edit";
    edit_btn.style.backgroundColor="green";
    edit_btn.addEventListener('click',edit_task);

    edit_btn.id=`edit_${i}`;
    delete_btn.id=`btn_${i}`;
    new_item.id=`li_btn_${i}`;

    
    ul.appendChild(new_item);
    new_item.appendChild(delete_btn);
    new_item.appendChild(edit_btn);
    // console.log();
  }
}

let fn = function fun(){
  //first approach
  // let inp_ref=document.getElementsByName("t1");//returning array of elements
  // console.log(inp_ref)

  // second approach
  // let inp_ref=document.getElementsByName("t1");//returning array of elements
  // let r=inp_ref[0];
  // console.log(r)

   // third approach
  // let inp_ref=document.getElementsByName("t1")[0];//returning array of elements
  // console.log(inp_ref)

  let inp_ref=document.getElementsByName("t1")[0];//returning array of elements
  let val=inp_ref.value;
  tasks.push(val);

  // calling display function to display array element on browser
  display(); 
  // console.log(inp_ref.value);
}

btn_ref.addEventListener('click',fn);




// function fun_add(){
//   let input_ref=document.getElementById("input_field").value;
//   let list_item= document.createElement("li");
//   list_item.innerText=input_ref;

//   let ul_ref=document.getElementsByTagName("ul");
//   ul_ref.app
// }


// for emoji press-> window + dot(.);