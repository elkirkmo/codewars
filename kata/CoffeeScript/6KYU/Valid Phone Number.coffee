validPhoneNumber = (phoneNumber) ->
 pattern = ///^ #start of pattern
 \(\d{3}\)\s    #check for ( + 3 digits + ) + trailing whitespace
 \d{3}-  				#check for 3 digits followed by -
 \d{4}  				#check for 4 digits
 $/// 					#end of pattern
 pattern.test phoneNumber