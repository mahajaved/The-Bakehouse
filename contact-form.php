
<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo= "mahajaved.2016@gmail";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");
}

/*  $name = $_POST['name'];
  $visitorEmail = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'javedmaha99@gmail.com';
  $email_subject = "New form Submission";
  $email_body = "User Name: $name.\n".
                 "User Email: $visitor_email.\n".
                   "User Message:  $message.\n";

  $to = "mahajaved.2016@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers = "Reply-To: $visitor_email /r/n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: contactUs.html");



  $to = "somebody@example.com, somebodyelse@example.com";
  $subject = "HTML email";

  $message = "
  <html>
  <head>
  <title>HTML email</title>
  </head>
  <body>
  <p>This email contains HTML Tags!</p>
  <table>
  <tr>
  <th>Firstname</th>
  <th>Lastname</th>
  </tr>
  <tr>
  <td>John</td>
  <td>Doe</td>
  </tr>
  </table>
  </body>
  </html>
  ";

  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  // More headers
  $headers .= 'From: <webmaster@example.com>' . "\r\n";
  $headers .= 'Cc: myboss@example.com' . "\r\n";

  mail($to,$subject,$message,$headers);
  ?>

</body>
</html> */
