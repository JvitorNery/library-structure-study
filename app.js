var g = G$('john', 'Doe');
console.log(g);
g.HTMLGreeting('result');
function greetingHTML() {
    $('#loginDiv').hide();
    g.HTMLGreeting('#greeting', true);
}


