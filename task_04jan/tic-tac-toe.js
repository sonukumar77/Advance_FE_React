const heading = document.querySelector(".heading");
const resetButton = document.querySelector(".reset-btn");
const gameCells = document.querySelectorAll(".cell");

// event listener not works on multiple element .works on single element

var isXturn=true;
var count=0;

const checkGamestatus = () =>{
   const index0ClassList = gameCells[0].classList;
   const index1ClassList = gameCells[1].classList;
   const index2ClassList = gameCells[2].classList;
   const index3ClassList = gameCells[3].classList;
   const index4ClassList = gameCells[4].classList;
   const index5ClassList = gameCells[5].classList;
   const index6ClassList = gameCells[6].classList;
   const index7ClassList = gameCells[7].classList;
   const index8ClassList = gameCells[8].classList;
//    console.log(gameCells[0].classList)
    if(index0ClassList.contains('O'))
    {
        if(index1ClassList.contains('O') && index2ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }

    if(index0ClassList.contains('O'))
    {
        if(index3ClassList.contains('O') && index6ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }

    if(index0ClassList.contains('O'))
    {
        if(index4ClassList.contains('O') && index8ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }

    if(index2ClassList.contains('O'))
    {
        if(index5ClassList.contains('O') && index8ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }
    if(index2ClassList.contains('O'))
    {
        if(index4ClassList.contains('O') && index6ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }
    if(index6ClassList.contains('O'))
    {
        if(index7ClassList.contains('O') && index8ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }
    if(index3ClassList.contains('O'))
    {
        if(index4ClassList.contains('O') && index5ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }
    if(index1ClassList.contains('O'))
    {
        if(index4ClassList.contains('O') && index7ClassList.contains('O'))
        {
            alert("O is winner")
        }
    }
}



function cellHandler(event)
{
    // console.log(this.classList); same thing to write
    const classList = event.target.classList;
    // console.log(classList.length)
    
    if(classList.length > 1)
    {
        return false;
    }

    if(isXturn)
    {
       
        classList.add("X");
        isXturn = false;
        heading.textContent="O's turn";
    }
    else
    {
     
        classList.add("O");
        isXturn = true;
        heading.textContent="X's turn";
        
    }
    count +=1;
    console.log(count)
    if(count >=5)
    {
        checkGamestatus();
    }
    
}



for(cell of gameCells)
{
    cell.addEventListener("click",cellHandler);
}

const resetHandler = () =>
{
    window.location.reload();
}
resetButton.addEventListener("click",resetHandler)