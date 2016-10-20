<?php
function errorMessage(){
    if(isset($_GET['errorLogin']) && isset($_GET['withLogin'])){
        echo '<div class="alert alert-danger" role="alert">Erreur lors de la connexion</div>';
        $loginValue = 'value="'.$_GET['withLogin'].'"';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Identification</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <style media="screen">
        header{
            background-color: #098;
            padding-top: 40px;
            color: #fff;
            font-size: 2em;
            font-weight: bold;
            text-align: center;
        }
        header a{
            float: right;
            color: #ffc;
        }
    </style>
</head>
<body>
    <header>
        <h1>Mon Site</h1>
    </header>
    <form action="test_identification.php" method="post" class="form-horizontal">
    <div class ="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <h1>Identification</h1>
                    </div>
                    <?php echo errorMessage(); ?>

                    <div class="panel-body">
                        <div class="col-md-2 control-label">Email </div>
                        <input type="email" name= "email" placeholder="Email" class="form-control"/>

                        <div class="col-md-2 control-label">Password </div>
                        <input type="password" name="password" placeholder="Password" class="form-control"/></br>
                        <button type="submit" class="btn btn-default" name="valider">Valider</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
