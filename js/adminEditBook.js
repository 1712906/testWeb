$(document).ready(function() {
	$(".file-edit-upload").on("change", function() {
		! function(e) {
			if (e.files && e.files[0]) {
                var t = new FileReader;
                console.log(e.files[0])
                
				t.onload = function(e) {
                    $(".profile-pic").attr("src", e.target.result)
                }, t.readAsDataURL(e.files[0])
                var text="";
                var t2 = new FileReader;
                const fs = require('fs') 
                /*t2.onload = function(e) {
                    text=e.target.result;
                    var blob = new Blob([text],
                    { type: "text/plain;charset=utf-8" });
                saveAs(blob, "anh.png");
                }, t2.readAsText(e.files[0])*/
                
			}
		}(this)
	}), $(".upload-button").on("click", function() {
		$(".file-edit-upload").click()
	})
})