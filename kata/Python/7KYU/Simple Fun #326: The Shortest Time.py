def shortest_time(n,m,speeds):
  arrTime = abs(n-m) * speeds[0]
  descTime = (n - 1)  * speeds[0]
  doorTime = (speeds[1] * 2) + speeds[2]
  elTime = arrTime + descTime + doorTime
  return min(elTime, speeds[3] * (n -1)) if n > 1 else 0