<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Status</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            max-width: 400px;
            width: 100%;
        }

        h1 {
            color: #333;
        }

        p {
            color: #555;
            margin: 20px 0;
        }

        .go-back {
            padding: 6px;
            border-radius: 15px;
            background-color: #09067c;
            color: #ffffff;
            font-size: 18px;
            margin-top: 30px;
            width: 200px;
            text-align: center;
        }

        .success {
            color: #33cc33;
        }

        .error {
            color: #ff0000;
        }
    </style>
</head>
<body>
    <div class="container">
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
            $subject = "$firstname $lastname would like to register for your upcoming training: \"Business Strategy Forum\"";
            $body = "<html>
                        <head>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    background-color: #f0f0f0;
                                    margin: 0;
                                    padding: 0;
                                }
                                .container {
                                    background-color: #fff;
                                    border-radius: 10px;
                                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                                    padding: 20px;
                                    text-align: center;
                                    max-width: 400px;
                                    margin: 0 auto;
                                }
                                h1 {
                                    color: #333;
                                }
                                ul {
                                    list-style-type: none;
                                    padding: 0;
                                }
                                li {
                                    margin-bottom: 10px;
                                }
                            </style>
                        </head>
                        <body>
                            <div class='container'>
                                <h1>Registration Request</h1>
                                <p>Dear Organizer,</p>
                                <p>You have received a registration request from:</p>
                                <ul>
                                    <li><strong>Name:</strong> $firstname $lastname</li>
                                    <li><strong>Email:</strong> $email</li>
                                    <li><strong>Phone:</strong> $phone</li>
                                    <li><strong>Gender:</strong> $gender</li>
                                    <li><strong>Company:</strong> $company</li>
                                </ul>
                                <p>Please follow up with this registration.</p>
                                <p>Best regards,<br>Your Website</p>
                            </div>
                        </body>
                    </html>";

            // Set the content type to HTML
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=iso-8859-1';

            // Additional headers
            $headers[] = "From: $email";

            // Send the HTML-formatted email
            if (mail($receiver, $subject, $body, implode("\r\n", $headers))) {

            $sender = "From $email";
            // if(mail($receiver, $subject, $body, $sender)) {
                echo "Your message has been delivered!";
                echo "<p>Thank you for your registration.</p>";
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
    <p class='go-back'><a href='javascript:history.back()'>Go Back</a></p> <!-- Add Back button -->
    </div>
</body>
</html>