import request from "./index"

//export const CaptchaAPI = () => request.get("/prod-api/captchaImage")
export const CaptchaAPI = ():Promise<CaptchaAPIRes> => request.get("/common/sec/captcha")
//https://www.cwagi.com/common/sec/captcha 