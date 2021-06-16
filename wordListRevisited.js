

var table = document.getElementById("wl-table");

if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onclick = function () {
            TableText(this);
        };
    }
}

function TableText(tableCell) {

    if (tableCell.innerHTML == "Sleepy"||
        tableCell.innerHTML == "Slow"||
        tableCell.innerHTML == "Dizzy"||   
        tableCell.innerHTML == "Sick"||
        tableCell.innerHTML == "Nauseous")
    {
        tableCell.style = "text-shadow: 0 0 3px #FF0000";
    }
    else
        tableCell.style.setProperty("text-decoration", "line-through 4px");   
}

function ShowAllAnswers(){
    if (table != null)
    {
        for (var i = 0; i < table.rows.length; i++)
        {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            {
                TableText(table.rows[i].cells[j]);
            }
        }
    }
}