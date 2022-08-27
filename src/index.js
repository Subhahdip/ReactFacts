import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import MainContent from "./components/Main Content"

const App = (
    <div>
        <Header />
        <MainContent />
    </div>
)

ReactDOM.render(App, document.getElementById("root"))