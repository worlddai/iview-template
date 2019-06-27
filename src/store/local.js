/**
 * 存储localStorage
 */
export const setLocalStore = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取localStorage
 */
export const getLocalStore = key => {
  if (!key) return
  return window.localStorage.getItem(key)
}

/**
 * 删除localStorage
 */
export const removeLocalStore = key => {
  if (!key) return
  window.localStorage.removeItem(key)
}

export const clear = () => {
  window.localStorage.clear();
}