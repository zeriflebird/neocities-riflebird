/* Hello and welcome to the hellscape that is javascript!
Behold, but don't be scared as we descend into madness... */
const lastModified = new Date(document.lastModified).toISOString().split('T')[0];
// Header
header.innerHTML = `
<header id="header" class="header">
    
    <nav>   
        <p class="thick">riflebird</p>
        <p>.neocities.com</p>
        <a href="/not_found.html">About</a>
        <a href="https://cara.app/riflebird">Gallery</a>
        <a href="/not_found.html">Contact</a>
    </nav>
</header>
`;

// Footer
footer.innerHTML = `
<footer class="footer">
    <p>Powered by <a href="https://neocities.org">Neocities</a></p>
    <p class="faint" >Last updated: ${lastModified}</p>
</footer>
`

