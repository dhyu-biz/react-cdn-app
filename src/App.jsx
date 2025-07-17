import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div className="react-cdn-app">
      <div className="app-container">
        <h1>🎉 리액트 CDN 앱</h1>
        <p>아임웹에서 스크립트 태그로 불러온 리액트 앱입니다!</p>
        
        <div className="counter-section">
          <h2>카운터: {count}</h2>
          <button 
            className="counter-btn"
            onClick={() => setCount(count + 1)}
          >
            +1 증가
          </button>
          <button 
            className="counter-btn reset"
            onClick={() => setCount(0)}
          >
            리셋
          </button>
        </div>

        <div className="input-section">
          <h2>이름 입력</h2>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
          {name && <p className="greeting">안녕하세요, {name}님! 👋</p>}
        </div>

        <div className="info-section">
          <h3>ℹ️ 정보</h3>
          <ul>
            <li>이 앱은 CDN을 통해 로드됩니다</li>
            <li>아임웹에서 스크립트 태그로 불러올 수 있습니다</li>
            <li>완전히 격리된 환경에서 동작합니다</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
