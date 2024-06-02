import { FC, useEffect, useState } from "react";
import { Button, Form, Input } from "antd-mobile";
import { getCaptcha, login } from "@/services/login";
import { setTokenByStorage } from "@/utils/storage";
import { useNavigate } from "umi";

const Login: FC = () => {
  const navigate = useNavigate();
  const [codeUrl, setCodeUrl] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [form] = Form.useForm();
  const getCaptchaHandel = async () => {
    const res = await getCaptcha();
    if (res.data.code === "10200") {
      setCodeUrl(res.data.data.codeSrc);
      setCaptchaToken(res.data.data.codeToken);
    }
  };

  useEffect(() => {
    getCaptchaHandel();
    return () => {};
  }, []);

  const render = () => {
    return <img src={svgToBase64(codeUrl)} onClick={getCaptchaHandel} alt="" />;
  };

  const onSubmit = async () => {
    await form.validateFields();
    const data = form.getFieldsValue();
    const res = await login({ ...data, code_token: captchaToken });
    if (res.data.code === "10200") {
      setTokenByStorage(res.data.data.access_token);
      navigate("/Note");
    }
  };
  return (
    <div>
      <Form form={form} layout="horizontal" mode="card">
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input type="password" placeholder="请输入" />
        </Form.Item>
        <Form.Item label="验证码" name="code" extra={render()}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Button block color="primary" onClick={onSubmit} size="large">
          提交
        </Button>
      </Form>
    </div>
  );
};

function svgToBase64(svgString: string) {
  const base64Code = btoa(svgString);
  const base64SVG = `data:image/svg+xml;base64,${base64Code}`;
  return base64SVG;
}

export default Login;
