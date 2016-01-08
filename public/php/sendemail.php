<?php

$mailTo = "tedler@gmail.com";
$subject = "Enquiry from tedler.com";
$nameFrom = $_POST['nameFrom'];
$mailFrom = $_POST['emailFrom'];
$message = $_POST['message'];
$header = "From: ". $nameFrom . " <" . $mailFrom . ">\r\n";
			
mail($mailTo, $subject, $message, $header);

?>