# Assignment 1

##### This repo is a submission for an assignment.

### Access Link - https://codesandbox.io/p/sandbox/assignment1-risva-rachna-zg4vwl

### Login API

`GET` - `/login?user=<user>&pass=<pass>`
```
Description: To get verify login with 'user' & 'pass'
Parameter: user & pass - original client key
Response: Login Successful
```
1. Example - https://abc.codesanbox.io/login?user=aaJJaa12&pass=as7sa8@kkdA
```
Login Successful
```

2. Example - https://abc.codesanbox.io/login?user=aaJJaa12&pass=as7s
```json
{"error":"Password not valid"}
```
2. Example - https://abc.codesanbox.io/login?user=aa&pass=as7s
```json
{"error":"Username not valid"}
```
   
