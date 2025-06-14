import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import { Offers } from './pages/Offers.jsx'
import { Profile } from './pages/Profile.jsx'
import { SignIn } from './pages/SignIn.jsx'
import { Home } from './pages/Home.jsx'
import { SignUp } from './pages/SignUp.jsx'
import { Header } from './components/Header.jsx'
import { ForgotPassword } from './pages/ForgotPassword.jsx'
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports.js'
import { VerifyAccount } from './pages/VerifyAccount.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { AuthProvider } from './AuthContext.jsx'




Amplify.configure(awsExports)
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={
            <ProtectedRoute>
              <Offers />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/verify" element={<VerifyAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
