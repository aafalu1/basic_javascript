


/*



*/



/*
output the first result as
a table header
*/
function buildReportHeader(){
    //build table row
    // build table head
document.write("<tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>");

}

function reportDetails(){
    document.write("<tr><td>ahmad</td><td>Tahasen</td><td>ahamed@yahoo.com</td></tr>");
    document.write("<tr><td>Mariam</td><td>Tahsen</td><td>mariyam@yahoo.com</td></tr>");
    document.write("<tr><td>ali</td><td>bTahsen</td><td>ali@yahoo.com</td></tr>");


}


function buildReportSummary(){
    document.write("<tr><td>Employee Count: </td><td colspan='2'>3</td>");

}


function theController(){
    document.write("it works!");
    document.write("<table border='1'>");
    buildReportHeader();
    reportDetails();
    buildReportSummary();
    document.write("</table>");
}