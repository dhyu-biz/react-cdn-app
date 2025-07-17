# 리액트 CDN 앱 - 아임웹 연동

아임웹에서 스크립트 태그로 불러올 수 있는 리액트 앱입니다.

## 🚀 기능

- 카운터 기능
- 이름 입력 및 인사말
- 아임웹과 완전히 격리된 스타일링
- 반응형 디자인
- CDN을 통한 빠른 로딩

## 📁 프로젝트 구조

```
react-cdn-app/
├── src/
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── App.css          # 격리된 스타일
│   └── main.jsx         # CDN 진입점
├── dist/                # 빌드된 파일들
│   ├── react-cdn-app.css
│   └── react-cdn-app.umd.cjs
├── imweb-example.html   # 로컬 테스트용
├── imweb-script-code.html # 아임웹용 스크립트
└── README.md
```

## 🛠️ 개발

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 🌐 아임웹 연동 방법

### 1단계: CDN 업로드
빌드된 파일들을 CDN에 업로드하세요:
- `dist/react-cdn-app.css`
- `dist/react-cdn-app.umd.cjs`

### 2단계: 아임웹 HTML 편집기
다음 HTML을 원하는 위치에 추가:
```html
<div id="react-cdn-app-container" style="margin: 40px 0; min-height: 400px;"></div>
```

### 3단계: 아임웹 스크립트 편집기
다음 JavaScript 코드를 추가:
```javascript
// React CDN 로드
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.crossOrigin = 'anonymous';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function loadCSS(href) {
    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        document.head.appendChild(link);
    });
}

// 리액트 앱 로드 및 마운트
async function loadReactApp() {
    try {
        // React와 ReactDOM 로드
        await loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
        await loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
        
        // 리액트 앱 CSS 로드 (CDN URL로 변경 필요)
        await loadCSS('https://your-cdn-url.com/react-cdn-app.css');
        
        // 리액트 앱 JavaScript 로드 (CDN URL로 변경 필요)
        await loadScript('https://your-cdn-url.com/react-cdn-app.umd.cjs');
        
        // 앱 마운트
        if (window.ReactCDNApp) {
            window.ReactCDNApp.mount('react-cdn-app-container');
        } else {
            console.error('ReactCDNApp이 로드되지 않았습니다.');
        }
    } catch (error) {
        console.error('리액트 앱 로드 중 오류:', error);
    }
}

// 페이지 로드 완료 후 앱 로드
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadReactApp);
} else {
    loadReactApp();
}
```

## 🔧 커스터마이징

### 앱 수정
1. `src/App.jsx`에서 컴포넌트 수정
2. `src/App.css`에서 스타일 수정
3. `npm run build`로 다시 빌드

### 다른 컨테이너에 마운트
```javascript
// 다른 ID로 마운트
window.ReactCDNApp.mount('my-custom-container');
```

## 📝 주의사항

1. **CDN URL 변경**: 스크립트에서 `https://your-cdn-url.com/` 부분을 실제 CDN URL로 변경하세요.
2. **파일 업로드**: 빌드된 파일들을 CDN에 업로드해야 합니다.
3. **캐싱**: CDN에서 적절한 캐싱 설정을 해주세요.

## 🎯 테스트

로컬에서 테스트하려면:
```bash
npm run build
python -m http.server 8000
```

그 후 `http://localhost:8000/imweb-example.html`에서 확인할 수 있습니다.

## 📞 지원

문제가 있거나 개선사항이 있으면 이슈를 등록해주세요!
