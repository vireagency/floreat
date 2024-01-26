<?php

$error = '';

if (isset($_POST['submit'])) {

    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];



    // check if fields are empty
    if (empty($email) || empty($phone) || empty($message)) {
        echo '<script>
        alert("Kindly fill all fields before you can send a message");
        window.history.back();
        </script>';
    } else {
        // send the email
        $to = 'info@floreat.com';
        $subject = 'This is a test email';
        $headers = array(
            "From: " . $email . "",
            "Reply-To: replyto@floreat.com",
            "X-Mailer: PHP/" . PHP_VERSION
        );
        $headers = implode("\r\n", $headers);


        if (mail($to, $subject, $message, $headers)) {
            echo '<script>
        alert("Email sent successfully");
        document.location.href = "../views/contact.html";
        </script>';
        } else {
            echo '<script>
        alert("Failed to send email");
        window.history.back();
        </script>';
        }
    }
}
