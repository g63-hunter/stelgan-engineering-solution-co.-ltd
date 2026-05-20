<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $service = strip_tags(trim($_POST["service"]));
    $message = trim($_POST["message"]);

    // Business Email
    $recipient = "stelganengineeringsolutioncolt@gmail.com";

    // Email Subject
    $subject = "New Project Inquiry from $name";

    // Email Content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Service: $service\n\n";
    $email_content .= "Message:\n$message\n";

    // Email Headers
    $safe_name = str_replace(array("\r", "\n", '"'), '', $name);
    // Use an email from the local domain as the sender (required by many hosting providers to prevent spoofing)
    $from_email = "no-reply@stelganengineering.com";

    $email_headers = "From: \"$safe_name\" <$from_email>\r\n";
    $email_headers .= "Reply-To: \"$safe_name\" <$email>\r\n";
    $email_headers .= "MIME-Version: 1.0\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email (setting envelope sender with -f flag to match the sender domain)
    if (mail($recipient, $subject, $email_content, $email_headers, "-f" . $from_email)) {
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
