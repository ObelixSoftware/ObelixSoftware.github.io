<?php
    $csvFile = file('input.csv');

    $count = 0;
    foreach ($csvFile as $currentLine) {

        $currentLine = trim($currentLine);
        $details = explode(";", $currentLine);
        
        $heading = $details[0];
        $reference = $details[1];

        if (strlen($reference) == 0) {
            $generateLine = "<h3>".$heading."</h3>";  
        }
        else {
            $generateLine = "<li><a href='".$reference."'>".$heading."</a></li>";  
        }
        echo $generateLine."\n\n";

    }
?>
