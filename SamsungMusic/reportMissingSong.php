<html>
<body>
<?php
	$songName=$_POST["songTitle"];
	$adName=$_POST["vidTitle"];
	$yourName=$_POST["subTitle"];
	$yourMail=$_POST["subEmail"];
	
	$myfile = fopen("requests\\$songName.txt", "w") or die("Unable to open file!");
	$txt = "$songName\n";
	fwrite($myfile, $txt);
	$txt = "Used in $adName\n";
	fwrite($myfile, $txt);
	$txt = "Requested by $yourName - contact $yourMail\n";
	fwrite($myfile, $txt);
	fclose($myfile);
	
	echo "<h1>Success!</h1>\nA request for $songName was added to our database.\n<br>Use the back button of your browser or click <a href=\"index\">here</a> to go back."
?>
</body>
</html>