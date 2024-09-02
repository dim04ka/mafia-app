import styled from 'styled-components'
import { Button, Input } from 'antd'

export const LoginWrapper = styled.div`
    background: black;
    height: 100%;
    padding: 20px;
`

export const LoginTitle = styled.div`
    font-size: 36px;
    color: white;
    font-weight: 500;
    padding-top: 60px;
    text-align: center;
    margin-bottom: 80px;
`

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputWrapper = styled(Input)`
    height: 50px;
    font-size: 20px;
`

export const ButtonWrapper = styled(Button)`
    height: 50px;
    font-size: 20px;
`

export const ErrorWrapper = styled.div`
    color: red;
    font-size: 20px;
`
