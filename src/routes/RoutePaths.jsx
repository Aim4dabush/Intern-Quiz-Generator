import { Route, Routes } from "react-router-dom"

// pages
import App from "../App";
import FinishPage from "../pages/finish-page/FinishPage";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage.jsx";
import PrepPage from "../pages/prep-page/PrepPage";
import QuestionPage from "../pages/question-page/QuestionPage";
import RegisterPage from "../pages/register-page/RegisterPage";

function RoutePaths() {
  return (
    <Routes>
        <Route element={<App />} path="/">
            <Route index element={<HomePage />} />
            <Route element={<RegisterPage />} path="register" />
            <Route element={<LoginPage />} path="login" />
            <Route element={<PrepPage />} path="prepare" />
            <Route element={<QuestionPage />} path="questions" />
            <Route element={<FinishPage />} path="finish" />
        </Route>
    </Routes>
  )
}

export default RoutePaths