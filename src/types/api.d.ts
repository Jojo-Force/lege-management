// 这个文件转为定义请求参数的类型，和响应的类型
// {
//     "msg":"22",
//     "img":"22",
//     "code":200,
//     "captchaEnabled":true,
//     "uuid":"222",
// }
// 验证码的响应类型约束
interface CaptchaAPIRes {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
  }