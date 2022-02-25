---
title:  "Front-end Mini project - 일기예보"
excerpt: "[0]. Weather Forecast"

categories: html
tags:
  - [html, css, javascript]

toc: true
toc_sticky: true
 
date: 2022-02-24
last_modified_at: 2022-02-24
---
# Javascript 미니 프로젝트 (오늘의 날씨)
  
* 팀원 구성 :  
  - 이승현  
  - 이정훈  
  - 장우재  
  - 윤지원  
  
* 프로젝트 소개 : 도시별 오늘의 날씨를 확인하는 일기예보  
  
* 프로젝트 진행 기간 : 2022-02-24 ~ 2022-02-25  
  
* 구현 기능 :  
  1. 기상정보 수집 - open API를 이용하여 도시별 날씨 정보를 받아왔다.  
    (openweathermap 사이트 이용 : [https://openweathermap.org])  
  2. 기상정보 분리 - json형태로 정보를 정리하고, 사용할 데이터를 분리한다.  
  3. 도시 설정 - 도시의 이름을 나타내는 value를 select - option을 활용하여 매칭시킨다.  
  4. 날짜 및 시간 - 현재 날짜 및 시간을 나타내는 section을 추가하였다.  
  
* 과정 : (저희는 Live share를 사용하여 작업하였습니다.)
  
  0. 방향 설정 : 구현기능 설계 및 아웃라인 도출

  1. 방향성 확인 :  
    
  ![introduction](https://user-images.githubusercontent.com/59858894/155516028-dc4bfec6-32ec-4b72-9171-09c65abd8594.png)  

  2. 브라우저 화면 구성 :  
    
  ![introduction2](https://user-images.githubusercontent.com/59858894/155517624-7774a233-ae18-4508-9d5a-36e0c97d952e.PNG)  

  3. 배경 및 브라우저 꾸미기 :  
    
  ![introduction3](https://user-images.githubusercontent.com/59858894/155517885-065c9e49-4a27-4bff-8252-75c348fcfbf8.PNG)

  4. 기능 점검 :  
    
  ![5](https://user-images.githubusercontent.com/59858894/155628873-00d49f1b-e7ca-4e18-b163-8fffe8438f9f.PNG)
    
  5. Lighthouse :  
    
  ![introduction4](https://user-images.githubusercontent.com/59858894/155629019-8414270e-5627-4eca-978d-7d4e7352456a.png)



  # Error revising
    
  - 도시 이름 정보를 받아오기 : 이름의 정보를 받아오는 것이 아니라 index를 받아오는 것임을 늦게 알아차렸다.  
    
  - openweathermap은 온도 정보를 절대온도(K)로 주기 때문에 섭씨로 바꾸는 작업이 필요했다.  
    - 그런데 알고보니 api url 뒤에 &units=metric을 붙이면 알아서 섭씨로 변경해 주었다.  
    
  - 브라우저 화면에 나타나는 값을 변경하기 위해서 innerText를 사용하였는데 오류가 발생하였다.  
    - innerText는 안전성이 떨어지는 좋지 않은 방식이었다.  
    - textContent로 변경하니 바로 해결되었다.  
  
  # 아쉬운 점
    
  1. 의도하는 기능을 다 구현하지는 못했다.  
  2. 코드에 대한 이해나 구현 방법에 대해 부족한 점이 많았다.  
  3. 공부가 부족했다...
