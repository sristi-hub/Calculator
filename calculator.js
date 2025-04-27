const display_element = document.getElementById("display");
display_element.innerHTML = "";

function append_to_display(str){
    display_element.innerHTML = display_element.innerHTML+str;
}

function calculate(){
    display_element.innerHTML = eval(display_element.innerHTML);
}

function clear_display(){
    display_element.innerHTML = "";

}

function backspace(){
    display_element.innerHTML = display_element.innerHTML.slice(0, display_element.innerHTML.length - 1);

}

