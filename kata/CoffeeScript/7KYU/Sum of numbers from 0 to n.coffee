class SequenceSum
  @showSequence:(count)->
   str = ''
   sum = 0
   if count is 0
    return """#{count}=0"""
   else if count < 0
    return """#{count}<0"""
    
   i = 0
   while i <= count
   	last = if i is count then i.toString()+" = " else i.toString()+"+"
    str += """#{last}"""
    sum += i
    i++
   str+ sum.toString()