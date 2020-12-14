<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name_message = $_POST['name_message'];
$phone_message = $_POST['phone_message'];
$message_message = $_POST['message_message'];
$email_subscription = $_POST['email_subscription'];
$name_booking = $_POST['name_booking'];
$phone_booking = $_POST['phone_booking'];
$message_booking = $_POST['message_booking'];
$email_booking = $_POST['email_booking'];

// Формирование самого письма
$title_message = "Новое обращение Best Tour Plan";
$body_message = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name_message<br>
<b>Номер телефона:</b> $phone_message<br><br>
<b>Сообщение:</b><br>$message_message
";

$title_subscription = "Подписка на рассылку Best Tour Plan";
$body_subscription = "
<b>Email:</b> $email_subscription<br>

";

$title_booking = "Заявка на бронирование Best Tour Plan";
$body_booking = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name_booking<br>
<b>Номер телефона:</b> $phone_booking<br><br>
<b>Email:</b> $email_booking<br><br>
<b>Сообщение:</b><br>$message_booking
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'test.mail.saveleva.albina@gmail.com'; // Логин на почте
    $mail->Password   = 'test_mail_ololo_cfdtkmtdf'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('test.mail.saveleva.albina@gmail.com', 'Альбина Савельева'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('saveleva.albina.96@mail.ru');  
    $mail->isHTML(true);

    // Отправка сообщения
    if ($name_message != "") {
        $mail->Subject = $title_message;
        $mail->Body = $body_message;  
    } else if ($name_booking != "") {
        $mail->Subject = $title_booking;
        $mail->Body = $body_booking;  
    } else  if (!empty($email_subscription)){
        $mail->Subject = $title_subscription;
        $mail->Body = $body_subscription;
    }  

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
    header('Location: thankyou.html');  
?>