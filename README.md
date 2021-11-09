# 제목입니다.
## 제목입니다.
### 제목입니다
#### 제목입니다.
### 각자 github에 front_study라는 repositort를 만들어서 현재 폴더를 git에 업로드

- 텍스트 내용입니다.
    - 안녕하세요
1. 숫자내용
1. 숫자내용
```
int a = 10;
```
1. 안녕하세요

### git 연동 순서
1. github repository 만들기
2. 내 PC username, email 확인하기
3. git 으로 지정할 폴더 cmd접속
3. git init
4. git remote add origin '깃허브 repo주소'
5. 올릴 파일 지정
- git add .
7. git commit -m '커밋메시지'
8. git branch -M main
- 메인 브랜치를 main으로 변경
9. git push origin main

# 수업내용 정리
## front 1일차 (20211109)
### 인라인 요소(inline element), 블록 요소 (block element)
1. 인라인 요소 
    - 태그 내용을 표현하고 줄이 바뀌지 않음
    - 보통 텍스트 내용만큼만 영역을 차지하게 됨
    - 가로, 세로 크기를 따로 지정할 수 없음
        - 가로, 세로 크기를 지정하고 싶으면 css로 블록 요소 지정해야 함
    - 대표적인 인라인 요소
        - span , a 등 

2. 블록 요소
    - 태그 내용을 표현하고 줄이 바뀜
    - 텍스트 내용과는 상관 없이 한 줄을 모두 차지함
    - 가로, 세로 크기를 지정할 수 있음
    - 대표적인 블록 태그 
        - div , h1 ~ h6 등 

### 주로 사용하게 될 태그들
- <style>, <script>, <h1>, <p>, <div>
- <form>, <input>, <button>, <select>
- <br> 줄바꾸는 태그

## UI/UX
- UI (User Interface) : 화면, GUI(Graphical User Interface)
- UX (User eXperience) : 사용자 경험, 얼마나 쓰기 좋냐 

## 경로 지정시 사용하는 방법

- ./ : 현재 파일이 있는 폴더를 가리킴
- ../ : 현재 폴더에서 한 수준 위로 올라가는 폴더를 가리킴