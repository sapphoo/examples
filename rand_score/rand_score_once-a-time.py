#!/usr/bin/env python

import random

while True:
	try:
		c = input()
		if c == "q":
			break
		sum = int(c)
		if sum < 0 and sum > 100:
			continue
		l = [0 for i in range(10)]
		for i in range(sum):
			while True:
				n = random.randint(0, 9)
				if (n < 8 and l[n] >= 8) or (n >= 8 and l[n] >= 18):
					continue
				l[n] += 1
				break
		for i in l:
			print str(i) + "\t",
		print sum
	except:
		pass