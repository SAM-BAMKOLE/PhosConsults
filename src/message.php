<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $options = $_POST['options'];
    $message = $_POST['message'];

    if(!empty($firstname) && !empty($lastname) && !empty($email) && !empty($phone) && !empty($message)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $receiver = "samuelolagoroye81@gmail.com";
            $subject = "$options";
            $body = "Name: $firstname $lastname\nEmail: $email\nPhone: $phone\nInquiry: $options\nMessage: $message";
            $sender = "From $email";
            if(mail($receiver, $subject, $body, $sender)) {
                echo "Your message has been delivered!";
            } else {
                echo "Sorry, failed to send your message!";
            }
        } else {
        echo "Please enter a valid email!";
        }
    } else {
        echo "Please fill the form correctly!";
    }
}
?>