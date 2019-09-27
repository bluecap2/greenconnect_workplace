# greenconnect_workplace

hitechinfo에서 프로젝트 시작하기 도움말
https://github.com/hitechinfo/template_frontend_react_001/blob/master/docs/00.%20project_pre.md

nodejs 설치경로
https://nodejs.org/ko/

git 설치 경로
https://git-scm.com/downloads

vs code
https://code.visualstudio.com/


> 집에서 설치 다 했어
https://github.com/hitechinfo/template_frontend_react_002

바탕화면 > module3 > git bash실행
 Git Bash 실행 후 git clone https://github.com/hitechinfo/template_frontend_react_002.git
 Git Bash에서 해당 폴더로 이동 후 npm install
 Git Bash에서 npm start
 List 메뉴의 Sample 목록 조회 기능은 template_backend_node_002 또는 template_backend_springboot_002 실행 필요

준비 끝

> VS CODE 실행
 파일 - 폴더열기 - C:\Users\Administrator\Desktop\module3\template_frontend_react_002
 
 ndex.js에서 화면 그리는 영역 확인 (\src\index.js 참고)
헤더영역 수정 (src\components\block\MainHeader.js 참고)
푸터영역 수정 (src\components\block\MainFooter.js 참고)
메뉴영역 수정 (src\containers\menu\MenuContainer.js 및 src\components\menu\MainMenu.js 참고)
"/" 으로 연결되는 메인영역 수정 (src\App.js 참고)
Component 또는 Container로 메인영역에 들어갈 새로운 UI 작성 (src\containers\list\ListContainer.js 및 src\components\list\SampleList.js 참고)
Redux 연계가 필요한 경우 액션 및 리듀서 정의 (src\modules\list.js 및 src\modules\index.js 참고)
Routing 정보 등록 (src\routes\index.js 참고)
