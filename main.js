name_of_array = [];

function submitting()
{
    var name1 = document.getElementById("name_of_sutdent_1").value;
    var name2 = document.getElementById("name_of_student_2").value;
    var name3 = document.getElementById("name_of_student_3").value;
    var name4 = document.getElementById("name_of_student_4").value;

    name_of_array.push(name1);
    name_of_array.push(name2);
    name_of_array.push(name3);
    name_of_array.push(name4);

    console.log(name_of_array);
    document.getElementById("displayname").innerHTML = name_of_array;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_of_array.sort();
    console.log(name_of_array);
    document.getElementById("displayname").innerHTML = name_of_array;
}