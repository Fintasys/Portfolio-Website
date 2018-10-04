<?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	sendUnknownSourceEmail($name, $email, $message);
}

function sendUnknownSourceEmail($name, $email, $message) {
	$empfaenger = '';
	$betreff = 'Website - Contact';
	$header = 'From: '.$email;

	mail($empfaenger, $betreff, $message, $header);
}
		
?>