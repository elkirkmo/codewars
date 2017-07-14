def total_bill(s):
    a = s.replace(' ', '')
    b = list(a)
    total = 0
    counter = 1
    for i in b:
        total += 0 if counter % 5 == 0 else 2
        counter += 1
    return total
  