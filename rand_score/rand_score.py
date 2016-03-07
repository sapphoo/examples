#!/usr/bin/env python
#-*-coding:utf-8-*-

import random
import csv
import sys

file = "numbers.txt"
f = open(file)
data = []
m = []
for i in f.readlines():
        sum = int(i.replace("\n", "")) #i由string转为int，去掉换行符
        l = [0 for i in range(10)]
        #数组初始化
        #array = [[0]*5 for row in range(3)]
        #数组初始化方法
        #*容易出bug，复制引用 eg: array = [[0]*5]*3
        #标准方法
        #array=[[0 for col in range(5)]for row in range(3)]
        
        for i in range(sum):
                while True:
                        r = random.random();
                        if r < 0.64:
                                n = random.randint(0, 7)#random产生浮点数
                        else:
                                n = random.randint(8,9)
                        if (n < 8 and l[n] >= 8) or (n >= 8 and l[n] >= 18):
                                continue
                        l[n] += 1
                        break
        for i in l:
                print(str(i) + " ", end = "")#print默认换行
        print(sum)
        m = [l,sum]
        #l.append(sum)
        #data.append(l)
        data.append(m)
        
with open('test.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for item in data:
                writer.writerow(item)
