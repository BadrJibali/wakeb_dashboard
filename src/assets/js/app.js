//////////// input change background at write ////////////
const input = document.querySelector('.form_input_box');
input.addEventListener('input', () => {
    if (input.value === '') {
        input.style.backgroundColor = '#ffffff';
        input.style.borderColor = '';
    } else {
        input.style.backgroundColor = '#CBD5E1';
        input.style.borderColor = '#CBD5E1';
    }
});

//////////// input change background at write ////////////
const search = document.querySelector('.search_input_box');
const searchIcon = document.querySelector('.search_icon');
search.addEventListener('input', () => {
    if (search.value === '') {
        search.style.backgroundColor = '#ffffff';
        search.style.borderColor = '';
        searchIcon.style.color = '#CBD5E1';
    } else {
        search.style.backgroundColor = '#CBD5E1';
        search.style.borderColor = '#CBD5E1';
        searchIcon.style.color = '#334155';
    }
});


////////////////// Custom Select Options ///////////////////

var x, i, j, l, ll, selElmnt, a, b, c, newIcon, parentIcon;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");

    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, parentIcon, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    parentIcon = document.getElementsByClassName("position_icon_down");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
            y[i].style.color = '#334155';
            y[i].style.backgroundColor = '#cbd5e1';
            parentIcon[i].style.color = ('--afterSelect', '#334155');
        } else {
            // y[i].style.backgroundColor = '#fff';
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


/////////////// nave bar ///////////////////
function toggleClass() {
    const sideBar = document.querySelector('.sideBar');
    const home = document.querySelector('.home');

    sideBar.classList.toggle('active-sidebar');
    home.classList.toggle('active-sidebar');
}

function handleClick() {
    const activePage = window.location.pathname;
    const linkNames = document.querySelectorAll('.navLink');
    linkNames.forEach((item) => {
        if (item.href.includes(`${activePage}`)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}

// var user = "badr";
// var showUser = function () {
//     console.log(`user is ${user}`);
//     var user = "sayed";
//     console.log(`new user ${user}`);
// };
// showUser();