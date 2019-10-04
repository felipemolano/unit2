/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/* global variables */

const list = document.querySelector(".student-list");
const page = document.querySelector(".page");
const div = document.createElement("div");
const numberOfItems = 10;
const listChild = list.children;

/* functions */



//  start of showPage function
const showPage = (list,page) => {

   var startIndex = (page * numberOfItems) - numberOfItems;
   var endIndex   = (page * numberOfItems);

   // -------------------------------------------------------------  iterate to show the pages results
   for(let i=0; i< list.length ; i++)                         
   {
   
      if(i >= startIndex && i<endIndex ){
      
         list[i].style.display = '';
         
      }
      else
      {
         list[i].style.display = 'none';
      
      }
   
   }
   // -------------------------------------------------------------
}
//  end of showPage function





//  start of appendPageLinks function
const appendPageLinks = (list) => {
   const numberOfPages = Math.ceil(list.length/numberOfItems); //    calculate how many links do i need
   
   div.className = "pagination";
   const newdiv = page.appendChild(div);

   const ul    = document.createElement("ul");
   const newUl = div.appendChild(ul);

   // ------------------------------------------------------------   iterate to create li and a elements and append them to parent ul
   for(let i = 1; i <= numberOfPages ; i++)                   
   {
      const li = document.createElement("li");
      const a  = document.createElement("a");

      li.style.marginRight = "10px";
      a.setAttribute("href","#");
      a.textContent = i;

      const newa = li.appendChild(a);
      const newli = newUl.appendChild(li);
   
   }
   // -------------------------------------------------------------

}
//  end of appendPageLinks function


/* events */

//  start of div event 
div.addEventListener('click',(e)=>{
   if(e.target.tagName === 'A')
   {
 
      // lets go for the ul element and then lets reference all its children as childnodes
      const parent = e.target.parentNode.parentNode;
      const childNodes = parent.children;

      // this loop iterates all the "a" elements and removes active class from each one
      for(let i=0;i<childNodes.length;i++)
      {
         
         const aElement = childNodes[i].firstChild;
         aElement.className = "";
      }
      // the loop ends here


      // lets add the "active" class to the clicked 'a' element and call the showPage function with the full list of students and the current page number clicked by user
      e.target.className = "active";
      showPage(listChild,e.target.textContent);
   }


});

//  end of div event 

/* call to functions */

showPage(listChild,1);  // displaying 10 students per page
appendPageLinks(listChild);




