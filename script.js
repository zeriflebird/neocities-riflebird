/* Hello and welcome to the hellscape that is javascript!
Behold, but don't be scared as we descend into madness... */

// Header
header.innerHTML = `
<header id="header" class="header">
    <div class="logo">
        <img src="/assets/blue-sprite2.png" alt="logo">
    </div>
    <nav>   
        <a href="/not_found.html">About</a>
        <a href="/not_found.html">Contact</a>
    </nav>
</header>
`;

// Footer
footer.innerHTML = `
<footer class="footer">
    <p>© 2025 riflebird</p>
    <p>Powered by <a href="https://neocities.org">Neocities</a></p>
</footer>
`

// Markdown text thingamajigger
// const mdURL = 'https://res.cloudinary.com/dqes5rgqn/raw/upload/v1754563106/README_rc2k9m.md';
// fetch(mdURL).then(function(response) {
//     return response.text();
// }).then(function(markdown){
//     document.getElementById("test").innerHTML = marked.parse(markdown);
// })
