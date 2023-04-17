<?php
$to = "somebody@example.com, somebodyelse@example.com";
$subject = "HTML email";

$message = "
hello
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: myboss@example.com' . "\r\n";



$success=mail($to,$subject,$message,$headers);
if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo $errorMessage.'ajay';
} else {
	echo 'done';
}
?>