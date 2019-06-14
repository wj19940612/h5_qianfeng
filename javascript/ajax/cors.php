<?php
    $person=array('name'=>'xiaoSun',age=30);

    header('Access-Control-Allow-Origin: *');
    echo json_encode($person);
?>