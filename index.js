function validation(){
    var studentname=document.getElementById("studentname").value;
    if (studentname== "")
    {
        alert("Kindly insert Student Name!");
        return false
    }
    if(studentname.length>20)
    {
        alert("Student name must be less than 25 character!");
        return false;
    }
    var admission=document.getElementById("admission").value;
    if(admission=="")
    {
        alert("Kindly insert admission no. !");
        return false;
    }
    if(admission.length>15)
    {
        alert("Admission number must be less than 15 characters!");
        return false;
    }
    var course_name=document.getElementById("course").value;
    if(course_name=="")
    {
        alert("Kindly select course!");
        return false;
    }
    var male=document.getElementById("male").Checked;
    var female=document.getElementById("female").checked;
    if(male==false && female==false)
    {
        alert("kindaly select gender!")
        return false;
    }
    var count=0;
    var os=document.getElementById("os").checked;
    var dbms=document.getElementById("dbms").checked;
    var java=document.getElementById("java").checked;
    var cpp=document.getElementById("cpp").checked;
    var awt=document.getElementById("awt").checked;
    if(os==false && dbms==false && java==false && cpp==false && awt==false)
    {
        alert("kindly select four subjects");
        return false;
    }
    if(os==true)
    {
        count++;
    }
    if(dbms==true)
    {
        count++;
    }
    if(java==true)
    {
        count++;
    }
    if(cpp==true)
    {
        count++;
    }
    if(awt==true)
    {
        count++;
    }
    if(count!=4)
    {
        alert("Kindly select only four subjects!");
        return false;
    }
    var emailid=document.getElementById("emailid").value;
    if(emailid==""){
        alert("Kindly insert Email Id! ");
        return false;
    }
    var contact=document.getElementById("contactno").value;
    if(contact=="")
    {
        alert("Kindly insert Contact no!");
        return false;
    }
}