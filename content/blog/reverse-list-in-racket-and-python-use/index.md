---
title: "递归翻转列表"
date: "2019-02-20T22:12:03.284Z"
category: "技术"
emoji: "🐍"
description: "使用递归翻转列表"
---

## Python
-----------

```python

def _reverse(lst, index=-1, ret=[]):
    if len(lst) == 0:
        return []
    elif len(ret) == len(lst):
        return ret
    else:
        ret.append(lst[index])
        return _reverse(lst, index-1, ret)

```

## Racket
----------

```scheme
(define reverse
  (lambda (lst)
    (let loop([lst lst] [ret '()])
      (cond
        [(empty? lst) ret]
        [else
          (loop(cdr lst)
            (cons (first lst) ret))]))))

```   
