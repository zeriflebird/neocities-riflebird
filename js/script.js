/* Hello and welcome to the hellscape that is javascript!
Behold, but don't be scared as we descend into madness... */
const lastModified = new Date(document.lastModified).toISOString().split('T')[0];
// Header
header.innerHTML = `
<header id="header" class="header">
    
    <nav>   
        <p class="thick">riflebird</p>
        <p>.neocities.org</p>
        <a href="/index.html">About</a>
        <div class="dropdown">
            <a onclick="dropdown()" class="dropbtn">Art</a>
            <div id="myDropdown" class="dropdown-content">
            <a href="/gallery.html">Gallery</a>
            <a href="not-found.html">Characters</a>
            <a href="not-found.html">Other</a>
            </div>
        </div>
        <a href="/not_found.html">Contact</a>
    </nav>
</header>
`;

// Footer
footer.innerHTML = `
<footer class="footer">
    <p>Powered by <a href="https://neocities.org/site/riflebird">Neocities</a></p>
    <p class="faint" >Last updated: ${lastModified}</p>
</footer>
`

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}