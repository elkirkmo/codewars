function remove_exclamation_marks($string) {
  $replace = preg_replace("/(!)/","",$string);
  return $replace;
}