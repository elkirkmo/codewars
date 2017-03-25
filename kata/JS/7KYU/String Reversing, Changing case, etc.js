function reverseAndMirror(s1,s2) {
  return s2.split('').reverse().map((x)=>x===x.toUpperCase()?x.toLowerCase():x.toUpperCase()).join('')+"@@@"+s1.split('').reverse('').map((x)=>x===x.toUpperCase()?x.toLowerCase():x.toUpperCase()).join('')+s1.split('').map((x)=>x===x.toUpperCase()?x.toLowerCase():x.toUpperCase()).join('')
}