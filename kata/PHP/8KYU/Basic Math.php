function basicOp($op, $val1, $val2)
{
  switch($op){
    case '+':
    	$result = $val1 + $val2;
    	break;
    case '-':
    	$result = $val1 - $val2;
    	break;
    case '*':
    	$result = $val1 * $val2;
    	break;
    case '/':
    	$result = $val1 / $val2;
    	break;
    }
    return $result;
 
}