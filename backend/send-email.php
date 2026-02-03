<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Or path to PHPMailer files

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $mail = new PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'mail.brandmaximus.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'Sandeepdas@brandmaximus.com';
        $mail->Password   = 'Sandeepdas@4424'; // Password you set in cPanel
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // TLS
        $mail->Port       = 587;
        
        // Alternative settings (if above doesn't work)
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
        // $mail->Port       = 465;
        
        // Recipients
        $mail->setFrom('Sandeepdas@brandmaximus.com', 'Brand Maximus Website');
        $mail->addAddress('Sandeepdas@brandmaximus.com', 'Sandeep Das');
        $mail->addReplyTo($_POST['email'], $_POST['name']);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission - ' . htmlspecialchars($_POST['name']);
        
        $mail->Body = '
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { padding: 20px; background: #f4f4f4; }
                .content { background: white; padding: 20px; border-radius: 5px; }
                h2 { color: #333; }
                .field { margin: 10px 0; }
                .label { font-weight: bold; color: #555; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="content">
                    <h2>New Contact Form Submission</h2>
                    <div class="field">
                        <span class="label">Name:</span> ' . htmlspecialchars($_POST['name']) . '
                    </div>
                    <div class="field">
                        <span class="label">Email:</span> ' . htmlspecialchars($_POST['email']) . '
                    </div>
                    <div class="field">
                        <span class="label">Phone:</span> ' . htmlspecialchars($_POST['phone']) . '
                    </div>
                    <div class="field">
                        <span class="label">Message:</span><br>
                        ' . nl2br(htmlspecialchars($_POST['message'])) . '
                    </div>
                </div>
            </div>
        </body>
        </html>
        ';
        
        $mail->AltBody = "Name: " . $_POST['name'] . "\n" .
                         "Email: " . $_POST['email'] . "\n" .
                         "Phone: " . $_POST['phone'] . "\n" .
                         "Message: " . $_POST['message'];
        
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
        
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Email could not be sent. Error: ' . $mail->ErrorInfo]);
    }
    
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
