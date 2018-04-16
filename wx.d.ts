declare module wx {
  export function login(config?: Object)
  export function onShareAppMessage(config?: Object)
  export function getUserInfo(config?: Object)
  export function getFriendCloudStorage(config?: Object)
  export function getGroupCloudStorage(config?: Object)
  export function postMessage(config?: Object)

  export function setUserCloudStorage(config: {
    KVDataList: Object[],
    success?: Function,
    fail?: Function,
    complete?: Function
  })

  export function shareAppMessage(config: {
    title: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  })

  export function setKeepScreenOn(config: {
    keepScreenOn: boolean,
    success?: Function,
    fail?: Function,
    complete?: Function
  })
}
