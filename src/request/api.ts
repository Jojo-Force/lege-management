import request from "./index"

export const CaptchaAPI = ():Promise<CaptchaAPIRes> => request.get("/prod-api/captchaImage");
//export const CaptchaAPI = ():Promise<CaptchaAPIRes> => request.get("/common/sec/captcha")
//https://www.cwagi.com/common/sec/captcha 

export const LoginAPI = (params:LoginAPIReq):Promise<LoginAPIRes> => request.post("/prod-api/login",params);