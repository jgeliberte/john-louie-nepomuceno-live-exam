<?php
$number = $_POST['text1'];

function printFibonacci($n)
 {
 
  $first = 0;
  $second = 1;
 
    if($n > 1 && $n <= 50){
      echo $first.', '.$second;
      for($i = 2; $i < $n; $i++){

        $third = $first + $second;

        echo ', '.$third;

        $first = $second;
        $second = $third;
      }
    
    }else if($n == 1){
      echo $first;
    }else{
      echo "Please enter numbers 1 - 50 only";
    }
}

printFibonacci($number);
?>