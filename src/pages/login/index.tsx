import {
    ButtonWrapper,
    ErrorWrapper,
    FormWrapper,
    InputWrapper,
    LoginTitle,
    LoginWrapper,
} from './styled.ts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type FormData = {
    login: string
    password: string
}

const Login = () => {
    const navigation = useNavigate()
    const [formData, setFormData] = useState<FormData>({
        login: '',
        password: '',
    })
    const [error, setError] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error) setError(false)
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { login, password } = formData
        if (
            login === import.meta.env.VITE_LOGIN &&
            password === import.meta.env.VITE_PASSWORD
        ) {
            localStorage.setItem('token', 'token')
            navigation('/games')
        } else {
            setError(true)
        }
    }
    return (
        <LoginWrapper>
            <LoginTitle>ВХОД</LoginTitle>
            <FormWrapper onSubmit={handleSubmit}>
                <InputWrapper
                    type="text"
                    name="login"
                    placeholder="Логин"
                    value={formData.login}
                    onChange={handleChange}
                    required
                />
                <InputWrapper
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {error && (
                    <ErrorWrapper>
                        Ошибка: Неверный логин или пароль
                    </ErrorWrapper>
                )}

                <ButtonWrapper type="primary" htmlType="submit">
                    Отправить
                </ButtonWrapper>
            </FormWrapper>
        </LoginWrapper>
    )
}

export default Login
