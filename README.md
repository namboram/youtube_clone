## React, PostCSS를 사용해서 YouTube Page를 클론코딩 
YouTube Data API 를 통한 기본적인 Video 서비스 제공 및 사용자중심의 Video서비스 제공
 
---

### ✔️ 목적

- React에 대한 이해를 높이기 위한 실전 프로젝트
- YouTube Data API사용을 통해 비동기 네트워크 통신에 대한 학습

### ✔️ Development stack

Public APIs | Postman | React Hooks | PostCSS | javascript

### ✔️  메인페이지

YouTube API를 통해서 Most Popular Videos 정보를 가져와서 보여준다.
<img width="750" alt="스크린샷 2021-02-24 오후 5 31 31" src="https://user-images.githubusercontent.com/68538657/108992243-6d166900-76dc-11eb-9846-21dea2a5091b.png">


### ✔️  detail 페이지

video가 선택되면 **detail 70%  |   list 30%** 로 화면비율이 변화된다.
<img width="750" alt="스크린샷 2021-02-24 오후 5 32 08" src="https://user-images.githubusercontent.com/68538657/108992267-743d7700-76dc-11eb-8b47-66e92180915b.png">

### ✔️ search 기능

```jsx
const search = useCallback(query=> {
  **setSelectedVideo(null); 👈**

  youtube
  .search(query)
  .then(videos => setVideos(videos));
},[youtube]);
```

선택한 비디오가 있는상태에서 **검색**을 했을때 **setSelectedVideo(null);** 로 **초기화**를 시켜줘서
메인화면과 같이 grid 화면으로 뜨게한다.


---

## axios

### fetch 대용으로 쓸 수 있고, 다른 브라우저상에서 호환이 잘 되도록 만들어져있다.
```jsx
import axios from 'axios';
class Youtube {
    constructor(key){
      this.youtube = axios.create({
        baseURL: 'https://youtube.googleapis.com/youtube/v3',
        params : {key: key},
      });
    }

async mostPopular() {

    const response = await this.youtube.get('videos', {
        params : {
            part : 'snippet',
            chart : 'mostPopular',
            maxResults : 25,
        }
    });
        return response.data.items;
};

async search(query) {
    const response = await this.youtube.get('search', {
        params : {
            part : 'snippet',
            maxResults : 25,
            q : query,
            type : 'video',
        }
    });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));

    };

}

export default Youtube;
```
   
---
### ✔️ 소감
처음으로 react를 사용하여 만들어본 유튜브 클론코딩 프로젝트다.
react에 대한 기본개념을 잡기위해 반복해서 코드를 적어보면서 이해하려 했고 API를 가져와 쓰는게 처음이라 어렵기도 했다.
- 네트워크 통신하는 코드는 자체적으로 따로 모아서 클래스를 만들어서 컴포넌트로 주입해주기.
- key가 코드에 써있으면 안됨. (최상위에 .env 파일만들어서 빼주기)


---
### 제작 소스 제공 및 참고강의
- 드림코딩 아카데미 : https://academy.dream-coding.com


