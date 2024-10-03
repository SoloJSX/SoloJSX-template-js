import javascriptLogo from '/javascript.svg'
import solojsxLogo from '/solojsx.png'
import viteLogo from '/vite.svg'

export function App() {
    return <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src={javascriptLogo} class="logo logojs" alt="JavaScript logo" />
        </a>
        <a href="https://github.com/SoloJSX/SoloJSX" target="_blank">
            <img src={solojsxLogo} class="logo logosolojsx" alt="SoloJSX logo" />
        </a>
        <h1>Vite + JavaScript + SoloJSX</h1>
        <p class="read-the-docs">
            Click on the Vite, JavaScript and SoloJSX logos to learn more
        </p>
    </div>
}

document.body.append(App())
