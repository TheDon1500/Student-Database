//
 
  
//document.getElementById('insertpage').onclick = InsertPage()
 
  
  //display
  
  function addItemsToList(name, matricno, course1, course2, course3, course4, course5){
    var ul = document.getElementById('list');
    var header = document.createElement('h4');
    var _name = document.createElement('li');
    var _matricno = document.createElement('li');
    var _course1 = document.createElement('li');
    var _course2 = document.createElement('li');
    var _course3 = document.createElement('li');
    var _course4 = document.createElement('li');
    var _course5 = document.createElement('li');
    
   
  // _name.innerHTML = 'Name: ' +name;
   header.innerHTML = 'Name: ' +name;
    _matricno.innerHTML = 'Matric No: ' +matricno;
    _course1.innerHTML = 'CSC412: ' +course1;
    _course2.innerHTML = 'CSC333: ' +course2;
    _course3.innerHTML = 'CSC451: ' +course3;
    _course4.innerHTML = 'CSC334: ' +course4;
    _course5.innerHTML = 'CSC472: ' +course5;


    ul.appendChild(header);
    ul.appendChild(_matricno);
   ul.appendChild(_course1);
   ul.appendChild(_course2);
   ul.appendChild(_course3);
   ul.appendChild(_course4);
    ul.appendChild(_course5);
  };

var matricdisplayv;
function mat(){
  matricdisplayv = document.getElementById('matricdisplay').value;
}
  function fetchData(){
    mat();
  
    firebase.database().ref('Students/' +matricdisplayv).once('value',function(snapshot){
    
          let name = snapshot.val().Name;
          let matricno = snapshot.val().MatricNo;
          let course1 = snapshot.val().CSC412;
          let course2 = snapshot.val().CSC333;
          let course3 = snapshot.val().CSC451;
          let course4 = snapshot.val().CSC334;
          let course5 = snapshot.val().CSC472;
          
          addItemsToList(name, matricno, course1, course2, course3, course4, course5);

       
    });

  }

 