import { useState } from "react";
import { toast } from "react-toastify";
import BasicButton from "@components/Button/Button";
import { toastMessage } from "@components/Toast/toast-message";
import useInputs from "@hooks/use-inputs";
import * as S from "./style";
import axios from "axios";

const SignInForm = () => {
  const [{ email }, onChangeForm, errors] = useInputs({
    email: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [cursor, setCursor] = useState("pointer");

  const toastOption = {
    autoClose: 2000,
    theme: "colored",
  };

  const onSubmitSignin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "" || password === "")
      return toastMessage("이메일 비밀번호를 입력해주세요", toast.error);
    setIsValid(false);
    setCursor("wait");
    try {
      const res = await toast.promise(signInRequest(email, password), {
        pending: {
          render() {
            return "처리 중 ...";
          },
          ...toastOption,
        },
        success: {
          render() {
            return "로그인 성공";
          },
          icon: "😄",
          ...toastOption,
        },
        error: {
          render(data) {
            return `${data.data.response.data.error}`;
          },
          icon: "😢",
          ...toastOption,
        },
      });
      localStorage.setItem("accessToken", res.data.data.token);
    } catch (error) {
      toastMessage(error, toast.error);
    } finally {
      setIsValid(true);
      setCursor("pointer");
    }
  };

  // 로그인 요청(Back-end 통신)
  const signInRequest = (email, password) => {
    return axios.post(
      "http://localhost:9000/user/login",
      { email, password },
      { withCredentials: true }
    );
  };

  return (
    <S.Form onSubmit={onSubmitSignin}>
      <S.InputBox errors={errors.email}>
        <label>이메일</label>
        <input
          type="email"
          name="email"
          onChange={onChangeForm}
          placeholder="이메일"
        />
      </S.InputBox>
      {errors.email && <S.FailMessage>{errors.email}</S.FailMessage>}
      <S.InputBox>
        <label>비밀번호</label>
        <input type="password" name="password" placeholder="비밀번호" />
      </S.InputBox>
      <BasicButton
        size={"full"}
        shape={"default"}
        variant={"primary"}
        cursor={cursor}
        disabled={!isValid}
      >
        로그인
      </BasicButton>
    </S.Form>
  );
};

export default SignInForm;
