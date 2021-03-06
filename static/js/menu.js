function setupMenu() {
    console.log("menuing");

    //get all tags which have an attribute named "data-open"
    var elements = document.querySelectorAll('[data-open]');
    for (var i=0; i<elements.length; i++) {
        initOpen(elements[i]);
    }

    function initOpen(element) {
        var className = 'open';
        var target = document.getElementById(element.getAttribute('data-open'));
        var ulChildrenMap = function(fn) {
            var lists = target.getElementsByTagName('ul');
            for (var i=0; i<lists.length; i++) {
                fn(lists[i]);
            }
        };
        if (!target) return;

        // dirty hack for small screen ...
        var firstChildUl = target.getElementsByTagName('ul')[0];
        if (firstChildUl && window.getComputedStyle(firstChildUl).display === 'none') {
            target.classList.remove(className);
        }

        element.addEventListener('click', function() {
            var list = target.getElementsByTagName('ul')[0];
            if (target.classList.contains(className)) {
                target.classList.remove(className);
                ulChildrenMap(function(ul) { ul.style.display = 'none'; });
            } else {
                target.classList.add(className);
                ulChildrenMap(function(ul) { ul.style.display = 'block'; });
            }
        });
    }
}

function setupLinks() {
    console.log("linking");
    var elements = document.querySelectorAll(".jlink");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        console.log(element);
        if(element.hasAttribute("href")) {
            console.log(element);
            element.addEventListener("click", function(mouseEvent) {
                console.log("clicked");
                window.location.href = mouseEvent.target.getAttribute("href");
            });
        }
    }

}

setupMenu();
setupLinks();
