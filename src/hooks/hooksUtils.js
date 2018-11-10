export const useHooksComposer = hooks => {
  function cFL(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return Object.keys(hooks).reduce((all, key) => {
    const t = React.useState(hooks[key])
    all[key] = t[0]
    all[`set${cFL(key)}`] = t[1]
    return all
  }, {})
}
