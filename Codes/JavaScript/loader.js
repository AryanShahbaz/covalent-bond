var myVar;

      function myFunction() {
        myVar = setTimeout(showPage, 1250);
      }

      function showPage() {
        document.getElementById("loading_page").style.display = "none";
        document.getElementById("main-page").style.opacity="1";
      }
