let outputFile = null;
   
    function caculate() {
      //var to store origenal code plus tags(AKA taged)
      let tagedJs = null; 
    let tagedCss = null;
      let tagedHtml = null;
      //geing html,css, and javascript code
      let html = getElementById("html")
        let css = getElementById("css")
        let js = getElementById("js")
			//aplyes tags to html,css, and javascript
  tagedCss = "\<style\><br>" + css + "<br>\<style\>"
  tagedJs = "\<script\><br>" + css + "<br>\<script\>"
			//removes </html> tag
	tagedHtml = html - "\</html\>"
  
      
      outputFile = html + "\<style\><br>" + css +"\</style\><br>\<script\><br>" + js + "\</script\><br>\</html\>"
    }    
	  caculate()
getElementById("output").innerhtml=(outputFile)
