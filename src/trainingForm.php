<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $gender = $_POST['gender'];

    if(!empty($firstname) && !empty($lastname) && !empty($email) && !empty($phone) && !empty($company)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // info@phosconsults.com
            $receiver = "samuelolagoroye81@gmail.com";
            $subject = "$firstname $lastname would like to register for your upcoming training";
            $body = "Name: $firstname $lastname\nEmail: $email\nPhone: $phone\nGender: $gender\nCompany: $company";
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